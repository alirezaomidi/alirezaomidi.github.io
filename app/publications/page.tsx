import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa6";
import { publications } from "./publication-data";
import { socialLinks } from "app/config";

export const metadata: Metadata = {
    title: "Publications",
    description: "Academic Publications and Research Work",
};

export default function Publications() {
    return (
        <section>
            <div className="flex items-baseline justify-between mb-8">
                <h1 className="text-2xl font-medium tracking-tight">Publications</h1>
                <a
                    href={socialLinks.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:opacity-80"
                >
                    <FaGraduationCap className="text-lg" />
                    <span>Google Scholar</span>
                </a>
            </div>
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
                                    <span className="text-black dark:text-white font-medium tracking-tight">
                                        {pub.title}
                                    </span>
                                    <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                                        {pub.year}
                                    </span>
                                </div>
                                <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                                    {pub.authors}
                                </p>
                                <p className="text-neutral-600 dark:text-neutral-400 italic">
                                    {pub.journal}
                                </p>
                                {pub.figure && (
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
        </section>
    );
} 