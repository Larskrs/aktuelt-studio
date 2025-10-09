"use client"

import Image from "next/image";
import PosterCard from "./_components/poster-card";
import ScrollRow from "./_components/scroll-row";
import { ToolCase } from "lucide-react";
import Link from "next/link";
import VideoPlayer from "./_components/VideoPlayer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
    
      {/* Video Preview */}
      <div className="z-0 w-full h-250 max-h-[75vh] relative">
        {/* Video background */}
        <VideoPlayer
          className="z-0 inset-0 w-full h-full object-cover absolute"
          loop
          autoPlay
          muted
          playsInline
          src={
            "https://bamblingen.no/api/v1/files/video?v=20250207-473868e90d9a768d"
          }
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full z-20">
          <Image
            className="absolute max-w-[80vw]"
            alt="aktuelt studio"
            src="/branding/logo/aktueltstudio.png"
            width={800}
            height={25}
          />
        </div>
  
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/75 via-black/25 to-black pointer-events-none"></div>
      </div>

      <main className="container mx-auto w-full z-100 -mt-50 flex flex-col items-center justify-center gap-2">

          <div className="w-full mt-16">
            <h2 className=" px-4 text-4xl mb-8">Nyheter</h2>
            <ScrollRow className="px-2 hide-scrollbar">
              <PosterCard src={"https://bamblingen.no/api/v1/files?fileId=20250225-7b0f1d2d0a433187"} className="col-span-2" href="/projects/dbl/" title={"Se Filmen"} isNew={true} />
              <PosterCard src={"https://bamblingen.no/api/v1/files?fileId=20250117-f41717fa62b11d57ab0734613e7bc686e71514b0a227d79e"} className="flex md:hidden lg:flex" href="/projects/dbl/" title={"Veien til Desperados, Banditos & Litagos"}  />
              <PosterCard src={"https://bamblingen.no/api/v1/files?fileId=20250422-79897fe77d2deb16"} href="/projects/dbl/" title={"Amandusfestivalen 2025"} />
              <PosterCard src={"https://bamblingen.no/api/v1/files?fileId=20250422-79897fe77d2deb16"} href="/projects/dbl/" title={"Amandusfestivalen 2025"} />
            </ScrollRow>
          </div>
          
          <div className="w-full h-125 mt-16 aspect-[2/3] relative overflow-hidden rounded-4xl"> 
            <div className="absolute inset-0 z-100 flex flex-col items-center justify-center h-full">
              <h2 className="text-4xl">Skap din egen historie</h2>
              <Link href={"https://cino.no/project"} className="mt-4 hover:scale-105 transition-scale duration-150 bg-white text-black font-semibold rounded-xl cursor-pointer px-6 py-2 flex flex-row gap-2 items-center">Åpne verktøykassen <ToolCase/></Link>
            </div>
            <Image className="z-0 blur-2xl scale-125 opacity-25 rounded-2xl object-cover object-top" fill src={"/dbl/DBL_PLAKAT_16.9.jpg"} />
          </div>

      </main>

    </div>
  );
}
