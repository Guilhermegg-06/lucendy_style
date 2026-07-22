import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
import { business } from "../../data/business";
import { createWhatsAppUrl } from "../../utils/whatsapp";

interface BookingContextValue {
  openBooking: (message?: string) => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!message) return;
    document.body.classList.add("booking-open");
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setMessage(null);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("booking-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [message]);

  return (
    <BookingContext.Provider value={{ openBooking: (customMessage) => setMessage(customMessage ?? business.bookingMessage) }}>
      {children}
      {message && (
        <div className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title" onMouseDown={(event) => event.target === event.currentTarget && setMessage(null)}>
          <div className="booking-modal__panel">
            <button ref={closeRef} className="booking-modal__close" onClick={() => setMessage(null)} aria-label="Fechar opções de agendamento">×</button>
            <p className="eyebrow">ESCOLHA COMO AGENDAR</p>
            <h2 id="booking-title">Reserve seu horário</h2>
            <p>Use o AppBarber ou fale diretamente com a gente.</p>
            <div className="booking-modal__options">
              <a className="primary-button" href={business.bookingUrl} target="_blank" rel="noopener noreferrer">Agendar pelo AppBarber</a>
              <a className="ghost-button" href={createWhatsAppUrl(business.phoneNumber, message)} target="_blank" rel="noopener noreferrer">Agendar pelo WhatsApp</a>
            </div>
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}

export function BookingTrigger({ children, className = "", message, ariaLabel }: { children: ReactNode; className?: string; message?: string; ariaLabel?: string }) {
  const context = useContext(BookingContext);
  if (!context) throw new Error("BookingTrigger deve estar dentro de BookingProvider");
  return <button type="button" className={`booking-trigger ${className}`.trim()} onClick={() => context.openBooking(message)} aria-label={ariaLabel}>{children}</button>;
}
