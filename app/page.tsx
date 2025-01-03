import Image from "next/image";
import Link from "next/link";
import { FaFilePdf, FaXTwitter, FaGithub, FaLinkedinIn, FaGraduationCap } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { socialLinks } from "./config";
import { education } from "./education-data";
import { publications } from "./publications/publication-data";
import { PublicationList } from "./components/publication-list";

export default function Page() {
  const selectedPublications = publications.filter(pub => pub.selected);

  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={200}
          height={200}
          priority
        />
      </a>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a Ph.D. candidate in Bioinformatics at the University of British Columbia (UBC).
          I'm working in <a href="https://www.msl.ubc.ca/people/dr-joerg-gsponer/" target="_blank" rel="noopener noreferrer">Gsponer Lab</a> at <a href="https://www.msl.ubc.ca/" target="_blank" rel="noopener noreferrer">Michael Smith Laboratories</a>.
        </p>
        <p>
          My research focuses on developing generative models for protein design. Specifically, I'm interested in using diffusion models and flow matching to design mini-protein binders.
          I'm also interested in using large language models to enhance protein design and predict protein-protein interactions.
        </p>

        <div className="my-8 flex flex-wrap gap-3">
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:opacity-80 no-underline"
          >
            <FaFilePdf />
            <span>Download CV</span>
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:opacity-80 no-underline"
          >
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </a>
        </div>

        <h2 className="font-medium text-2xl mb-8 tracking-tight">Education</h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="group">
              <div className="flex flex-col">
                <div className="w-full flex justify-between items-baseline">
                  <span className="text-black dark:text-white font-medium tracking-tight">
                    {edu.degree}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                    {edu.years}
                  </span>
                </div>
                <div className="text-neutral-600 dark:text-neutral-400 text-sm leading-snug">
                  <div>{edu.institution}</div>
                  {edu.department && <div>{edu.department}</div>}
                  {edu.location && <div>{edu.location}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-medium text-2xl mb-8 tracking-tight mt-12">Selected Publications</h2>
      </div>

      <div>
        <PublicationList publications={selectedPublications} showImages={false} />
        <div className="mt-8">
          <Link
            href="/publications"
            className="text-neutral-600 dark:text-neutral-400 hover:opacity-80 no-underline"
          >
            View All Publications →
          </Link>
        </div>
      </div>
    </section>
  );
}
