import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import "./ScrollExpand.css";

interface ScrollExpandProps {
  mediaSrc: string;
  mediaAlt?: string;
  useWindowScroll?: boolean;
  startWidth?: number;
  startHeight?: number;
  startRadius?: number;
  endRadius?: number;
  mediaZoom?: number;
  scrollDistance?: number;
  holdDistance?: number;
  smoothing?: number;
  overlayScrim?: number;
}

type ScrollExpandStyle = CSSProperties & {
  "--scroll-expand-travel": string;
};

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

export default function ScrollExpand({
  mediaSrc,
  mediaAlt = "",
  useWindowScroll = true,
  startWidth = 72,
  startHeight = 62,
  startRadius = 28,
  endRadius = 0,
  mediaZoom = 1.12,
  scrollDistance = 0.8,
  holdDistance = 0.12,
  smoothing = 0.12,
  overlayScrim = 0.25,
}: ScrollExpandProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    const media = mediaRef.current;
    if (!section || !frame || !media || !useWindowScroll) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let targetProgress = 0;
    let renderedProgress = 0;
    let frameId: number | null = null;
    let viewportHeight = window.innerHeight;

    const applyProgress = (progress: number) => {
      const widthScale = (startWidth + (100 - startWidth) * progress) / 100;
      const heightScale = (startHeight + (100 - startHeight) * progress) / 100;
      const radius = startRadius + (endRadius - startRadius) * progress;
      const zoom = mediaZoom + (1 - mediaZoom) * progress;
      const scrim = overlayScrim * (1 - progress);
      const edge = 0.12 * (1 - progress);

      frame.style.setProperty("--expand-scale-x", widthScale.toFixed(4));
      frame.style.setProperty("--expand-scale-y", heightScale.toFixed(4));
      frame.style.setProperty("--expand-radius", `${radius.toFixed(2)}px`);
      frame.style.setProperty("--expand-scrim", scrim.toFixed(3));
      frame.style.setProperty("--expand-edge", edge.toFixed(3));
      media.style.setProperty("--expand-media-scale", zoom.toFixed(4));
    };

    const readProgress = () => {
      const rect = section.getBoundingClientRect();
      const distance = Math.max(viewportHeight * scrollDistance, 1);
      return clamp(-rect.top / distance);
    };

    const render = () => {
      frameId = null;
      targetProgress = reducedMotion.matches ? 1 : readProgress();
      renderedProgress += (targetProgress - renderedProgress) * clamp(smoothing, 0.04, 1);

      if (Math.abs(targetProgress - renderedProgress) < 0.001) {
        renderedProgress = targetProgress;
      }

      applyProgress(renderedProgress);

      if (renderedProgress !== targetProgress) {
        frameId = requestAnimationFrame(render);
      }
    };

    const scheduleRender = () => {
      if (frameId === null) frameId = requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(() => {
      viewportHeight = window.innerHeight;
      scheduleRender();
    });

    const handleMotionPreference = () => {
      renderedProgress = reducedMotion.matches ? 1 : readProgress();
      targetProgress = renderedProgress;
      applyProgress(renderedProgress);
    };

    resizeObserver.observe(section);
    window.addEventListener("scroll", scheduleRender, { passive: true });
    window.addEventListener("resize", scheduleRender, { passive: true });
    reducedMotion.addEventListener("change", handleMotionPreference);
    handleMotionPreference();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleRender);
      window.removeEventListener("resize", scheduleRender);
      reducedMotion.removeEventListener("change", handleMotionPreference);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, [
    endRadius,
    mediaZoom,
    overlayScrim,
    scrollDistance,
    smoothing,
    startHeight,
    startRadius,
    startWidth,
    useWindowScroll,
  ]);

  const style: ScrollExpandStyle = {
    "--scroll-expand-travel": `${(scrollDistance + holdDistance) * 100}svh`,
  };

  return (
    <section
      ref={sectionRef}
      className="scroll-expand"
      style={style}
      aria-hidden="true"
    >
      <div className="scroll-expand__sticky">
        <div ref={frameRef} className="scroll-expand__frame">
          <img
            ref={mediaRef}
            className="scroll-expand__media"
            src={mediaSrc}
            alt={mediaAlt}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
