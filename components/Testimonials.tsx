"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import avatarAisha from "@/public/avatar1.png";
import avatarJohn from "@/public/avatar2.png";
import avatarChinonso from "@/public/avatar3.png";
import avatarSarah from "@/public/avatar1.png";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO of Tech Innovations Inc.",
    avatar: avatarSarah,
    quote:
      "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    avatar: avatarJohn,
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    avatar: avatarChinonso,
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
   {
    name: "Aisha Yusuf",
    role: "CEO of Tech Innovations Inc.",
    avatar: avatarAisha,
    quote:
      "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!",
  }
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "prev" | "next") => {
    const track = trackRef.current;

    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-card]");

    if (!card) return;

    const gap = 24;
    const scrollDistance = card.offsetWidth + gap;

    track.scrollBy({
      left: direction === "next" ? scrollDistance : -scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-375 px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        {/* Section heading */}
        <h2 className="text-center text-xl font-semibold tracking-tight text-black sm:text-2xl md:text-4xl lg:text-6xl">
          Testimonials
        </h2>

        {/* Testimonial carousel */}
        <div
          ref={trackRef}
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 scrollbar-none sm:mt-12 sm:gap-6"
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              data-card
              className="
                flex
                min-h-[280px]
                w-full
                shrink-0
                snap-start
                flex-col
                rounded-tl-xl
                rounded-bl-xl
                border-l-2
                border-l-[#EF4353]
                bg-white
                px-5
                py-6
                shadow-[0_2px_15px_rgba(0,0,0,0.04)]
                sm:min-h-[265px]
                sm:w-[calc((100%-48px)/3.1)]
                sm:px-7
                sm:py-6
                lg:min-h-[265px]
              "
            >
              {/* Customer information */}
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={`Portrait of ${testimonial.name}`}
                  width={64}
                  height={64}
                  className="h-11 w-11 shrink-0 rounded-full object-cover sm:h-12 sm:w-12"
                />

                <div className="min-w-0">
                  <p className="text-base font-medium leading-5 text-[#151515]">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-[12px] leading-4 text-[#696969]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Testimonial quote */}
              <p className="mt-5 text-sm leading-6 text-[#151515] sm:mt-6 sm:text-[15px] sm:leading-6">
                {testimonial.quote}
              </p>
            </article>
          ))}
        </div>

        {/* Carousel controls */}
        <div className="mt-7 flex justify-end gap-3 sm:mt-10 sm:gap-4">
          <button
            type="button"
            onClick={() => scrollByCard("prev")}
            aria-label="Previous testimonial"
            className="
              flex h-12 w-12
              items-center justify-center
              rounded-xl
              bg-[#fbe7e9]
              text-[#ed3f5b]
              transition-colors
              hover:bg-[#f8dadd]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#ed3f5b]
              focus-visible:ring-offset-2
            "
          >
            <ChevronLeft
              className="h-6 w-6 sm:h-7 sm:w-7"
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            onClick={() => scrollByCard("next")}
            aria-label="Next testimonial"
            className="
              flex h-12 w-12
              items-center justify-center
              rounded-xl
              bg-[#fbe7e9]
              text-[#ed3f5b]
              transition-colors
              hover:bg-[#f8dadd]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#ed3f5b]
              focus-visible:ring-offset-2
            "
          >
            <ChevronRight
              className="h-6 w-6 sm:h-7 sm:w-7"
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
}