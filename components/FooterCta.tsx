import Link from "next/link";

export default function FooterCta() {
  return (
    <div className="border-b border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium text-white/60">
            Ready to be a part of something extraordinary?
          </p>
          <p className="mt-1 text-xl font-bold text-white sm:text-2xl">
            Let&apos;s work together to create a difference
          </p>
        </div>
        <Link
          href="#"
          className="inline-block shrink-0 rounded-full bg-brand-maroon px-6 py-3 text-center text-sm font-semibold text-white hover:bg-brand-maroon-dark"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}
