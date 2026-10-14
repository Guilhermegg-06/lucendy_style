import type { CSSProperties } from "react";

type StarStyle = CSSProperties & {
  "--star-x": string;
  "--star-y": string;
  "--star-size": string;
  "--star-opacity": string;
  "--star-delay": string;
  "--star-duration": string;
};

const stars = Array.from({ length: 58 }, (_, index) => ({
  x: 2 + ((index * 47 + 13) % 96),
  y: 3 + ((index * 61 + 7) % 86),
  size: 0.7 + ((index * 17) % 10) / 10,
  opacity: 0.2 + ((index * 23) % 36) / 100,
  delay: -((index * 37) % 70) / 10,
  duration: 4.8 + ((index * 29) % 34) / 10,
}));

export default function StarField() {
  return (
    <div className="hero-stars" aria-hidden="true">
      {stars.map((star, index) => {
        const style: StarStyle = {
          "--star-x": `${star.x}%`,
          "--star-y": `${star.y}%`,
          "--star-size": `${star.size}px`,
          "--star-opacity": `${star.opacity}`,
          "--star-delay": `${star.delay}s`,
          "--star-duration": `${star.duration}s`,
        };

        return <span className="hero-stars__point" key={index} style={style} />;
      })}
    </div>
  );
}
