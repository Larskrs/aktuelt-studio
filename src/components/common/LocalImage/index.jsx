import Image from "next/image";

export default function LocalImage({ src, ...props }) {
    if (process.env.NEXT_PUBLIC_URL?.startsWith("https://aktuelt.tv")) {
        if (src.startsWith("https://bamblingen.no")) {
            src = src.replace("https://bamblingen.no/", "http://localhost:3000")
        }
        src = src.replace("https://aktuelt.tv", "");
    }

    return <Image src={src} {...props} />;
}