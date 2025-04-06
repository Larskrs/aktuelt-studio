"use client"
import PageViewMap from "@/components/statistics/PageViewMap"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Visitors ({}) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchVisitors = async () => {

            try {
                const res = await fetch('/api/v1/tracking');
                const data = await res.json();
                setData(data.data);
            } catch (err) {
                console.error('Feil ved henting av land:', err);
            } finally {
                setLoading(false);
            }
        }

        if (data != []) {
            fetchVisitors()
        }
    }, [])

    return <>
        <div style={{display: "flex", gap: "0.25em", flexDirection: "column", paddingLeft: 32, marginTop: 64}}>
            <PageViewMap locations={data.map((e, i) => { return { lat: e.lat, lng: e.lon }})} />
            {data && data.map((e, i) => {
                return (<span style={{color: "white", display: "flex", gap: "0.5em"}} key={i}>
                    <Image style={{objectFit: "cover", borderRadius: "0.25em", height: "auto"}} width={32} height={32} alt={`flag_${e.countryCode}`} src={`https://flagcdn.com/h120/${e.countryCode.toLowerCase()}.png`} />
                    <span>{e.countryName}</span>
                    <span>{e.regionName}, {e.city}</span>
                    </span>)
            })}

        </div>
    </>

}

function CountryToEmoji (countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}