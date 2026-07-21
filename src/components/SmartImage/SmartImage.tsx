import { useState } from "react";
export default function SmartImage({ src, alt, label, className = "" }: { src: string; alt: string; label: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`image-fallback ${className}`} role="img" aria-label={`${alt} — imagem aguardando atualização`}><span>{label}</span></div>;
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
