import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
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

function FooterLinkList({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-white">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link}>
            <Link href="#" className="text-sm text-white/70 hover:text-white">
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
    <footer className="bg-brand-dark text-white">
      <FooterCta />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-maroon">
                <span className="h-3 w-3 rounded-full bg-brand-coral" />
              </span>
              <span className="text-lg font-bold leading-tight text-white">
                TOBAMS
                <span className="block text-[0.6rem] font-semibold tracking-[0.2em] text-white/70">
                  GROUP
                </span>
              </span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>
            <div className="mt-5 flex gap-3">
              <Link
                href="#"
                aria-label="Tobams Group on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <FaLinkedin className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#"
                aria-label="Tobams Group on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <FaInstagram className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#"
                aria-label="Tobams Group on X"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <FaTwitter className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <FooterLinkList title="What We Do" links={whatWeDo} />
          <FooterLinkList title="Company" links={company} />
          <FooterLinkList title="Solution" links={solution} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-bold text-white">Registered Offices</h3>
            <div className="mt-4 space-y-4 text-sm text-white/70">
              <div>
                <p className="font-semibold text-brand-coral">United Kingdom</p>
                <p className="mt-1">
                  07451196 (Registered by Company House)
                  <br />
                  Vine Cottages, 235 North Street, Romford, Essex, United
                  Kingdom, RM1 4QA
                </p>
              </div>
              <div>
                <p className="font-semibold text-brand-coral">Nigeria</p>
                <p className="mt-1">
                  RC 1048722 (Registered by the Corporate Affairs Commission)
                  <br />
                  4, Muaz Close, Angwar-Rimi
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-2 sm:justify-self-end">
            <h3 className="text-sm font-bold text-white">Contact Information</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a href="mailto:theteam@tobamsgroup.com" className="flex items-center gap-2 hover:text-white">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  theteam@tobamsgroup.com
                </a>
              </li>
              <li>
                <a href="tel:+447886600748" className="flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  +44 7886 600748
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright &copy; Tobams Group. 2024. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white">
              Terms and Conditions
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
