"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import cn from "../../../lib/className";
import { ChevronDown, Film, Grip, Info, InfoIcon, Mail, Play, SquareLibrary, ToolCase } from "lucide-react";
import ScrollRow from "./scroll-row";
// Sample JSON for links
const linksJson = [
  { href: "/projects/dbl", label: "Desperados, Banditos & Litagos" },
  { href: "/spill", label: "Spill" },
  // { href: "/members", label: "Medlemmer" },
  // { href: "/about", label: "Om Oss" },
  // { href: "/contact", label: "Kontakt" },
  // { href: "/blog", label: "Blogg" },
  // { href: "/faq", label: "FAQ" },
];
const projects = [
  { slug: "dbl", label: "Desperados, Banditos & Litagos"},
  // { slug: "ap", label: "Aktuelt Podcast"},
]

export default function Navigation() {
  const containerRef = useRef(null);
  const linksRefs = useRef([]);
  const ref = useRef(null)
  const [expanded, setExpanded] = useState(false);

  // This holds how many links fit on the top bar
  const [visibleCount, setVisibleCount] = useState(linksJson.length);
  const visibleLinks = linksJson.slice(0, visibleCount);
  const overflowLinks = linksJson.slice(visibleCount);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

const updateContentHeight = () => {
  if (expanded && contentRef.current) {
    setContentHeight(contentRef.current.scrollHeight);
  }
};
function calculateVisibleLinks() {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const buttonWidth = 48; // approx width for the toggle button (Grip icon)
      let usedWidth = 0;

      // We measure widths of links dynamically
      let count = 0;
      for (let i = 0; i < linksJson.length; i++) {
        const linkEl = linksRefs.current[i];
        if (!linkEl) continue;

        const linkWidth = linkEl.offsetWidth + 64; // adding margin/padding approx
        if (usedWidth + linkWidth + buttonWidth > containerWidth) break;

        usedWidth += linkWidth;
        count++;
      }

      setVisibleCount(count);
    }

useEffect(() => {
  updateContentHeight();
  calculateVisibleLinks()
}, [expanded]);

useEffect(() => {
  if (!contentRef.current) return;

  const resizeObserver = new ResizeObserver(() => {
    updateContentHeight();
    calculateVisibleLinks()
  });

  resizeObserver.observe(contentRef.current);

  return () => {
    resizeObserver.disconnect();
  };
}, [expanded]); 

    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setExpanded(false);
        }
      }
    
      if (expanded) {
        document.addEventListener("mousedown", handleClickOutside);
      }
    
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [expanded]);

  return (
    <motion.div
      className="scale-100 md:scale-100 fixed z-[10000] inset-x-0 top-2 px-2 container mx-auto" // outer padding + vertical spacing
      initial={{ translateY: -200, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      ref={ref}
      transition={{
        duration: 0.5,
        delay: 0.5,
        ease: [0, 0.71, 0.1, 1.2],
      }}
    >
      <div className="container mx-auto bg-white/5 border-1 border-white/10 backdrop-blur-2xl rounded-2xl overflow-hidden">
        {/* Top row */}
        <div ref={containerRef} className="h-18 p-4 w-full flex flex-row gap-2 items-center">
          <Link href={"/"} className="w-auto h-full aspect-square relative">
            <Image
              src={"/branding/logo/logo.svg"}
              alt="aktuelt logo"
              className="absolute inset-0"
              quality={100}
              fill
            />
          </Link>
  
          {/* Links */}
          <nav className="ml-4 flex gap-6 flex-1 overflow-hidden">
            {visibleLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                ref={(el) => (linksRefs.current[i] = el)}
                className="whitespace-nowrap text-lg hover:underline cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Spacer */}
          <div className="ml-auto" />
          <motion.button
            onClick={() => setExpanded((prev) => !prev)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 cursor-pointer hover:bg-white/15 text-white p-3 rounded-xl"
          >
            <Grip strokeWidth={1.25} fill="white" />
          </motion.button>
        </div>
  
        {/* Expanded section */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="expanded-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: contentHeight,
                opacity: 1,
                transition: { duration: .8, ease: [0, 0.71, 0.1, 1.2], },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: { duration: 0.8, ease: [0, 0.71, 0.1, 1.2], },
              }}
              style={{ overflow: "hidden" }}
              onAnimationComplete={() => {
                // After expanding, let height be auto so it can adapt to content changes
                if (expanded) {
                  if (contentRef.current) {
                    contentRef.current.style.height = "auto";
                  }
                }
              }}
            >
              <div ref={contentRef}>
                <div className="px-4 pb-2 border-t-white/12.5 border-t-1 pt-3">
                  <div className="grid gap-4 grid-cols-5 lg:grid-cols-5 items-start justify-center">
                    <ArticleLink src={"https://bamblingen.no/api/v1/files?fileId=20250225-39007e2bc6491adb"} className="w-full col-span-5 sm:col-span-3" href="/projects/dbl/" title={"Se Filmen"} isNew={true} />
                    <ArticleLink src={"https://bamblingen.no/api/v1/files?fileId=20250422-79897fe77d2deb16"} className="col-span-2 hidden sm:flex" href="/projects/dbl/" title={"Amandusfestivalen 2025"} />
                    <div className="col-span-5 h-fit flex flex-row flex-wrap items-start justify-start gap-2 w-full pr-8">
                        {overflowLinks.map((link, i) => (
                            <PageLink key={i} className="text-md px-2 xl:text-lg font-extralight"
                            href={link.href}>{link.label}</PageLink>
                        ))}
                        {projects.map((p, i) => (
                            <PageLink key={i} className="text-md flex flex-row flex-nowrap items-center gap-2 px-2 xl:text-lg font-extralight"
                            href={`/projects/${p.slug}`}><Play size={16} /><span>{p.label}</span></PageLink>
                        ))}
                    </div>
                  </div>
                </div>
                <div ref={contentRef} className="px-4 pb-4 border-t-white/12.5 border-t-1 pt-3">
                  <div className="flex flex-row gap-2 items-center text-white">
                    <InfoIcon className="ml-4" />
                    <div className="ml-2 flex flex-col">
                      <span className="text-sm">Kontakt informasjon</span>
                      <span className="text-xs opacity-70">
                        post@aktuelt.tv (daniel) +47 46120727
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function PageLink({ href, children, className }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={"cursor-pointer"}
    >
      <Link href={href} className={cn(className)}>{children}</Link>
    </motion.div>
  );
}

function ArticleLink({ href="/", className="", title, src, isNew=false }) {
    return (
      <Link href={href} className={cn(className, "relative group rounded-xl overflow-hidden transition-all border-1 border-white/5 hover:border-white/50")}>
        <p className="z-2 absolute bottom-3 left-4 right-4 font-regular text-white">{title}</p>
        {isNew && <Info className="z-2 absolute top-3 right-3 transition-all opacity-50 group-hover:opacity-75" />}
        <div className="scale-105 w-full h-full absolute bg-gradient-to-b from-black/10 via-black/0 to-black/80 z-0 rounded-xl" />
        <Image quality={100} alt={`article-poster, ${title}`} className="cursor-pointer w-full h-32 lg:h-45 xl:h-60 object-cover bg-white rounded-xl" width={1080} height={720} src={src} />
      </Link>
    )
}

function Button ({children, ...props}) {
    return (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-fit  h-fit bg-white/5 cursor-pointer hover:bg-white/10 text-white p-3 rounded-xl"
        >
          {children}
        </motion.button>
    )
}