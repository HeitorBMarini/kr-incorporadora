"use client";

import Image from "next/image";
import Link from "next/link";

const WHATSAPP = "5511947802545";

export default function ResidencialSoberano() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 grid items-stretch gap-8 md:grid-cols-[1fr_1.5fr_1fr]">
        {/* Imagem lateral esquerda */}
        <div className="relative overflow-hidden  w-full md:w-[650px] h-[260px] sm:h-80 md:h-[380px]">
          <Image
            src="/imgs/soberano/soberano-1.png"
            alt="Painel do Residencial Soberano"
            fill
           
            priority
          />
        </div>

        {/* Imagem central */}
        <div className="relative overflow-hidden mr-2 w-full h-[260px] sm:h-80 md:h-[380px]">
          <Image
            src="/imgs/soberano/soberano-2.png"
            alt="Fachada do Residencial Soberano"
            fill
           
          />
        </div>

        {/* Texto à direita */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="font-montserrat text-black text-3xl md:text-4xl  leading-tight">
            Residencial <br /> Soberano
          </h2>

          <div className="mt-5 space-y-2 mb-0  text-black">
            <p>
              Apartamentos de 51m² à 76m²
            </p>

            <ul className="list-none  space-y-1">
              <li>Espaço Beleza</li>
              <li>Área Churrasco</li>
              <li>Playground Infantil</li>
              <li>Espaço Coworking</li>
              <li>Rooftop</li>
            </ul>
          </div>

          <div className="mt-6">
            <Link
              href={`https://wa.me/${WHATSAPP}?text=Olá!%20Tenho%20interesse%20no%20Residencial%20Soberano.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full hover:bg-black bg-(--primary-color) px-5 py-2 text-sm  text-white transition hover:opacity-90"
              aria-label="Fale conosco no WhatsApp sobre o Residencial Soberano"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
