import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import lmsPhoto from "../public/learning.jpg";

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export default function LearningManagementSystem() {
  return (
    <section className="bg-[#F9F9F9] py-12">
      <div className="pt-12 pb-18 px-4 sm:px-6 bg-[#5712441A]">
        <h2 className="mb-6 text-2xl font-semibold text-[#571244] sm:mb-10 sm:text-3xl md:text-center lg:px-4 lg:hidden">
          Learning Management System
        </h2>

        {/* Content grid */}
        <div className="flex flex-col lg:flex-row border-2 border-black px-4 items-center gap-6 lg:gap-16">

          {/* Image */}
          <div className="relative border-2 border-black mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full sm:max-w-md lg:max-w-lg">
            <Image
              src={lmsPhoto}
              alt="Two people, a man and a woman, standing together in a modern office"
              fill
              className="object-cover"
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 448px, 50vw"
            />
          </div>

          {/* Text content */}
          <div className="relative rounded-lg bg-[#5712441A] p-4 sm:p-6">
            <h2 className="absolute -top-16 left-0 hidden lg:block text-2xl font-semibold text-[#571244] sm:text-3xl">
              Learning Management System
            </h2>
            <p className="text-sm font-normal leading-relaxed text-[#151515]/70 sm:text-base">
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey. From
              technical courses covering the latest programming languages and
              development frameworks to soft skills training in leadership,
              effective communication and project management, TG Academy offers
              a wide range of courses to cater to diverse learning needs. With
              accessible and interactive learning materials, individuals can
              enhance their skills and stay ahead in today&apos;s competitive
              tech landscape.
            </p>

            <p className="mt-6 text-base font-semibold text-[#571244]">
              Some of our courses include:
            </p>

            {/* Course list */}
            <ul className="mt-3 grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <li key={course} className="flex items-center gap-2 text-sm font-normal text-[#151515]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#151515]" aria-hidden="true" />
                  {course}
                </li>
              ))}
            </ul>

            {/* Call-to-action */}
            <Link
              href="#"
              className="mt-8 lg:absolute -bottom-20 left-0 flex w-38.25 items-center justify-center gap-1.5 rounded-sm bg-[#571244] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#451036] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#571244] focus-visible:ring-offset-2"
            >
              Learn More

              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}