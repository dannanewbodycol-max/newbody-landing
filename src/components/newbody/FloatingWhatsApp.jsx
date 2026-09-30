import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppCityModal from "./WhatsAppCityModal";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {expanded && (
        <div className="mb-1 max-w-[220px] rounded-2xl nb-card-glass p-3 pr-9 relative">
          <button
            onClick={() => setExpanded(false)}
            aria-label="Cerrar"
            className="absolute top-2 right-2 text-white/50 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="text-white text-sm font-montserrat font-semibold leading-snug">
            ¿Tienes preguntas? Escríbenos
          </p>
        </div>
      )}
      <button
        onClick={() => { setModalOpen(true); setExpanded(true); }}
        aria-label="Escríbenos por WhatsApp"
        onMouseEnter={() => setExpanded(true)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white hover:scale-105 transition"
        style={{ boxShadow: "0 0 24px rgba(37,211,102,0.5)" }}
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" aria-hidden />
        <WhatsAppIcon className="relative h-7 w-7" />
      </button>

      <WhatsAppCityModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}