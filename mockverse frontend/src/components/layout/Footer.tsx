import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import type { IconType } from "react-icons";

import Logo from "../common/Logo";

interface FooterLink {
  label: string;
  href: string;
}

const productLinks: FooterLink[] = [
  {
    label: "Practice Tests",
    href: "#practice",
  },
  {
    label: "Listening",
    href: "#practice",
  },
  {
    label: "Reading",
    href: "#practice",
  },
  {
    label: "Writing",
    href: "#practice",
  },
  {
    label: "Speaking",
    href: "#practice",
  },
];

const companyLinks: FooterLink[] = [
  {
    label: "Why MockVerse",
    href: "#features",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const resourceLinks: FooterLink[] = [
  {
    label: "Help Center",
    href: "#",
  },
  {
    label: "Study Resources",
    href: "#",
  },
  {
    label: "IELTS Guide",
    href: "#",
  },
  {
    label: "FAQ",
    href: "#",
  },
];

const legalLinks: FooterLink[] = [
  {
    label: "Privacy Policy",
    href: "#",
  },
  {
    label: "Terms of Service",
    href: "#",
  },
  {
    label: "Cookie Policy",
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[700px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:py-20">

          {/* Brand */}
          <div className="max-w-sm">

            <a
              href="#home"
              className="inline-flex items-center"
              aria-label="MockVerse home"
            >
              <Logo />
            </a>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              A smarter way to prepare for your next exam.
              Practice realistically, understand your performance,
              and build the confidence you need for test day.
            </p>

            {/* Email */}
            <a
              href="mailto:hello@mockverse.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-purple-400" />

              hello@mockverse.com
            </a>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">

              <SocialLink
                href="#"
                label="GitHub"
                icon={FaGithub}
              />

              <SocialLink
                href="#"
                label="LinkedIn"
                icon={FaLinkedinIn}
              />

              <SocialLink
                href="#"
                label="Twitter"
                icon={FaTwitter}
              />

              <SocialLink
                href="#"
                label="Instagram"
                icon={FaInstagram}
              />

            </div>
          </div>

          {/* Product */}
          <FooterColumn
            title="Product"
            links={productLinks}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={companyLinks}
          />

          {/* Resources */}
          <FooterColumn
            title="Resources"
            links={resourceLinks}
          />

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-6 py-7 lg:flex-row lg:items-center lg:justify-between">

          {/* Copyright */}
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} MockVerse. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {legalLinks.map((link) => (
              <FooterLink
                key={link.label}
                link={link}
              />
            ))}
          </div>

          {/* Back To Top */}
          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition-colors hover:text-white"
          >
            Back to top

            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

        </div>
      </div>
    </footer>
  );
};

/* -------------------------------- */
/* Footer Column */
/* -------------------------------- */

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

const FooterColumn = ({
  title,
  links,
}: FooterColumnProps) => {
  return (
    <div>
      <h3 className="text-sm font-bold text-white">
        {title}
      </h3>

      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
};

/* -------------------------------- */
/* Footer Link */
/* -------------------------------- */

interface FooterLinkProps {
  link: FooterLink;
}

const FooterLink = ({
  link,
}: FooterLinkProps) => {
  return (
    <a
      href={link.href}
      className="text-sm text-slate-400 transition-colors hover:text-white"
    >
      {link.label}
    </a>
  );
};

/* -------------------------------- */
/* Social Link */
/* -------------------------------- */

interface SocialLinkProps {
  href: string;
  label: string;
  icon: IconType;
}

const SocialLink = ({
  href,
  label,
  icon: Icon,
}: SocialLinkProps) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="
        flex h-9 w-9 items-center justify-center
        rounded-lg
        border border-white/10
        bg-white/5
        text-slate-400
        transition-all duration-200
        hover:-translate-y-0.5
        hover:border-purple-400/30
        hover:bg-purple-500/10
        hover:text-white
      "
    >
      <Icon className="h-4 w-4" />
    </a>
  );
};

export default Footer;
