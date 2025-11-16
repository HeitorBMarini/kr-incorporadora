"use client";

import Image from "next/image";
import Link from "next/link";

const WHATSAPP = "5511947802545";

export default function ResidencialEstrela() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 grid items-center gap-8 md:grid-cols-[1fr_1.4fr_.8fr]">
        {/* Left copy */}
        <div>
          <h2 className="font-montserrat  text-black text-3xl md:text-4xl font-bold leading-tight">
            Residencial <br /> Estrela
          </h2>

          <div className="mt-5 font-albert text-black">
            <p className=" text-black">Apartamentos de 47m² a 102m²</p>
            <div>
              <p className=" mb-0  text-black">Apartamentos entregues com:</p>
              <ul className="list-disc  text-black pl-5 space-y-1">
                <li>Porcelanato</li>
                <li>Laminado</li>
                <li>Moldura de Gesso</li>
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

        {/* Main board image */}
        <div className="relative w-full overflow-hidden rounded-3xl">
          <Image
            src="/imgs/estrela/estrela-1.png"
            alt="Painel do Residencial Estrela com plantas e fotos"
            width={1280}
            height={720}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        {/* Poster / vertical artwork */}
        <div className="relative overflow-hidden ">
          <video
            src="/videos/estrela-2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
