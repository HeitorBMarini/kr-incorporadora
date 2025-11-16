"use client";

import Image from "next/image";
import Link from "next/link";

const WHATSAPP = "5511947802545";

export default function ResidencialPilar() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 grid items-center gap-2 md:grid-cols-[1fr_2fr_1fr]">
        {/* Left copy */}
        <div>
          <h2 className="font-montserrat  text-black text-3xl md:text-4xl font-bold leading-tight">
            Residencial <br /> Pilar
          </h2>

          <div className="mt-5 font-albert ">
            <div>
              <ul className="list-none   text-black  space-y-1">
                <li>Apartamentos de 66m²</li>
                <li>2 Dormitórios (1 suíte)</li>
                <li>Varanda gourmet</li>
                <li>1 vaga</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-(--primary-color) hover:bg-black px-5 py-2 text-sm  text-white transition hover:opacity-90"
              aria-label="Fale conosco no WhatsApp sobre o Residencial Estrela"
            >
              Fale Conosco
            </Link>
          </div>
        </div>

        {/* Main board video */}
        <div className="w-full h-[270px] md:h-[470px] overflow-hidden">
          <video
            src="/videos/pilar.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Poster / vertical artwork */}
        <div className="w-full h-[270px] md:h-[470px] overflow-hidden">
          <video
            src="/videos/pilar-2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
