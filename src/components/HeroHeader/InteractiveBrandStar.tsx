import { useEffect, useRef, useState } from "react";

const MAX_ROTATION = 24;
const ROTATION_SPEED = 0.24;

const clamp = (value: number) =>
  Math.min(MAX_ROTATION, Math.max(-MAX_ROTATION, value));

export default function InteractiveBrandStar() {
  const [isActive, setIsActive] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dragRef = useRef({
    pointerId: -1,
    startX: 0,
    startY: 0,
    rotateX: 0,
    rotateY: 0,
    dragging: false,
  });
  const rotationRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!showHint) return;

    const timeout = window.setTimeout(() => setShowHint(false), 2400);
    return () => window.clearTimeout(timeout);
  }, [showHint]);

  useEffect(
    () => () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    },
    [],
  );

  const activate = () => {
    if (isActive) return;
    setIsActive(true);
    setShowHint(true);
  };

  const renderRotation = (x: number, y: number) => {
    rotationRef.current = { x, y };
    if (frameRef.current !== null) return;

    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      buttonRef.current?.style.setProperty("--brand-rotate-x", `${x}deg`);
      buttonRef.current?.style.setProperty("--brand-rotate-y", `${y}deg`);
    });
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (!isActive) {
      activate();
      return;
    }

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      rotateX: rotationRef.current.x,
      rotateY: rotationRef.current.y,
      dragging: true,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    const drag = dragRef.current;
    if (!drag.dragging || drag.pointerId !== event.pointerId) return;

    const nextX = clamp(drag.rotateX - (event.clientY - drag.startY) * ROTATION_SPEED);
    const nextY = clamp(drag.rotateY + (event.clientX - drag.startX) * ROTATION_SPEED);
    renderRotation(nextX, nextY);
  };

  const finishDrag = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (dragRef.current.pointerId !== event.pointerId) return;
    dragRef.current.dragging = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`interactive-brand-star${isActive ? " is-active" : ""}`}
      type="button"
      aria-label={isActive ? "Girar a estrela da Lucendy Style" : "Transformar a estrela da Lucendy Style em vidro"}
      aria-pressed={isActive}
      onClick={activate}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
    >
      <span className="interactive-brand-star__glass" aria-hidden="true" />
      {showHint && (
        <span className="interactive-brand-star__hint" role="status">
          arraste para girar
        </span>
      )}
    </button>
  );
}
