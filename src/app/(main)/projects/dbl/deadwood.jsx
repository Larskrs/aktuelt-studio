"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import VideoPlayer from "../../_components/VideoPlayer";
import Spoiler from "../../_components/spoiler";
import ExpandableChat from "../../_components/chat";
import SimpleVideoPlayer from "../../_components/VideoPlayer/simple";
import Split from "../../_components/split";
import FadeInOnScroll from "../../_components/fade-in-on-scroll";
import { ArrowDown } from "lucide-react";
import React from "react";

// ✅ Removed duplicate import of DeadwoodCity

// Helper to move a specific sender to the last index (right side in chat)
function sortSenderRight(senders, id) {
  const index = senders.findIndex((s) => s.id === id);
  if (index === -1) return senders;
  const sender = senders[index];
  return [sender, ...senders.filter((_, i) => i !== index)];
}

const senders = [
  {
    id: "lars",
    name: "Lars",
    profilePicture:
      "https://bamblingen.no/api/v1/files?fileId=20250117-e4896345caa93d06ab820dca48d6e9cda0bb52682f9acc9a",
    bubbleColor: "#fef3c7",
    textColor: "#000",
  },
  {
    id: "olav",
    name: "Olav",
    profilePicture:
      "https://bamblingen.no/api/v1/files?fileId=20250129-c5ec7d4886b3189ffab2bfb4d32873cf1540b21ac64c8c8f",
    bubbleColor: "#333",
    textColor: "#fff",
  },
  {
    id: "levin",
    name: "Levin",
    profilePicture:
      "https://bamblingen.no/api/v1/files?fileId=20250117-48880354b201acb7ca6edaa9c3cb3f0d935760b73d4b847e",
    bubbleColor: "rgb(120 20 20)",
    textColor: "#fff",
  },
  {
    id: "daniel",
    name: "Daniel H.",
    profilePicture:
      "https://bamblingen.no/api/v1/files?fileId=20250129-317af434f664842f0527678a42555d3f3cf0a3f6bae98348",
    bubbleColor: "#fff",
    textColor: "#000",
  },
  {
    id: "daniel2", // ✅ avoid duplicate ID
    name: "Daniel",
    profilePicture:
      "https://bamblingen.no/api/v1/files?fileId=20250129-317af434f664842f0527678a42555d3f3cf0a3f6bae98348",
    bubbleColor: "#fff",
    textColor: "#000",
  },
  {
    id: "lucas",
    name: "Lucas",
    profilePicture:
      "https://bamblingen.no/api/v1/files?fileId=20250812-6fb42ccdb003bbe3",
    bubbleColor: "#fff",
    textColor: "#000",
  },
];

