import Image from "next/image";

export default function LocalImage({ src, ...props }) {
    return <Image src={src} {...props} />;
}