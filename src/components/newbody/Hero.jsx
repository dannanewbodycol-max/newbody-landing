import React, { useState } from "react";
import { AlertCircle, Lock, CheckCircle2, Calendar, Star, Users, ChevronDown, ArrowRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppCityModal from "./WhatsAppCityModal";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-navy pt-10 pb-16 sm:pt-12 sm:pb-24">
      {/* fondo tecnológico */}
      <div className="absolute inset-0 nb-grid-bg opacity-40" aria-hidden />
      <div className="absolute inset-0 nb-hex-bg" aria-hidden />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-cyan/20 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-2xl px-5 text-center">
        {/* badge acción pendiente */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 border border-orange-500/40 px-4 py-2 text-orange-400 font-montserrat font-semibold text-sm uppercase tracking-wide hidden">
            <AlertCircle className="h-4 w-4" />
            Acción Pendiente
          </span>
        </div>

        <h1 className="nb-section-title text-3xl sm:text-5xl text-white mb-4">
          ¡Ya casi! Estás a un <span className="text-cyan">mensaje</span> de distancia.
        </h1>
        <p className="font-montserrat text-lg sm:text-xl text-white/80 mb-8">
          Para agilizar tu proceso, escríbenos ahora por WhatsApp.
        </p>

        {/* botón verde WhatsApp — abre selector de sede */}
        <button
          onClick={() => setModalOpen(true)}
          className="group relative inline-flex items-center gap-4 rounded-2xl bg-[#25D366] px-7 py-5 text-left transition hover:brightness-110 w-full max-w-md mx-auto justify-center sm:justify-start"
          style={{ boxShadow: "0 0 30px rgba(37,211,102,0.45), 0 0 0 2px rgba(37,211,102,0.25)" }}>
          
          <WhatsAppIcon className="h-10 w-10 text-white shrink-0" />
          <span className="flex flex-col">
            <span className="text-xs font-montserrat font-bold uppercase tracking-wider text-white/85">Paso Obligatorio</span>
            <span className="text-lg sm:text-xl font-montserrat font-extrabold text-white flex items-center gap-1">
              Escríbenos por WhatsApp <ArrowRight className="h-5 w-5" />
            </span>
            <span className="text-sm font-montserrat text-white/85">Haz clic aquí para continuar</span>
          </span>
        </button>

        <WhatsAppCityModal open={modalOpen} onClose={() => setModalOpen(false)} />

        {/* aviso de seguridad */}
        <div className="mt-4 flex items-center justify-center gap-2 text-white/65 text-sm">
          <Lock className="h-4 w-4 text-cyan" />
          <span>Tu asesor te está esperando para ayudarte.</span>
        </div>

        {/* stepper de 4 pasos */}
        <div className="mt-9 rounded-2xl border border-cyan/20 bg-navy-deep p-5 sm:p-7">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2">
            <Step icon={CheckCircle2} done title="1. Enviado" sub="¡Listo!" />
            <Step icon={WhatsAppIcon} active title="2. Contacto por WhatsApp" sub="Pendiente" />
            <Step icon={Calendar} title="3. Agendamiento de cita" sub="Pendiente" />
            <Step icon={Star} title="4. Valoración" sub="Pendiente" />
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-xl bg-navy border border-cyan/15 p-4 text-left">
            <Calendar className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
            <p className="text-white/80 text-sm leading-relaxed">
              Escríbenos ya para agendar tu cita de valoración con uno de
              nuestros especialistas.
            </p>
          </div>
        </div>

        {/* footer cta scroll */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-white/75 text-sm sm:text-base max-w-md text-center">
            <Users className="h-5 w-5 text-cyan shrink-0" />
            <span>Mientras tanto, conoce algunas de las historias de personas que ya confiaron en NEWBODY.</span>
          </div>
          <a href="#resultados" className="flex flex-col items-center gap-1 text-cyan animate-float-bob mt-1">
            <span className="font-montserrat text-sm font-semibold">Descubre sus historias</span>
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>);

}

function Step({ icon: Icon, done, active, title, sub }) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-full border-2 ${
        done ?
        "bg-[#25D366] border-[#25D366] text-white" :
        active ?
        "border-[#25D366] text-[#25D366] bg-[#25D366]/10" :
        "border-white/25 text-white/40"}`
        }>
        
        <Icon className="h-6 w-6" />
      </div>
      <span className={`font-montserrat text-xs font-semibold ${done || active ? "text-white" : "text-white/55"}`}>
        {title}
      </span>
      <span className={`text-[11px] ${done ? "text-[#25D366]" : "text-white/40"}`}>{sub}</span>
    </div>);

}