import Image, { StaticImageData } from "next/image";

interface ContentSectionProps {
  title: string;
  description: string;
  items: string[];
  image: string | StaticImageData;
  reverse?: boolean;
}

export default function ContentSection({
  title,
  description,
  items,
  image,
  reverse = false,
}: ContentSectionProps) {
  return (
    <section className="grid items-center gap-10 md:grid-cols-2">
      <div className={reverse ? "md:order-2" : "md:order-1"}>
        <h2 className="mb-3 text-3xl font-medium tracking-tight md:text-4xl">
          {title}
        </h2>

        <p className="mb-5 max-w-xl text-sm leading-6 text-gray-500 md:text-base">
          {description}
        </p>

        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm text-gray-600"
            >
              <span className="text-purple-600">✦</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={reverse ? "md:order-1" : "md:order-2"}>
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="h-auto w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}