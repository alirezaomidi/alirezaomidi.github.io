import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGitlab, FaBitbucket, FaBook, FaLink } from "react-icons/fa6";
import { Publication } from "app/publications/publication-data";

interface PublicationListProps {
    publications: Publication[];
    showImages?: boolean;
}

const CodebaseIcon = ({ platform }: { platform: string }) => {
    switch (platform) {
        case "github":
            return <FaGithub />;
        case "gitlab":
            return <FaGitlab />;
        case "bitbucket":
            return <FaBitbucket />;
        default:
            return <FaLink />;
    }
};

const buttonClass =
    "inline-flex items-center gap-2 px-3 py-1 text-sm rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:opacity-80 no-underline";

function PaperButton({ doi, url, title }: { doi?: string; url: string; title: string }) {
    return (
        <a
            href={doi ? `https://doi.org/${doi}` : url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Paper: ${title}`}
            className={buttonClass}
        >
            <FaBook aria-hidden="true" />
            <span>Paper</span>
        </a>
    );
}

function CodebaseButton({
    codebase,
    title,
}: {
    codebase: Publication["codebase"];
    title: string;
}) {
    if (!codebase) return null;

    return (
        <a
            href={codebase.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Code for ${title}`}
            className={buttonClass}
        >
            <CodebaseIcon platform={codebase.platform} />
            <span>Code</span>
        </a>
    );
}

export function PublicationList({ publications, showImages = true }: PublicationListProps) {
    return (
        <ul className="space-y-12 list-none p-0">
            {publications.map((pub) => (
                <li key={pub.slug} className="group">
                    <div className="flex flex-col">
                        <div className="flex gap-6">
                            {!showImages && pub.figure && (
                                <Link
                                    href={`/blog/${pub.slug}`}
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-32 h-32 relative transition-opacity duration-200 hover:opacity-80"
                                >
                                    <Image
                                        src={pub.figure.thumb ?? pub.figure.url}
                                        alt=""
                                        fill
                                        sizes="128px"
                                        className="object-cover rounded-lg"
                                        unoptimized={!pub.figure.isLocal}
                                    />
                                </Link>
                            )}
                            <div className="flex-grow">
                                <Link
                                    href={`/blog/${pub.slug}`}
                                    className="block text-left transition-opacity duration-200 hover:opacity-80"
                                >
                                    <div className="w-full flex justify-between items-baseline">
                                        <span className="text-black dark:text-white font-medium tracking-tight group-hover:underline decoration-neutral-400 dark:decoration-neutral-600">
                                            {pub.title}
                                        </span>
                                        <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                                            {pub.year}
                                        </span>
                                    </div>
                                    <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                                        {pub.authors}
                                    </p>
                                    <div className="text-neutral-600 dark:text-neutral-400">
                                        <div className="italic">{pub.journal}</div>
                                    </div>
                                </Link>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <PaperButton doi={pub.doi} url={pub.url} title={pub.title} />
                                    {pub.codebase && (
                                        <CodebaseButton codebase={pub.codebase} title={pub.title} />
                                    )}
                                </div>
                            </div>
                        </div>
                        {showImages && pub.figure && (
                            <figure className="mt-4 m-0">
                                <div className="relative w-full overflow-hidden rounded-lg bg-white p-0">
                                    <Image
                                        src={pub.figure.url}
                                        alt={pub.figure.alt}
                                        width={800}
                                        height={400}
                                        sizes="(max-width: 640px) 100vw, 640px"
                                        className="w-full h-auto object-contain"
                                        unoptimized={!pub.figure.isLocal}
                                    />
                                </div>
                            </figure>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}
