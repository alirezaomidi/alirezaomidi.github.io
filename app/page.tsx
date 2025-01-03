import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a Ph.D. student at the University of British Columbia (UBC), working in the Gsponer Lab at Michael Smith Laboratories.
        </p>
        <p>
          My research focuses on protein design, diffusion models, and AI applications in drug discovery. I work on projects involving:
        </p>
        <ul>
          <li>Diffusion & Flow matching models</li>
          <li>Large Language Models</li>
          <li>Protein Design</li>
          <li>Drug Discovery</li>
        </ul>
        <p>
          Previously, I completed my M.Sc. in Artificial Intelligence at Sharif University of Technology and my B.Sc. in Software Engineering at Isfahan University of Technology.
        </p>
      </div>
    </section>
  );
}
