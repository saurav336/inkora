"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const posRef = useRef({ x: 0, y: 0 });
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const cursor = cursorRef.current;

        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        const handleMouseDown = () => cursor.classList.add("is-clicking");
        const handleMouseUp = () => cursor.classList.remove("is-clicking");

        const handleMouseEnterLink = () => cursor.classList.add("is-hovering");
        const handleMouseLeaveLink = () => cursor.classList.remove("is-hovering");

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        const interactiveEls = document.querySelectorAll(
            "a, button, [data-cursor-hover]"
        );
        interactiveEls.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnterLink);
            el.addEventListener("mouseleave", handleMouseLeaveLink);
        });

        let rafId;
        const speed = 0.2;

        const animate = () => {
            posRef.current.x += (mouseRef.current.x - posRef.current.x) * speed;
            posRef.current.y += (mouseRef.current.y - posRef.current.y) * speed;

            if (cursor) {
                cursor.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
            }

            rafId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            interactiveEls.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnterLink);
                el.removeEventListener("mouseleave", handleMouseLeaveLink);
            });
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div ref={cursorRef} className="custom-cursor">
            <span className="cursor-dot" />
        </div>
    );
}