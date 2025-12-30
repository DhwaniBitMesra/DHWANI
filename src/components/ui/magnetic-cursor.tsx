
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const MagneticCursor = () => {
    const [isHoveringLink, setIsHoveringLink] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - (isHoveringLink ? 32 : 16) / 2);
            cursorY.set(e.clientY - (isHoveringLink ? 32 : 16) / 2);
        };

        const handleLinkHover = () => setIsHoveringLink(true);
        const handleLinkLeave = () => setIsHoveringLink(false);

        window.addEventListener("mousemove", moveCursor);

        // Attach listeners to clickable elements
        const clickables = document.querySelectorAll("a, button, input, [role='button']");
        clickables.forEach((el) => {
            el.addEventListener("mouseenter", handleLinkHover);
            el.addEventListener("mouseleave", handleLinkLeave);
        });

        // Observer for new elements (like modals)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(() => {
                const newClickables = document.querySelectorAll("a, button, input, [role='button']");
                newClickables.forEach((el) => {
                    el.addEventListener("mouseenter", handleLinkHover);
                    el.addEventListener("mouseleave", handleLinkLeave);
                });
            })
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            clickables.forEach((el) => {
                el.removeEventListener("mouseenter", handleLinkHover);
                el.removeEventListener("mouseleave", handleLinkLeave);
            });
            observer.disconnect();
        };
    }, [cursorX, cursorY, isHoveringLink]); // Re-run if hovering state changes to adjust offset if needed

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-white mix-blend-difference hidden md:block" // Hidden on mobile
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                width: isHoveringLink ? 32 : 16, // Scale up
                height: isHoveringLink ? 32 : 16,
                backgroundColor: isHoveringLink ? "rgba(255, 255, 255, 0.2)" : "transparent",
            }}
        />
    );
};
