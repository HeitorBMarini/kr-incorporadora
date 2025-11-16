"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <Image
        src="/imgs/banner.webp"
        alt="Banner principal"
        fill
        priority
        className="object-cover object-center"
      />

    </section>
  );
}
