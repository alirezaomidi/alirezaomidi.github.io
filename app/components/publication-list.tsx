import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Publication } from "app/publications/publication-data";

interface PublicationListProps {
    publications: Publication[];
    showImages?: boolean;
}

export function PublicationList({ publications, showImages = true }: PublicationListProps) {
    return (
        <div className="space-y-12">
            {publications.map((pub, index) => (
                <div key={index} className="group">
                    <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-opacity duration-200 hover:opacity-80"
                    >
                        <div className="flex flex-col">
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
                                {pub.doi && (
                                    <div className="text-sm flex items-center gap-2">
                                        <span className="font-mono">https://doi.org/{pub.doi}</span>
                                        <FaArrowUpRightFromSquare className="text-xs" />
                                    </div>
                                )}
                            </div>
                            {showImages && pub.figure && (
                                <div className="mt-4">
                                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-white">
                                        <Image
                                            src={pub.figure.url}
                                            alt={`Figure from ${pub.title}`}
                                            fill
                                            className="object-contain"
                                            sizes="(min-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
} 