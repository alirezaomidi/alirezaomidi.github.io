import React from "react";
import type { Metadata } from "next";
import { FaGraduationCap, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { publications } from "./publication-data";
import { socialLinks } from "app/config";
import { PublicationList } from "app/components/publication-list";

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
                    <FaArrowUpRightFromSquare className="text-xs" />
                </a>
            </div>
            <PublicationList publications={publications} />
            <div className="mt-12">
                <a
                    href={socialLinks.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 dark:text-neutral-400 hover:opacity-80 no-underline inline-flex items-center gap-2"
                >
                    View All Publications on Google Scholar <FaArrowUpRightFromSquare className="text-xs" />
                </a>
            </div>
        </section>
    );
} 