export default function DeadwoodCityPage() {
  return (
    <React.Fragment>
                    <div className="w-full py-16 pt-32 items-center overflow-hidden justify-center flex flex-col gap-4 mt-32 relative">
                      <Image className="blur-md object-cover opacity-25" fill src={"https://bamblingen.no/api/v1/files?fileId=20250812-938ce76d1756a3c0"} alt="backdrop westwood" />
                      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/100 via-black/25 to-black pointer-events-none"></div>
                      <h2 className="z-10 mx-auto mb-16 text-5xl font-bold tracking-widest">DEADWOOD CITY</h2>
                      <div className="z-10 px-4 container max-w-175 lg:max-w-250 mx-auto grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-4">
                        <FadeInOnScroll className="relative flex flex-col items-center h-auto aspect-[9/16] col-span-3 sm:col-span-2 lg:col-span-1 w-full">
                          <Spoiler>
                            <VideoPlayer 
                              showPlayButton={true}
                              muted={false}
                              playsInline
                              autoPlay={false}
                              controls={false}
                              captions={[
                                { start: 0, end: 5, text: "Her skal han forberedes for etter-skudd scenen" },
                                { start: 5, end: 10, text: "Vi prøvde å filme at han gulper opp falsk blod..." },
                                { start: 10, end: 15, text: "Men han spiste det alltid opp før vi rakk og filme" },
                                // { start: 12, end: 14, text: "Vi filmet dette i december" },
                              ]}
                              className="object-cover cursor-pointer absolute h-full w-full rounded-2xl overflow-hidden border-1 border-white/25"
                              alt="snø i bilen bilde" 
                              src={"https://bamblingen.no/api/v1/files/video?v=20250324-0f1d4d14dd4c1b51"}
                              poster={"https://bamblingen.no/api/v1/files/video/thumbnail?v=20250324-0f1d4d14dd4c1b51"}
                              />  
                          </Spoiler>
                        </FadeInOnScroll>
                        <FadeInOnScroll className="relative col-span-3 sm:col-span-3 lg:col-span-2 flex flex-col items-center h-full min-h-80 lg:min-h-0 w-full">
                          <Spoiler>
                            <VideoPlayer 
                              showPlayButton={true}
                              muted={false}
                              playsInline
                              autoPlay={false}
                              controls={false}
                              captions={[
                                { start: 2, end: 7, text: "Her ligger enden på blodsputeffekten" },
                                { start: 7, end: 14, text: "En trang liten slangebit som er kuttet på en måte for å spre blodet ut gjevnt." },
                                { start: 14, end: 20, text: "Andre enden av slangen går inn i en kompressor som vil skyte ut blodet vi fyller slangen med." },
                              ]}
                              className="absolute object-cover cursor-pointer aspect-[9/16] h-full w-full rounded-2xl overflow-hidden border-1 border-white/25"
                              alt="snø i bilen bilde" 
                              src={"https://bamblingen.no/api/v1/files/video?v=20250330-d17ade7157d736d6"}
                              poster={"https://bamblingen.no/api/v1/files/video/thumbnail?v=20250330-d17ade7157d736d6"}
                              />  
                          </Spoiler>
                        </FadeInOnScroll>
                      </div>
                      <div className="z-10 px-4 mt-32 max-w-175 lg:max-w-250 container mx-auto">
                        <FadeInOnScroll className="min-h-80 lg:min-h-0 relative flex flex-col items-center h-auto aspect-video w-full">
                          <Spoiler>
                            <VideoPlayer 
                              showPlayButton={true}
                              muted={false}
                              playsInline
                              autoPlay={false}
                              controls={false}
                              captions={[
                                { start: 0, end: 4, text: "Nå skal effekten utføres foran kamera, bak det klippet vi faktisk brukte." },
                                { start: 4, end: 6, text: "Blodspruten var så kraftig at vi ble helt satt ut" },
                                { start: 6, end: 11, text: "Lucas og Daniel gikk rett i klem etter synet." },
                                { start: 11, end: 20, text: "Olav, til høyre som skøyt levin ble så overaska at ikke viste hvor han skulle finne seg." },
                                // { start: 12, end: 14, text: "Vi filmet dette i december" },
                              ]}
                              className="object-cover cursor-pointer absolute h-full w-full rounded-2xl overflow-hidden border-1 border-white/25"
                              alt="snø i bilen bilde" 
                              src={"https://bamblingen.no/api/v1/files/video?v=20250324-a066fbe1d5421912"}
                              poster={"https://bamblingen.no/api/v1/files/video/thumbnail?v=20250324-a066fbe1d5421912"}
                              />  
                          </Spoiler>
                        </FadeInOnScroll>
                      </div>
                      
                      <FadeInOnScroll>
                        <Split
                          title="Reisen fra Deadwood"
                          description={`En helt cinematisk slutt! Fra det siste KUTT, falt det snø over det iskalde western settet.\nSkuespillere og kamera dekket i blod, utstyr fuktig og utmatta, batterier tomme og kveldsolen var borte.`}
                          >
                          <>
                            <Image
                              className="lg:max-w-140 object-cover aspect-square h-auto w-full"
                              width={500}
                              height={500}
                              alt="snø i bilen bilde"
                              src="https://bamblingen.no/api/v1/files?fileId=20250117-f41717fa62b11d57ab0734613e7bc686e71514b0a227d79e"
                              />
                            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/75 via-black/25 to-black pointer-events-none"></div>
                            <p className="absolute bottom-4 left-4 text-xl">Daniel etter siste scene</p>
                          </>
                        </Split>
                      </FadeInOnScroll>
        
                    </div>
        
                    {/* <FadeInOnScroll className="container flex flex-col items-center gap-4 mb-[75vh] mt-32 z-10 w-full mx-auto text-center">
                        <p className="text-2xl px-8">Vi hadde klart det! til tross for alle hindre</p>
                        <p>men nå var lykken brukt opp...</p>
                        <ArrowDown size={48} className="animate-bounce" ></ArrowDown>
                    </FadeInOnScroll>
                    <div className="w-full py-16 pt-32 items-center overflow-hidden justify-center flex flex-col gap-4 mt-32 relative">
                      <Image className="blur-md object-cover opacity-25" fill src={"https://bamblingen.no/api/v1/files?fileId=20250117-ce4ea3b99e5a0338302fa686c66761b316a4561bc1e05988"} alt="backdrop westwood" />
                      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/100 via-black/25 to-black pointer-events-none"></div>
        
                      <div className="z-100 max-w-200 px-4 mx-auto">
                        <FadeInOnScroll>
                          <ExpandableChat
                            users={sortSenderRight(senders, "lucas")}
                            messages={[
                              { from: "daniel", text: "Sover Lucas?" },
                              { from: "lucas", text: "..." },
                              { from: "daniel", text: "Lucas...?" },
                              { from: "olav", text: "Lucas...?" },
                              { from: "levin", text: "Lucas...?" },
                            ]}
                          />
                        </FadeInOnScroll>
                      </div>
                      <div className="z-100 mt-120 max-w-140 px-4 mx-auto">
                        <div className="aspect-[9/16] mx-auto relative border-2 border-white/25 px-4 pt-32 rounded-4xl">
                        <h2 className="text-2xl top-8 left-8 right-8 text-center absolute">Meldinger</h2>
                          <ExpandableChat
                            users={sortSenderRight(senders, "lars")}
                            messages={[
                              { from: "levin", text: "Lars, JEG TRENGER STÅLTRÅ" },
                              { from: "lars", text: "Hvorfor?" },
                              { from: "levin", text: "Jeg har vraka bilen!" },
                              { from: "olav", text: "Lucas har sovna, men vi får ikke vekket han" },
                            ]}
                          />
                        </div>
                      </div>
                    </div> */}
                </React.Fragment>
    )
}