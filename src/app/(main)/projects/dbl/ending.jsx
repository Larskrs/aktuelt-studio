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

export default function EndingPage() {
  return (
      <React.Fragment>
        <div className="w-full py-16 pt-32 items-center overflow-hidden justify-center flex flex-col gap-4 mt-32 relative">
          <Image className="blur-md object-cover opacity-50" fill src={"https://bamblingen.no/api/v1/files?fileId=20250812-180a84c3a13b9e3d"} alt="backdrop westwood" />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/100 via-black/25 to-black pointer-events-none"></div>
          <h2 className="z-10 mx-auto mb-16 text-5xl font-bold tracking-widest">Siste Scene</h2>
          <FadeInOnScroll className="px-8 w-full max-w-175 lg:max-w-250">
              <div className="z-10 w-full relative rounded-2xl overflow-hidden border border-white/25">
                <Image
                  className="object-cover h-auto aspect-video w-full"
                  width={1080}
                  height={720}
                  quality={100}
                  alt="snø i bilen bilde"
                  src="https://bamblingen.no/api/v1/files?fileId=20250812-43bb03e09b23aac1"
                  />
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/75 via-black/25 to-black pointer-events-none"></div>
              </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <Split
              title=""
              description={``}
              >
              <>
                <Image
                  className="lg:max-w-140 object-cover aspect-square h-auto w-full"
                  width={500}
                  height={500}
                  alt="snø i bilen bilde"
                  src="https://bamblingen.no/api/v1/files?fileId=20250812-8dba955375a2fc39"
                  />
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/75 via-black/25 to-black pointer-events-none"></div>
              </>
            </Split>
          </FadeInOnScroll>

          <FadeInOnScroll className="px-8 w-full max-w-175 lg:max-w-250">
              <div className="z-10 w-full relative rounded-2xl overflow-hidden border border-white/25">
                <Image
                  className="object-cover h-auto aspect-video w-full"
                  width={500}
                  height={500}
                  alt="snø i bilen bilde"
                  src="https://bamblingen.no/api/v1/files?fileId=20250812-180a84c3a13b9e3d"
                  />
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/75 via-black/25 to-black pointer-events-none"></div>
              </div>
          </FadeInOnScroll>
          
        </div>
      </React.Fragment>
    )
}