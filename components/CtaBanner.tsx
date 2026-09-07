import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="mx-auto bg-[#F9F9F9] max-w-283.5 px-4 sm:px-6 lg:px-8">
      <div
        id="book-a-consultation"
        className="scroll-mt-24 rounded-lg bg-[#571244] px-10 py-10 text-center sm:px-12 sm:py-14 lg:py-6"
      >
        {/* Desktop copy */}
        <div className="hidden sm:block">
          <p className="text-lg font-semibold leading-7 text-white sm:text-xl">
            Want to accelerate professional growth and development at your
            organisation?
          </p>

          <p className="mt-1 text-lg font-semibold leading-7 text-white sm:text-xl">
            See how we can help.
          </p>
        </div>

        {/* Mobile copy */}
        <p className="text-base font-semibold leading-6 text-white sm:hidden">
          Don't just dream it—let's build it! Click now and start your project
          with Tobams Group. Your journey to digital excellence begins here.
        </p>

        <Link
          href="#"
          className="mt-6
           inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-[#571244] transition-colors hover:bg-[#FFFFFF] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#571244]"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
