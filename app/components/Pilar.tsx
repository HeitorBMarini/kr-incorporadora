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

        {/* Main board image */}
        <div className="w-full  h-full ">
          <Image
            src="/imgs/pilar/pilar-1.png"
            alt="Painel do Residencial pilar com plantas e fotos"
            width={1280}
            height={820}
            priority
            className="h-[340px] md:w-[620px] w-auto "
          />
        </div>

        {/* Poster / vertical artwork */}
        <div className="overflow-hidden ">
          <Image
            src="/imgs/pilar/pilar-2.png"
            alt="Cartaz do Residencial pilar"
            width={560}
            height={980}
          />
        </div>
      </div>
    </section>
  );
}
