import Image, { StaticImageData } from "next/image";
import { Zap } from "lucide-react";

interface ContentSectionProps {
  title: string;
  description: string;
  items: string[];
  image: string | StaticImageData;
  imageBorder?: string;
  reverse?: boolean;
}

export default function ContentSection({
  title,
  description,
  items,
  image,
  imageBorder = "rounded-2xl",
  reverse = false,
}: ContentSectionProps) {
  return (
    <section className="grid gap-10 md:grid-cols-2">
      {/* Text */}
      <div
        className={`md:h-94.5 ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <h2 className="mb-3 text-3xl font-medium tracking-tight text-[#151515] md:text-4xl">
          {title}
        </h2>

        {/* Mobile image */}
        <div className="my-8 md:hidden">
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className={`h-auto w-full ${imageBorder} object-cover`}
          />
        </div>

        <p className="mb-5 max-w-xl text-sm leading-6 text-[#696969] md:text-base">
          {description}
        </p>

        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm text-[#696969]"
            >
              <Zap
                className="mt-0.5 h-6 w-6 shrink-0 text-[#480F39]"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop image */}
      <div
        className={`hidden md:block h-94.5 ${
          reverse ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className={`h-full w-full ${imageBorder} object-cover`}
        />
      </div>
    </section>
  );
}