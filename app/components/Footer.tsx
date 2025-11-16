"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="w-full text-white py-10 md:py-14"
      style={{
        borderTop: "2px solid rgba(112, 64, 155, 0.25)",
        background: "#01090B",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/imgs/logo.png"
            alt="Logo KR Incorporadora"
            width={140}
            height={140}
            className="object-contain"
            priority
          />
        </div>

        {/* Contato */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Contato
          </h3>

          <ul className="space-y-3 text-sm text-white/90">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-(--primary-color) text-white">
                <FaWhatsapp size={14} />
              </span>
              <Link
                href="https://wa.me/5511947802545"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-(--primary-color) transition"
              >
                (11) 9 4780-2545
              </Link>
            </li>

            <li className="flex items-center justify-center md:justify-start gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-(--primary-color) text-white">
                <FaEnvelope size={15} />
              </span>
              <Link
                href="mailto:krincorporadora2018@gmail.com"
                className="hover:text-(--primary-color) transition"
              >
                krincorporadora2018@gmail.com
              </Link>
            </li>

            <li className="flex items-center justify-center md:justify-start gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-(--primary-color) text-white">
                <FaEnvelope size={15} />
              </span>
              <Link
                href="mailto:contatokellysw@gmail.com"
                className="hover:text-(--primary-color) transition"
              >
                contatokellysw@gmail.com
              </Link>
            </li>
          </ul>
        </div>

        {/* Localização */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Localização
          </h3>
          <p className="flex items-center justify-center md:justify-start gap-3 text-sm text-white/90 leading-relaxed">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-(--primary-color) text-white">
              <FaMapMarkerAlt size={15} />
            </span>
            R. Rio Branco, 1309 — Vila Bocaina, Mauá — SP, 09310-380
          </p>
        </div>
      </div>

     
    </footer>
  );
}
