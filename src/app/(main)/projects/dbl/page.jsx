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
import DeadwoodCity from "./deadwood";
import DeadwoodCityPage from "./deadwood";
import EndingPage from "./ending";

const senders = [
  {
    id: "lars",
    name: "Lars",
    profilePicture: "https://bamblingen.no/api/v1/files?fileId=20250117-e4896345caa93d06ab820dca48d6e9cda0bb52682f9acc9a",
    bubbleColor: "#fef3c7", // amber-100
    textColor: "#000",
  },
  {
    id: "olav",
    name: "Olav",
    profilePicture: "https://bamblingen.no/api/v1/files?fileId=20250129-c5ec7d4886b3189ffab2bfb4d32873cf1540b21ac64c8c8f",
    bubbleColor: "#333", // rose-600
    textColor: "#fff",
  },
  {
    id: "levin",
    name: "Levin",
    profilePicture: "https://bamblingen.no/api/v1/files?fileId=20250117-48880354b201acb7ca6edaa9c3cb3f0d935760b73d4b847e",
    bubbleColor: "rgb(120 20 20)", // rose-600
    textColor: "#fff",
  },
  {
    id: "daniel",
    name: "Daniel H.",
    profilePicture: "https://bamblingen.no/api/v1/files?fileId=20250129-317af434f664842f0527678a42555d3f3cf0a3f6bae98348",
    bubbleColor: "#fff", // rose-600
    textColor: "#000",
  },
  {
    id: "daniel",
    name: "Daniel",
    profilePicture: "https://bamblingen.no/api/v1/files?fileId=20250129-317af434f664842f0527678a42555d3f3cf0a3f6bae98348",
    bubbleColor: "#fff", // rose-600
    textColor: "#000",
  },
  {
    id: "lucas",
    name: "Lucas",
    profilePicture: "https://bamblingen.no/api/v1/files?fileId=20250812-6fb42ccdb003bbe3",
    bubbleColor: "#fff", // rose-600
    textColor: "#000",
  },
]

export default function Page () {
    return (
        <div className="bg-black min-h-screen flex flex-col">
        
          {/* Video Preview */}
          <div className="z-0 w-full h-screen min-h-200 sm:max-h-[75vh] max-h-[50vh] relative">
            {/* Video background */}
            <VideoPlayer
              className="z-0 inset-0 w-full h-full object-cover absolute"
              loop
              autoPlay={true}
              controls={false}
              progressBar={false}
              muted
              playsInline
              poster={"https://bamblingen.no/api/v1/files?fileId=20250225-bb8a7df5d0f122f3"}
              src={
                "https://bamblingen.no/api/v1/files/video?v=20250207-473868e90d9a768d"
              }
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center w-full z-20">
              <Image
                className="absolute max-w-[80vw]"
                alt="aktuelt studio"
                src="/dbl/DBL_LOGO_WHITE.png"
                width={700}
                height={25}
              />
            </div>
          
            {/* Gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/75 via-black/25 to-black pointer-events-none"></div>
          </div>
        
          <main className="pb-64 mx-auto w-full z-100 -mt-50 flex flex-col items-center justify-center gap-2">
            <div className="w-full mt-16 max-w-240 px-4">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
                <p className="text-xl flex-1 text-center md:text-start">
                  En ung mann forlater Norge på 1700-tallet for et bedre liv i USA, men reisen viser seg å være langt farligere enn han kunne ha forestilt seg.
                </p>
                <motion.a
                    href={"https://www.youtube.com/watch?v=AcXdlgIQ07k"}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer shrink-0 w-full max-w-60 md:w-fit text-2xl text-center px-12 py-3 bg-rose-700 rounded-lg"
                    >
                  Se Film
                </motion.a>
              </div>
            </div>

            <div className="container max-w-140 w-full flex flex-col gap-4 mt-32">
              <h2 className="mx-auto text-5xl font-bold tracking-widest">VÅR HISTORIE</h2>
            </div>
            <div className="z-100 max-w-200 px-4 mx-auto">

              <ExpandableChat
                users={[
                  {
                    id: "aktuelt",
                    name: "Aktuelt",
                    profilePicture: "/branding/logo/logo.svg",
                    bubbleColor: "#dc2626", // rose-600
                    textColor: "#fff",
                  },
                  {
                    id: "interviewer",
                    name: "",
                    profilePicture: "",
                    bubbleColor: "#fef3c7", // amber-100
                    textColor: "#000",
                  },
                ]}
                messages={[
                  { from: "interviewer", text: "Hvorfor lagde dere filmen?" },
                  { from: "aktuelt", text: "Fordi cowboyer er kule..." },
                  { from: "interviewer", text: "Det gir faktisk mening." },
                  { from: "aktuelt", text: "Ikke sant?!" }
                ]}
                />
            </div>

            <DeadwoodCityPage />

            <EndingPage />
            
            <div className="z-100 max-w-200 px-4 mx-aut o relative w-full min-h-90">
              <Spoiler>

              <ExpandableChat
                users={sortSenderRight(senders, "olav")}
                messages={[
                  { from: "daniel", text: "Hei Olav" },
                  { from: "daniel", text: "Du er skurken igjen..." },
                  { from: "olav", text: "hæ?" },
                ]}
                />
                </Spoiler>
            </div>
              
          </main>
              
        </div>
    );
}

function sortSenderRight(users, rightId) {
  return [
    ...users.filter(u => u.id === rightId),
    ...users.filter(u => u.id !== rightId)
  ];
}