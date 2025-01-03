"use client";

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

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.scholar} icon={FaGraduationCap} />
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="relative mt-20">
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
        <style jsx>{`
          @media screen and (max-width: 480px) {
            article {
              padding-top: 2rem;
              padding-bottom: 4rem;
            }
          }
        `}</style>
        <SocialLinks />
      </small>
      <div className="relative mt-16">
        <div className="relative h-[150px] sm:h-[200px] md:h-[300px] w-full max-w-3xl mx-auto overflow-hidden">
          <div className="flex justify-center">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-lg font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Tiny footprints, big dreams
            </span>
          </div>
          <Globe className="opacity-70" />
        </div>
      </div>
    </div>
  );
}
