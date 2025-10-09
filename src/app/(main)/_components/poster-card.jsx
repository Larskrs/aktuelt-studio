import Image from "next/image";
import cn from "../../../lib/className";
import Link from "next/link";
import { Info } from "lucide-react";

export default function PosterCard({
  href = "/",
  className = "",
  title,
  src,
  isNew = false,
}) {
  return (
    <Link
      href={href}
      className={cn(
        className,
        // Smaller size for < md, larger for md+
        "min-w-80 max-w-40 sm:min-w-80 sm:max-w-60 md:min-w-140 md:max-w-75",
        "h-auto aspect-video relative group rounded-xl overflow-hidden transition-all border-1 border-white/5 hover:border-white/50"
      )}
    >
      <p className="z-2 absolute bottom-3 left-4 right-4 text-base sm:text-lg md:text-xl font-regular text-white">
        {title}
      </p>
      {isNew && (
        <Info className="z-2 absolute top-3 right-3 transition-all opacity-50 group-hover:opacity-75" />
      )}
      <div className="scale-105 w-full h-full absolute bg-gradient-to-b from-black/10 via-black/25 to-black/80 z-0 rounded-xl" />
      <Image
        quality={100}
        alt={`article-poster, ${title}`}
        className="cursor-pointer h-full object-cover bg-white rounded-xl"
        width={1080}
        height={720}
        src={src}
      />
    </Link>
  );
}
