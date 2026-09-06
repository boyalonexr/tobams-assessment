import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-125 overflow-hidden lg:min-h-screen">

      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-0 bg-black/50"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-w-full flex-col items-center justify-center">

        {/* Section label */}
        <div className="mx-auto flex h-11.25 w-48.25 items-center justify-center rounded-full bg-white/10">
          <p className="text-sm font-normal uppercase tracking-[0.2em] text-white">
            What we do
          </p>
        </div>

        {/* Heading */}
        {/* Mobile heading */}
        <h1 className="mt-1 text-2xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:hidden">
          Learning and Development
        </h1>

        {/* Desktop heading */}
        <h1 className="mt-1 hidden text-2xl font-semibold leading-tight text-white lg:block lg:text-[56px]">
          Training and Development
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 px-4 max-w-2xl md:max-w-4xl lg:max-w-6xl text-center text-sm font-normal leading-relaxed text-white sm:text-base lg:text-lg">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>

        {/* Book a consultation */}
        <Link
          href="#book-a-consultation"
          className="mt-8 inline-block rounded-sm bg-[#571244] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#451036] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#571244] focus-visible:ring-offset-2 sm:text-base"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}

