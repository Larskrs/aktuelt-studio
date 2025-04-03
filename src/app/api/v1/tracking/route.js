import { NextResponse } from 'next/server'
import logger from '../../../../../logger.mjs';

export async function POST(req) {

    // Hent X-Forwarded-For header (hvis satt)
    const forwardedFor = req.headers.get('x-forwarded-for');
    // Hvis headeren finnes, ta første IP (første element før evt. komma).
    // Hvis den ikke finnes, fall tilbake til X-Real-IP eller '127.0.0.1'
    var clientIp = forwardedFor 
      ? forwardedFor.split(',')[0].trim()
      : (req.headers.get('x-real-ip') ?? '127.0.0.1');

    if (!clientIp || clientIp === "::1") {
        clientIp = "127.0.0.1"
    }

    logger.info({message: "IP: " + clientIp})

    const response = await fetch(`http://ip-api.com/json/${clientIp}`);
    const data = await response.json();

    logger.info({message: JSON.stringify(data)})

    // TODO: Lagre data i en database
    logger.info('Besøk fra:', `${data.country_name}, ${data.city}`);
    
    return NextResponse.json({ success: true, clientIp, location: `${data.country}, ${data.city}` })

}