import React, { useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import SectionBadge from "./SectionBadge";
import { VIDEO_TESTIMONIALS } from "@/lib/newbodyAssets";

export default function VideoTestimonials() {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.85 * dir, behavior: "smooth" });
  };

  return (
    <section className="relative bg-navy-deep py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 nb-grid-bg opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="text-center mb-10">
          <SectionBadge>Testimonios</SectionBadge>
          <h2 className="nb-section-title text-3xl sm:text-5xl text-white mt-6 mb-4">
            Mejor que contártelo nosotros,
            <br className="hidden sm:block" /> <span className="text-cyan">escucha a quienes ya lo vivieron.</span>
          </h2>
        </div>

        <div className="relative">
          <div ref={scrollerRef} className="nb-scroll-snap flex gap-5 overflow-x-auto pb-4 -mx-5 px-5">
            {VIDEO_TESTIMONIALS.map((v, i) => (
              <VideoCard key={i} video={v} />
            ))}
          </div>
          <NavBtn side="left" onClick={() => scrollBy(-1)} />
          <NavBtn side="right" onClick={() => scrollBy(1)} />
        </div>
      </div>
    </section>
  );
}

function VideoCard({ video }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="nb-snap-item shrink-0 w-[260px] sm:w-[300px]">
      <div className="relative rounded-2xl overflow-hidden nb-card-glass group">
        <video
          ref={ref}
          src={video.src}
          muted
          loop
          playsInline
          preload="metadata"
          onClick={toggle}
          className="w-full aspect-[9/16] object-cover bg-navy cursor-pointer"
        />
        {!playing && (
          <button
            onClick={toggle}
            aria-label="Reproducir testimonio"
            className="absolute inset-0 flex items-center justify-center bg-navy/30 hover:bg-navy/10 transition"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan text-navy nb-cyan-glow">
              <Play className="h-7 w-7 ml-0.5" fill="currentColor" />
            </span>
          </button>
        )}
        <button
          onClick={toggleMute}
          aria-label={muted ? "Activar sonido" : "Silenciar"}
          className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-navy/70 border border-white/20 text-white hover:text-cyan"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-transparent">
          <p className="font-montserrat font-semibold text-white text-sm leading-snug">
            “{video.quote}”
          </p>
        </div>
      </div>
    </div>
  );
}

function NavBtn({ side, onClick }) {
  const isLeft = side === "left";
  return (
    <button
      onClick={onClick}
      aria-label={isLeft ? "Anterior" : "Siguiente"}
      className={`hidden sm:flex absolute top-1/2 -translate-y-1/2 ${isLeft ? "-left-3" : "-right-3"} z-10 h-11 w-11 items-center justify-center rounded-full bg-navy border border-cyan/40 text-cyan hover:bg-cyan hover:text-navy transition nb-cyan-glow`}
    >
      {isLeft ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
    </button>
  );
}