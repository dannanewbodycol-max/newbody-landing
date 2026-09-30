import React, { useEffect } from "react";
import { X } from "lucide-react";
import { NEWBODY, getWhatsAppLink } from "@/lib/newbodyAssets";
import { Image } from "@/components/ui/image";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppCityModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const select = (city) => {
    window.open(getWhatsAppLink(city), "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-5"
      role="dialog"
      aria-modal="true"
      aria-label="Selecciona tu sede"
    >
      <div
        className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        className="relative w-full max-w-md rounded-3xl border border-cyan/30 bg-navy p-7 text-center nb-cyan-glow animate-fade-up"
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 text-white/50 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* logo */}
        <div className="flex justify-center mb-5">
          <Image
            src={NEWBODY.logo}
            alt="NEWBODY — Club de Antienvejecimiento"
            className="h-12 w-auto object-contain drop-shadow-[0_0_14px_rgba(0,212,255,0.4)]"
            fittingType="fit"
          />
        </div>

        <h3 className="nb-section-title text-2xl sm:text-3xl text-white mb-2">
          Selecciona tu <span className="text-cyan">sede</span>
        </h3>
        <p className="text-white/70 text-sm sm:text-base mb-6">
          Te conectaremos con el WhatsApp de nuestro equipo en tu ciudad.
        </p>

        <div className="grid grid-cols-2 gap-3">
          {NEWBODY.cities.map((c) => (
            <button
              key={c}
              onClick={() => select(c)}
              className="group flex items-center justify-center gap-2 rounded-2xl bg-navy-deep border border-cyan/30 px-4 py-4 font-montserrat font-bold text-white text-sm transition hover:bg-cyan hover:text-navy hover:border-cyan nb-cyan-glow"
            >
              <WhatsAppIcon className="h-4 w-4 text-cyan group-hover:text-navy transition" />
              {c}
            </button>
          ))}
        </div>

        <p className="mt-5 text-white/45 text-xs">
          Selecciona una ciudad para continuar por WhatsApp.
        </p>
      </div>
    </div>
  );
}