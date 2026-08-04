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
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.67.149-.198.297-.767.966-.94 1.163-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.607.134-.133.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.52-.074-.149-.67-1.612-.917-2.206-.242-.579-.487-.5-.67-.51-.173-.009-.372-.009-.57-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.88 1.212 3.078.149.198 2.095 3.2 5.075 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2.001C6.486 2.001 2 6.484 2 12c0 2.118.61 4.083 1.662 5.75L2 22l4.39-1.156C8.023 21.438 9.975 22 12 22c5.515 0 10-4.484 10-10 0-5.516-4.485-9.999-9.996-9.999z" />
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
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600"
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
