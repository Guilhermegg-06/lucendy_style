import { useEffect, useState } from "react";

import { business } from "../../data/business";
const storageKey = "lucendy-review-prompt-hidden";

export default function ReviewPrompt() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(storageKey)) return;
    const timer = window.setTimeout(() => setVisible(true), 2500);
    return () => window.clearTimeout(timer);
  }, []);

  const hidePermanently = () => {
    localStorage.setItem(storageKey, "true");
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <aside className="review-prompt" aria-labelledby="review-title">
      <button className="review-prompt__close" onClick={hidePermanently} aria-label="Não mostrar novamente">×</button>
      <span className="review-prompt__stars" aria-hidden="true">★★★★★</span>
      <strong id="review-title">Gostou da experiência?</strong>
      <p>Sua avaliação ajuda a Lucendy Style a crescer.</p>
      <a href={business.reviewUrl} target="_blank" rel="noopener noreferrer" onClick={hidePermanently}>Avaliar no Google</a>
      <button className="review-prompt__done" onClick={hidePermanently}>Já avaliei</button>
    </aside>
  );
}
