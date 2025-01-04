"use client";

import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { cn } from "app/lib/utils";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

export function Modal({ isOpen, onClose, children, className }: ModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm overflow-y-auto"
            onClick={() => onClose()}
        >
            <div className="flex items-start justify-center min-h-screen p-4">
                <div
                    ref={modalRef}
                    onClick={(e) => e.stopPropagation()}
                    className={cn(
                        "relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-lg shadow-lg my-8",
                        className
                    )}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                    >
                        <IoClose className="w-6 h-6" />
                    </button>
                    <div className="p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
} 