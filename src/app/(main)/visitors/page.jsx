"use client"
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
        <div style={{display: "flex", flexDirection: "column", paddingLeft: 32, marginTop: 64}}>
            {data && data.map((e, i) => {
                return (<span style={{color: "white"}} key={i}>{e.countryName}, {e.regionName}, {e.city}</span>)
            })}
        </div>
    </>

}