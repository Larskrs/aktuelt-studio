// ExpandableChat.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import cn from "../../../lib/className";

export default function ExpandableChat({ users = [], messages = [] }) {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [typingUserId, setTypingUserId] = useState(null);
  const timeoutsRef = useRef([]);
  const [hasEntered, setHasEntered] = useState(false);

  const meId = users.find((u) => u.isMe)?.id ?? users[0]?.id;
  const fallbackUser = {
    id: "unknown",
    name: "Unknown",
    profilePicture: "/default-avatar.png",
    bubbleColor: "#e5e7eb",
    textColor: "#000",
  };

  // Schedule animation logic unchanged...
  useEffect(() => {
    if (!hasEntered) return;

    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
    setVisibleMessages([]);
    setTypingUserId(null);

    if (!messages || messages.length === 0) return;

    let cumulative = 0;
    const schedule = messages.map((msg) => {
      const typingTime = 800 + Math.floor(Math.random() * 1200);
      const pause = 600 + Math.floor(Math.random() * 1400);
      const start = cumulative;
      cumulative += typingTime + pause;
      return { msg, start, typingTime };
    });

    schedule.forEach(({ msg, start, typingTime }) => {
      if (!msg) return;
      const t1 = setTimeout(() => setTypingUserId(msg.from ?? null), start);
      const t2 = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, msg]);
        setTypingUserId(null);
      }, start + typingTime);
      timeoutsRef.current.push(t1, t2);
    });

    return () => {
      timeoutsRef.current.forEach((t) => clearTimeout(t));
      timeoutsRef.current = [];
    };
  }, [messages, users, hasEntered]);

  return (
    <div
      className="container mx-auto px-4 max-w-140 w-full relative"
      style={{ minHeight: "auto" }}
    >
      {/* Full chat always rendered, but hidden visually to preserve layout */}
      <div
        aria-hidden="true"
        style={{
          opacity: 0,
          pointerEvents: "none",
          userSelect: "none",
          position: "relative", // still takes up space
        }}
        className="flex flex-col gap-8"
      >
        {messages.map((msg, i) => {
          if (!msg) return null;
          const sender = users.find((u) => u.id === msg.from) ?? fallbackUser;
          const isRight = msg.from === meId;
          return <React.Fragment key={`full-${i}`}>{renderBubble(sender, msg.text, isRight)}</React.Fragment>;
        })}
      </div>

      {/* Animated chat absolutely positioned on top */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        onViewportEnter={() => setHasEntered(true)}
        className="absolute top-0 left-0 w-full flex flex-col gap-8"
        style={{ pointerEvents: "auto" }}
      >
        {visibleMessages.map((msg, i) => {
          if (!msg) return null;
          const sender = users.find((u) => u.id === msg.from) ?? fallbackUser;
          const isRight = msg.from === meId;
          return <React.Fragment key={`visible-${i}`}>{renderBubble(sender, msg.text, isRight)}</React.Fragment>;
        })}

        {typingUserId &&
          (() => {
            const sender = users.find((u) => u.id === typingUserId) ?? fallbackUser;
            const isRight = typingUserId === meId;
            return renderBubble(sender, "", isRight, true);
          })()}
      </motion.div>
    </div>
  );
};



const renderBubble = (sender, text, isRight, isTyping = false) => {
  const bubbleStyle = {
    backgroundColor: sender.bubbleColor,
    color: sender.textColor ?? (isRight ? "#000" : "#fff"),
    borderBottomLeftRadius: isRight ? "1rem" : "0.25rem",
    borderBottomRightRadius: isRight ? "0.25rem" : "1rem",
  };
  const messageVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 26 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={messageVariants}
      className={`flex flex-col ${isRight ? "items-end" : "items-start"} gap-1`}
    >
      {/* Sender name */}

      <div className={`flex items-end gap-3 ${isRight ? "justify-end" : "justify-start"}`}>
        {!isRight && sender?.profilePicture && (
          <Image
            src={sender.profilePicture}
            alt={sender.name}
            width={64}
            height={64}
            className="rounded-full aspect-square object-cover"
          />
        )}

        <div
          className="text-2xl relative px-4 py-2 rounded-xl max-w-[70%] flex items-center gap-2"
          style={bubbleStyle}
        >
          <span className={cn(isRight ? "right-0 text-end" : "left-0", "w-full absolute -top-6 text-sm text-gray-300")}>{sender.name}</span>
          {isTyping ? (
            [0, 1, 2].map((n) => (
              <motion.span
                key={n}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 9999,
                  backgroundColor: sender.textColor ?? "#111",
                  display: "inline-block",
                }}
                animate={{ y: [0, -6, 0], opacity: [0.45, 1, 0.45] }}
                transition={{ repeat: Infinity, duration: 0.9, delay: n * 0.15 }}
              />
            ))
          ) : (
            text
          )}
        </div>

        {isRight && sender?.profilePicture && (
          <Image
            src={sender.profilePicture} 
            alt={sender.name}
            width={64}
            height={64}
            className="rounded-full aspect-square object-cover"
          />
        )}
      </div>
    </motion.div>
  );
};