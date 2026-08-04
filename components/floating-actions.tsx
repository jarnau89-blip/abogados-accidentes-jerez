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
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M380.9 97.1C339 55.1 284.2 32 224.8 32 100.3 32 0 132.3 0 256.8c0 45.2 11.8 89.2 34.2 127.4L0 480l99.3-32.7c36.9 20.3 78.1 31.1 121.5 31.1h.1c124.6 0 224.9-100.3 224.9-224.9 0-60.6-23.9-115.5-64.8-157.3z"
      />
      <path
        fill="white"
        d="M320.7 319.2c-5.6 15.7-31.5 30-46.2 31.7-12.4 1.5-27.6 2.1-49.6-4.9-73.7-24.2-121.4-86.4-125.1-90.1-3.7-3.7-30.1-39.1-30.1-74.4 0-35.3 18.8-52.6 25.4-59.9 6.6-7.3 14.5-9.1 19.6-9.1 5.1 0 10.2.1 14.7.1 4.5.1 10.4-.7 16-5.2 5.6-4.5 21.8-20.1 21.8-48.9 0-28.8-17.6-50.1-19.1-51.4-1.5-1.3-31.9-34.9-87.7-34.9-55.8 0-102.1 33.6-126.4 80.9-24.4 47.3-24.4 110.7-1.4 160.7 23 50 70 89.9 126.2 108.6 11.4 3.5 23.4 6 35.8 7.3 11.4 1.1 22.8 1.6 34.4 1.6 44.8 0 86.4-14.6 121.2-41.9 34.8-27.3 61.5-66.8 73.6-111.1 12.1-44.3 8.3-85.5-10.6-123.2-18.9-37.7-51.3-70.5-90.1-92.1-38.8-21.6-82.5-31.1-126.8-27.2-44.3 3.9-77.8 14.1-100.3 41.4-22.6 27.3-32 65.7-27.2 104.2 4.8 38.5 21.3 74.7 48 104.5 26.7 29.8 61.8 49.2 100.2 55.8 6.9 1.3 14.2 1.9 21.4 1.9 12.3 0 24.7-1.5 36.6-4.4 12-2.9 23.5-7.2 33.9-12.8 17.9-9.7 33.6-23.8 45.8-41.3 12.2-17.5 20.8-37.8 25.3-59.8 4.5-22.1 5.8-44.8 3.7-67.2-2.1-22.4-7.4-44.3-15.6-65.3z"
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
