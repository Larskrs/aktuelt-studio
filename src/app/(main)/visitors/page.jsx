"use client"
import dynamic from "next/dynamic";
import Image from "next/image"
import { useEffect, useState } from "react"
import { formatRelativeDate, TimeAgo } from "@/lib/timeLib";

const PageViewMap = dynamic(() => import('@/components/statistics/PageViewMap'), {
    ssr: false
});

export default function Visitors () {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchVisitors = async () => {
            try {
                const res = await fetch('/api/v1/tracking');
                const json = await res.json();
                setData(json.data);
            } catch (err) {
                console.error('Feil ved henting av land:', err);
            } finally {
                setLoading(false);
            }
        }

        if (data.length === 0) {
            fetchVisitors();
        }
    }, []);

    // Group data by country
    const groupedData = data.reduce((acc, item) => {
        const country = item.countryName;
        if (!acc[country]) {
            acc[country] = [];
        }
        acc[country].push(item);
        return acc;
    }, {});

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1em", paddingLeft: 32, marginTop: 64 }}>
            <PageViewMap locations={data.map((e) => ({ lat: e.lat, lng: e.lon }))} />

            {Object.entries(groupedData).map(([countryName, visitors]) => (
                <div key={countryName} style={{ color: "white" }}>
                    {/* Country Header with Flag & Counter */}
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5em",
                        background: "hsl(155, 50.00%, 14.90%)",
                        padding: "0.5em",
                        borderRadius: "0.5em",
                        width: "fit-content"
                    }}>
                        <Image
                            width={32}
                            height={24}
                            style={{ borderRadius: "0.25em", objectFit: "cover" }}
                            alt={`flag_${visitors[0].countryCode}`}
                            src={`https://flagcdn.com/h120/${visitors[0].countryCode.toLowerCase()}.png`}
                        />
                        <strong>{countryName}</strong>
                        <span style={{
                            width: "1.5em",
                            height: "1.5em",
                            background: "hsl(155, 50%, 25%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            borderRadius: "50%"
                        }}
                        >{visitors.length}</span>
                    </div>

                    {/* Region, City, Time */}
                    <div style={{ paddingLeft: "2em", marginTop: "0.5em", display: "flex", flexDirection: "column", gap: "0.25em" }}>
                        {visitors.map((e, i) => (
                            <div key={i} style={{
                                width: "fit-content",
                                gap: "1em",
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <span style={{
                                    padding: "0.5em 1em",
                                    background: "hsl(var(--primary-hue), 25%, 7.5%)",
                                    borderRadius: "0.5em",
                                }}>{e.regionName}, {e.city}</span>
                                <span>{formatRelativeDate(new Date(e.lastVisit))}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
