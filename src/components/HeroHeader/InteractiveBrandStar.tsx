import { useEffect, useRef, useState } from "react";

const MAX_ROTATION = 24;
const ROTATION_SPEED = 0.24;
const HOVER_ROTATION = 5;
const REST_ROTATION = { x: -4, y: 8 };

const clamp = (value: number) =>
  Math.min(MAX_ROTATION, Math.max(-MAX_ROTATION, value));

export default function InteractiveBrandStar() {
  const [showHint, setShowHint] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const hasShownHintRef = useRef(false);
  const dragRef = useRef({
    pointerId: -1,
    startX: 0,
    startY: 0,
    rotateX: 0,
    rotateY: 0,
    dragging: false,
  });
  const rotationRef = useRef(REST_ROTATION);
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

  const revealHint = () => {
    if (hasShownHintRef.current) return;
    hasShownHintRef.current = true;
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
    revealHint();

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
    if (!drag.dragging) {
      if (event.pointerType !== "mouse") return;

      const bounds = event.currentTarget.getBoundingClientRect();
      const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
      const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;
      renderRotation(
        clamp(-relativeY * HOVER_ROTATION * 2),
        clamp(relativeX * HOVER_ROTATION * 2),
      );
      return;
    }

    if (drag.pointerId !== event.pointerId) return;

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

  const handlePointerLeave = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (dragRef.current.dragging || event.pointerType !== "mouse") return;
    renderRotation(REST_ROTATION.x, REST_ROTATION.y);
  };

  return (
    <button
      ref={buttonRef}
      className="interactive-brand-star is-active"
      type="button"
      aria-label="Girar a estrela 3D da Lucendy Style"
      onClick={revealHint}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
      onPointerLeave={handlePointerLeave}
    >
      <span className="interactive-brand-star__object" aria-hidden="true">
        <span className="interactive-brand-star__depth" />
        <span className="interactive-brand-star__glass">
          <span className="interactive-brand-star__reflection" />
        </span>
        <span className="interactive-brand-star__rim" />
      </span>
      {showHint && (
        <span className="interactive-brand-star__hint" role="status">
          arraste para girar
        </span>
      )}
    </button>
  );
}
