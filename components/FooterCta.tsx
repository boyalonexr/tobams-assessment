import Link from "next/link";
import Image from "next/image";
import tobamsLogo from "../public/f110fd4f935cdabd8ef9636a8144267e4494e408.png";
import { FaXTwitter, FaEnvelope, FaPhone } from "react-icons/fa6";
import instagramIcon from "../public/instagram.png";
import linkedinIcon from "../public/linkedin.png";
import FooterCta from "./FooterCta";

const whatWeDo = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const company = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solution = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

function FooterLinkList({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h3 className="text-lg font-bold text-white">{title}</h3>

      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link}>
            <Link href="#" className="text-sm text-white">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#11040E] text-white">
      <FooterCta />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-12">
        {/* Main Navigation */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Tobams Group */}
          <div>
            <Image
              src={tobamsLogo}
              alt="Tobams Group Logo"
              width={188}
              height={72}
              priority
            />

            <p className="text-[14px] leading-relaxed text-[#F8F8F8] lg:text-sm">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>

            <div className="mt-5 flex gap-3">
              {/* LinkedIn */}
              <Link
                href="#"
                aria-label="Tobams Group on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors hover:bg-white/80"
              >
                <Image
                  src={linkedinIcon}
                  alt="LinkedIn"
                  width={18}
                  height={18}
                  className="h-5 w-5 object-contain"
                />
              </Link>

              {/* Instagram */}
              <Link
                href="#"
                aria-label="Tobams Group on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors hover:bg-white/80"
              >
                <Image
                  src={instagramIcon}
                  alt="Instagram"
                  width={18}
                  height={18}
                  className="h-5 w-5 object-contain"
                />
              </Link>

              {/* X */}
              <Link
                href="#"
                aria-label="Tobams Group on X"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#11040E] transition-colors hover:bg-white/80"
              >
                <FaXTwitter className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* What We Do */}
          <FooterLinkList title="What We Do" links={whatWeDo} />

          {/* Company */}
          <FooterLinkList title="Company" links={company} />

          {/* Solution */}
          <FooterLinkList title="Solution" links={solution} />
        </div>

        {/* Contact & Offices */}
        <div className="my-6 border-y border-[#DDD0DA]/10">
          <div className="my-6 rounded-lg bg-[#FFFFFF0F] p-6 lg:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              {/* Registered Offices */}
              <div className="order-2 lg:order-1 lg:w-2/3">
                <h3 className="text-lg font-bold text-white">
                  Registered Offices
                </h3>

                {/* UK and Nigeria */}
                <div className="mt-4 grid grid-cols-1 gap-6 text-xs text-white/70 lg:grid-cols-2 lg:text-sm">
                  {/* United Kingdom */}
                  <div>
                    <p className="text-sm font-semibold text-[#EF4353]">
                      United Kingdom
                    </p>

                    <p className="leading-relaxed">
                      07451196 (Registered by Company House)
                      <br />
                      Vine Cottages, 215 North Street, Romford, Essex, United
                      Kingdom, RM1 4QA
                    </p>
                  </div>

                  {/* Nigeria */}
                  <div>
                    <p className="text-sm font-semibold text-[#EF4353]">
                      Nigeria
                    </p>

                    <p className="leading-relaxed">
                      RC 1048722 (Registered by the Corporate Affairs
                      Commission)
                      <br />
                      4, Muaz Close, Angwar-Rimi
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="order-1 border-b border-[#DDD0DA]/10 pb-8 lg:order-2 lg:w-1/3 lg:border-b-0 lg:border-l lg:pl-8">
                <h3 className="text-lg font-bold text-white">
                  Contact Information
                </h3>

                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  <li>
                    <a
                      href="mailto:theteam@tobamsgroup.com"
                      className="flex items-center gap-2.5 text-sm text-white"
                    >
                      <FaEnvelope
                        className="h-4 w-4 shrink-0 text-[#EF4353]"
                        aria-hidden="true"
                      />
                      theteam@tobamsgroup.com
                    </a>
                  </li>

                  <li>
                    <a
                      href="tel:+447886600748"
                      className="flex items-center gap-2.5 text-sm text-white"
                    >
                      <FaPhone
                        className="h-4 w-4 shrink-0 text-[#EF4353]"
                        aria-hidden="true"
                      />
                      +447886600748
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Links & Copyright */}
        <div className="flex flex-col items-center gap-4 text-sm text-white lg:flex-row lg:justify-between">
          <p className="order-2 w-81.75 text-center lg:order-1 lg:text-left">
            Copyright &copy; Tobams Group. 2024. All rights reserved.
          </p>

          <div className="order-1 flex flex-col items-center gap-2 sm:flex-row sm:gap-6 lg:order-2">
            <div className="flex gap-5">
              <Link href="#" className="text-white underline">
                Privacy Policy
              </Link>

              <Link href="#" className="text-white underline">
                Cookies Policy
              </Link>
            </div>

            <Link href="#" className="text-white underline">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}