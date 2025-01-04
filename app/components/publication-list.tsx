"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaGitlab, FaBitbucket, FaBook, FaLink } from "react-icons/fa6";
import { Publication } from "app/publications/publication-data";
import { Modal } from "./ui/modal";
import { Tweet } from "react-tweet";

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

function PaperButton({ doi, url }: { doi?: string; url: string }) {
    return (
        <a
            href={doi ? `https://doi.org/${doi}` : url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:opacity-80 no-underline"
        >
            <FaBook />
            {doi ? (
                <span className="font-mono">{doi}</span>
            ) : (
                <span>Paper</span>
            )}
        </a>
    );
}

function CodebaseButton({ codebase }: { codebase: Publication["codebase"] }) {
    if (!codebase) return null;

    return (
        <a
            href={codebase.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:opacity-80 no-underline"
        >
            <CodebaseIcon platform={codebase.platform} />
            <span>Code</span>
        </a>
    );
}

function getPostId(url: string): string {
    const match = url.match(/status\/(\d+)/);
    return match ? match[1] : "";
}

function PublicationModal({ publication, isOpen, onClose }: { publication: Publication; isOpen: boolean; onClose: () => void }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
                <h2 className="mt-0 mb-0">{publication.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mt-1 mb-1">
                    {publication.authors}
                </p>
                <p className="italic text-neutral-600 dark:text-neutral-400 my-1">
                    {publication.journal} ({publication.year})
                </p>
                {publication.abstract && (
                    <div className="mt-3">
                        <h3 className="text-lg font-medium mb-1">Abstract</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mt-0">
                            {publication.abstract}
                        </p>
                    </div>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
                    <PaperButton doi={publication.doi} url={publication.url} />
                    {publication.codebase && <CodebaseButton codebase={publication.codebase} />}
                </div>
                <div className="mt-4">
                    {publication.xPost ? (
                        <div className="flex justify-center">
                            <Tweet id={getPostId(publication.xPost)} />
                        </div>
                    ) : publication.figure && (
                        <figure className="m-0">
                            <div className="relative w-full overflow-hidden rounded-lg bg-white p-0">
                                <Image
                                    src={publication.figure.url}
                                    alt={`Figure from ${publication.title}`}
                                    width={800}
                                    height={400}
                                    className="w-full h-auto object-contain"
                                    unoptimized={!publication.figure.isLocal}
                                />
                            </div>
                            {publication.figure.caption && (
                                <figcaption className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                                    {publication.figure.caption}
                                </figcaption>
                            )}
                        </figure>
                    )}
                </div>
            </div>
        </Modal>
    );
}

export function PublicationList({ publications, showImages = true }: PublicationListProps) {
    const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);

    return (
        <>
            <div className="space-y-12">
                {publications.map((pub, index) => (
                    <div key={index} className="group">
                        <div className="flex flex-col">
                            <button
                                onClick={() => setSelectedPublication(pub)}
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
                            </button>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <PaperButton doi={pub.doi} url={pub.url} />
                                {pub.codebase && <CodebaseButton codebase={pub.codebase} />}
                            </div>
                            {showImages && pub.figure && (
                                <div className="mt-4">
                                    <div className="relative w-full overflow-hidden rounded-lg bg-white p-0">
                                        <Image
                                            src={pub.figure.url}
                                            alt={`Figure from ${pub.title}`}
                                            width={800}
                                            height={400}
                                            className="w-full h-auto object-contain"
                                            unoptimized={!pub.figure.isLocal}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {selectedPublication && (
                <PublicationModal
                    publication={selectedPublication}
                    isOpen={true}
                    onClose={() => setSelectedPublication(null)}
                />
            )}
        </>
    );
} 