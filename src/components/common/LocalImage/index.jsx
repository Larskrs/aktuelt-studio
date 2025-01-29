import Image from "next/image";

export default function LocalImage({ src, ...props }) {
    if (process.env.NEXT_PUBLIC_URL?.startsWith("https://aktuelt.tv")) {
        src = src.replace("https://aktuelt.tv", "");
    }

    return <Image src={src} {...props} />;
}