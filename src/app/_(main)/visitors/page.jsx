"use client"
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { formatRelativeDate } from "@/lib/timeLib";
import styles from "./style.module.css";

const PageViewMap = dynamic(() => import('@/components/statistics/PageViewMap'), {
    ssr: false
});

export default function Visitors() {
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
        };

        if (data.length === 0) {
            fetchVisitors();
        }
    }, []);

    const groupedData = data.reduce((acc, item) => {
        const country = item.countryName;
        if (!acc[country]) {
            acc[country] = [];
        }
        acc[country].push(item);
        return acc;
    }, {});

    return (
        <div className={styles.c}>
            <PageViewMap locations={data.map((e) => ({ lat: e.lat, lng: e.lon }))} />

            {Object.entries(groupedData).map(([countryName, visitors]) => (
                <div key={countryName} className={styles.countryGroup}>
                        <CountryTag
                            visitors={visitors}
                            countryName={countryName}
                        />
                </div>
            ))}
        </div>
    );
}


function CountryTag ({visitors, countryName}) {

    const [collapsed, setCollapsed] = useState(true)

    return (
        <>
            <div
                style={{background: `hsl(155, ${collapsed ? 25 : 75}%, ${collapsed ? 10 : 15}%)`}}
                className={styles.countryHeader}
                onClick={() => {setCollapsed(!collapsed)}}
                >
                <Image
                    width={32}
                    height={24}
                    className={styles.flag}
                    alt={`flag_${visitors[0].countryCode}`}
                    src={`https://flagcdn.com/h120/${visitors[0].countryCode.toLowerCase()}.png`}
                />
                <strong>{countryName}</strong>
                <span className={styles.visitorCount}>{visitors.length}</span>
            </div>

            {!collapsed && <div className={styles.visitorList}>
                {visitors.map((e, i) => (
                    <div key={i} className={styles.visitorItem}>
                        <span className={styles.regionCity}>
                            {e.regionName}, {e.city}
                        </span>
                        <span>{formatRelativeDate(new Date(e.lastVisit))}</span>
                    </div>
                    ))}
            </div>}
        </>
    )
}