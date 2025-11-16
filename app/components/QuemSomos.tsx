"use client";

import Image from "next/image";

export default function QuemSomos() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Texto */}
        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-(--primary-color) font-albert font-semibold text-3xl mb-0 tracking-wide">
            KR INCORPORADA
          </h2>
          <h3 className="uppercase text-md tracking-[0.2em] font-semibold text-black ">
            Desde 2018
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Nossa empresa foi fundada em 2018 por mim, Kelly, e meu marido,
            Robson.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Somos um casal de Mauá, cidade onde residimos. Desde 2009, temos
            trilhado um caminho juntos e, em 2018, tomamos a decisão de seguir
            profissionalmente na área da Construção Civil.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Nossa jornada começou com a execução do Residencial Lua, um projeto
            residencial situado no bairro Jardim Santa Lídia, que marcou nossa
            primeira grande empreitada no setor.
          </p>

          <a
            href="https://wa.me/5511947802545?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20KR%20Incorporada."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-(--primary-color) hover:bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Saiba Mais
          </a>
        </div>

        {/* Imagem */}
        <div className="relative w-full h-[400px] md:h-[580px] ">
          <Image
            src="/imgs/quem-2.png"
            alt="Fachada de edifício KR Incorporada"
            fill
            className=" object-center rounded-3xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
