"use client";

import { useEffect, useState } from "react";
import { Phone, Send, X } from "lucide-react";
import { usePathname } from "next/navigation";

const whatsappNumber = "+34613781218";
const whatsappBase = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;
const whatsappDefaultText = "Hola, quiero consultar mi caso de accidente.";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 175.216 175.552"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="white"
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
      />
      <path
        fill="#25D366"
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
      />
    </svg>
  );
}

export function FloatingActions() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState(whatsappDefaultText);

  useEffect(() => {
    setChatOpen(false);
    setMessage(whatsappDefaultText);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const timer = window.setTimeout(() => {
      setChatOpen(true);
    }, 20000);

    return () => window.clearTimeout(timer);
  }, [isHome]);

  const openWhatsApp = (text?: string) => {
    const encoded = encodeURIComponent(text || message || whatsappDefaultText);
    window.open(`${whatsappBase}?text=${encoded}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {chatOpen && (
        <div className="w-[320px] max-w-full rounded-3xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">Chat de ayuda</p>
              <p className="text-xs text-muted-foreground">
                Escribe y envía tu consulta por WhatsApp.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setChatOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
              aria-label="Cerrar chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 rounded-3xl bg-slate-50 p-3 text-sm text-slate-800">
            <p>Hola 👋 ¿En qué podemos ayudarte hoy?</p>
          </div>

          <div className="mt-4 space-y-3">
            <label className="sr-only" htmlFor="floating-chat-message">
              Mensaje para WhatsApp
            </label>
            <textarea
              id="floating-chat-message"
              rows={3}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full resize-none rounded-2xl border border-border bg-white px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="inline-flex items-center justify-center rounded-2xl bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              <Send className="mr-2 h-4 w-4" />
              Enviar a WhatsApp
            </button>
            <a
              href={`tel:${whatsappNumber}`}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              <Phone className="mr-2 h-4 w-4" />
              Llamar
            </a>
          </div>
        </div>
      )}

      <div className="flex flex-col items-end gap-3">
        <a
          href={`${whatsappBase}?text=${encodeURIComponent(whatsappDefaultText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:bg-[#1ebe58]"
          aria-label="Abrir WhatsApp"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </a>

        <a
          href={`tel:${whatsappNumber}`}
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition hover:bg-slate-800"
          aria-label="Llamar ahora"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
