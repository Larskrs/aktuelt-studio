import Image from "next/image";

export default function LocalImage({ src, ...props }) {
    if (src?.startsWith("https://bamblingen.no")) {
        src = src.replace("https://bamblingen.no", "http://localhost:3000");
    }
    if (src?.startsWith("https://aktuelt.tv")) {
        src = src.replace("https://aktuelt.tv", "");
    }

    return <Image src={src} {...props} />;
}