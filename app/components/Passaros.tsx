"use client";

import Image from "next/image";
import Link from "next/link";

const WHATSAPP = "5511947802545";

export default function ResidencialPassaros() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 grid items-stretch gap-8 md:grid-cols-[1fr_1.5fr_1fr]">
        {/* Imagem lateral esquerda */}
        <div className="relative overflow-hidden w-full md:w-[650px] h-[260px] sm:h-80 md:h-[380px]">
          <Image
            src="/imgs/passaros/passaros-1.png"
            alt="Painel do Recanto dos Pássaros"
            fill
            
            priority
          />
        </div>

        {/* Imagem central */}
        <div className="relative overflow-hidden w-full h-[260px] sm:h-80 md:h-[380px]">
          <Image
            src="/imgs/passaros/passaros-2.png"
            alt="Banner vertical do Recanto dos Pássaros"
            fill
            
          />
        </div>

        {/* Texto à direita */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="font-montserrat text-black text-3xl md:text-4xl font-bold leading-tight">
            Recanto dos <br /> Pássaros
          </h2>

          <div className="mt-5 space-y-4 font-semibold text-black">
            <p>
              Apartamentos de 53m² à 72m²
            </p>

            <ul className="list-none font-semibold space-y-1">
              <li>3 Torres</li>
              <li>3 Salões de Festas</li>
              <li>2 Espaços coworking</li>
              <li>2 Espaços Kids</li>
              <li>Varanda Gourmet</li>
            </ul>
          </div>

          <div className="mt-6">
            <Link
              href={`https://wa.me/${WHATSAPP}?text=Olá!%20Tenho%20interesse%20no%20Recanto%20dos%20Pássaros.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-(--primary-color) hover:bg-black px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
              aria-label="Fale conosco no WhatsApp sobre o Recanto dos Pássaros"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
