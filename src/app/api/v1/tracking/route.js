import { NextResponse } from 'next/server'
import logger from '../../../../../logger.mjs';
import { db } from '@/lib/db';

export async function POST(req) {
    try {

        // Hent X-Forwarded-For header (hvis satt)
        const forwardedFor = req.headers.get('x-forwarded-for');
        // Hvis headeren finnes, ta første IP (første element før evt. komma).
        // Hvis den ikke finnes, fall tilbake til X-Real-IP eller '127.0.0.1'
        var clientIp = forwardedFor 
        ? forwardedFor.split(',')[0].trim()
        : (req.headers.get('x-real-ip') ?? '127.0.0.1');
        
        if (!clientIp || clientIp === "::1") {
            clientIp = "8.8.8.8"
        }
        
        logger.info({message: "IP: " + clientIp})
        
        const response = await fetch(`http://ip-api.com/json/${clientIp}`);
        const data = await response.json();
        
        logger.info({message: JSON.stringify(data)})
        
        // TODO: Lagre data i en database
        logger.info('Besøk fra:', `${data.countryName}, ${data.city}`);
        
        const dbData = await db.visitor.upsert({
            where: {
                ip: clientIp
            },
            update: {
                lastVisit: new Date()
            },
            create: {
                ip: clientIp,
                countryName: data.country,
                countryCode: data.countryCode,
                regionName: data.regionName,
                city: data.city,
                lat: data.lat + "",
                lon: data.lon + "",
                timezone: data.timezone ?? "Unknown", // or make it optional in schema
            }
        });
    
    return NextResponse.json({ success: true, clientIp, dbData, location: `${data.country}, ${data.city}` })
    } catch (err) {
        logger.error({message: err.message})
        return NextResponse.json({ success: false})
    }

}

export async function GET() {

    const dbData = await db.visitor.findMany()
    const data = dbData

    return NextResponse.json({ success: true, data: data})
}