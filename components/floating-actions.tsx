"use client";

import { useEffect, useState } from "react";
import { MessageSquare, Phone, Send, X } from "lucide-react";
import { usePathname } from "next/navigation";

const whatsappNumber = "+34613781218";
const whatsappBase = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;
const whatsappDefaultText = "Hola, quiero consultar mi caso de accidente.";

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
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600"
          aria-label="Abrir WhatsApp"
        >
          <MessageSquare className="h-6 w-6" />
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
