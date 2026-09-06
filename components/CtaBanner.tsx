import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        id="book-a-consultation"
        className="scroll-mt-24 rounded-2xl bg-brand-maroon px-6 py-10 text-center sm:px-12 sm:py-14"
      >
        <p className="text-lg font-semibold text-white sm:text-xl">
          Want to accelerate professional growth and development at your
          organisation?
        </p>
        <p className="mt-1 text-lg font-semibold text-white sm:text-xl">
          See how we can help.
        </p>
        <Link
          href="#"
          className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-maroon hover:bg-brand-cream"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
