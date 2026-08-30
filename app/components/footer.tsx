import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaGraduationCap,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";
import { Globe } from "./ui/globe";

// Stamped at build time. Rendering it on the client too would mismatch the
// prerendered HTML on the first page load of a new year.
const YEAR = new Date().getFullYear();

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType;
  label: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <Icon aria-hidden="true" />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.scholar} icon={FaGraduationCap} label="Google Scholar" />
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} label="X" />
      <SocialLink href={socialLinks.github} icon={FaGithub} label="GitHub" />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} label="LinkedIn" />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} label="Email" />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} label="Instagram" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-20">
      <small className="block text-[#1C1C1C] dark:text-[#D4D4D4]">
        <time>© {YEAR}</time>{" "}
        <a
          className="no-underline"
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          {metaData.title}
        </a>
        <SocialLinks />
      </small>
      <div className="relative mt-16">
        <div className="relative h-[150px] sm:h-[200px] md:h-[300px] w-full max-w-3xl mx-auto overflow-hidden">
          <Globe className="opacity-70" />
        </div>
      </div>
    </footer>
  );
}
