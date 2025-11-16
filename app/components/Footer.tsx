"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        border-t 
        border-t-[rgba(112,64,155,0.25)]
        bg-[#01090B] text-white
      "
    >
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-10 md:grid-cols-3 items-start text-center md:text-left">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start justify-center">
          <Image
            src="/imgs/logo.png"
            alt="KR Incorporadora"
            width={140}
            height={60}
            priority
          />
        </div>

        {/* Contato */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="mb-4 text-lg ">Contato</h3>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-(--primary-color) text-white">
                <FaWhatsapp />
              </span>
              <Link
                href="https://wa.me/5511947802545"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-(--primary-color)"
              >
                (11) 9 4780-2545
              </Link>
            </li>

            <li className="flex items-center justify-center md:justify-start gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-(--primary-color) text-white">
                <FaEnvelope />
              </span>
              <a
                href="mailto:krincorporadora2018@gmail.com"
                className="transition hover:text-(--primary-color)"
              >
                krincorporadora2018@gmail.com
              </a>
            </li>

            <li className="flex items-center justify-center md:justify-start gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-(--primary-color) text-white">
                <FaEnvelope />
              </span>
              <a
                href="mailto:contatokellysw@gmail.com"
                className="transition hover:text-(--primary-color)"
              >
                contatokellysw@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Localização */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="mb-4 text-lg ">Localização</h3>
          <div className="flex items-start justify-center md:justify-start gap-3 text-sm">
            <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-(--primary-color) text-white">
              <FaMapMarkerAlt />
            </span>
            <address className="not-italic leading-relaxed">
              R. Rio Branco, 1309 – Vila Bocaina, Mauá – SP, 09310-380
            </address>
          </div>
        </div>
      </div>

      
    </footer>
  );
}
