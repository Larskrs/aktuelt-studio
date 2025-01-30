import Image from "next/image";

export default function LocalImage({ src, ...props }) {
    if (src?.startsWith(process.env.NEXT_PUBLIC_URL)) {
        src = src.replace("https://aktuelt.tv", "");
    }

    return <Image src={src} {...props} />;
}