import React, { useState } from "react";
import { ArrowRight, ShieldCheck, Lock } from "lucide-react";
import SectionBadge from "./SectionBadge";
import { NEWBODY } from "@/lib/newbodyAssets";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppCityModal from "./WhatsAppCityModal";

export default function FinalCta() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative bg-navy py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 nb-hex-bg opacity-60" aria-hidden />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-cyan/15 blur-[140px]" aria-hidden />

      <div className="relative mx-auto max-w-2xl px-5 text-center">
        <SectionBadge>Último Paso</SectionBadge>
        <h2 className="nb-section-title text-3xl sm:text-5xl text-white mt-6 mb-4">
          Tu solicitud ya está <span className="text-cyan">en nuestras manos.</span>
        </h2>
        <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Ahora queremos conocer tu caso y ayudarte a descubrir qué alternativas
          pueden adaptarse mejor a tus objetivos.
        </p>

        {/* botón verde WhatsApp — abre selector de sede */}
        <button
          onClick={() => setModalOpen(true)}
          className="group relative inline-flex items-center gap-4 rounded-2xl bg-[#25D366] px-7 py-5 text-left transition hover:brightness-110 w-full max-w-md mx-auto justify-center sm:justify-start"
          style={{ boxShadow: "0 0 30px rgba(37,211,102,0.45), 0 0 0 2px rgba(37,211,102,0.25)" }}
        >
          <WhatsAppIcon className="h-10 w-10 text-white shrink-0" />
          <span className="flex flex-col text-left">
            <span className="text-xs font-montserrat font-bold uppercase tracking-wider text-white/85">Paso Obligatorio</span>
            <span className="text-lg sm:text-xl font-montserrat font-extrabold text-white flex items-center gap-1">
              Escríbenos por WhatsApp <ArrowRight className="h-5 w-5" />
            </span>
            <span className="text-sm font-montserrat text-white/85">Haz clic aquí para continuar</span>
          </span>
        </button>

        <WhatsAppCityModal open={modalOpen} onClose={() => setModalOpen(false)} />

        <div className="mt-4 flex items-center justify-center gap-2 text-white/65 text-sm">
          <Lock className="h-4 w-4 text-cyan" />
          <span>Tu asesor te está esperando para ayudarte.</span>
        </div>

        <p className="mt-6 text-white/55 text-sm sm:text-base max-w-md mx-auto">
          Si prefieres esperar, no tienes que hacer nada. Uno de nuestros
          especialistas se pondrá en contacto contigo.
        </p>

        <div className="mt-8 flex items-center justify-center gap-2 text-cyan/80">
          <ShieldCheck className="h-5 w-5" />
          <span className="text-sm font-montserrat">{NEWBODY.compliance}</span>
        </div>
      </div>
    </section>
  );
}