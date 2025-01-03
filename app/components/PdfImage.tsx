'use client';

import { useEffect, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import Image from 'next/image';

interface PdfImageProps {
    pdfUrl: string;
    alt: string;
}

export default function PdfImage({ pdfUrl, alt }: PdfImageProps) {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const loadPdf = async () => {
            try {
                // Dynamically import the worker
                const worker = await import('pdfjs-dist/build/pdf.worker.mjs');
                pdfjsLib.GlobalWorkerOptions.workerSrc = worker.default;

                console.log('Loading PDF from:', pdfUrl);

                // Load the PDF file
                const loadingTask = pdfjsLib.getDocument(pdfUrl);
                const pdf = await loadingTask.promise;
                console.log('PDF loaded, pages:', pdf.numPages);

                // Get the first page
                const page = await pdf.getPage(1);
                console.log('Page loaded');

                // Set scale and viewport
                const scale = 2;
                const viewport = page.getViewport({ scale });

                // Prepare canvas
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                if (!context) {
                    throw new Error('Could not get canvas context');
                }

                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Render PDF page to canvas
                console.log('Starting render');
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };

                await page.render(renderContext).promise;
                console.log('Render complete');

                // Convert canvas to image data URL
                const imageData = canvas.toDataURL('image/png');
                setImageSrc(imageData);

            } catch (error) {
                console.error('Error loading PDF:', error);
                setError(error instanceof Error ? error.message : 'Failed to load PDF');
            }
        };

        loadPdf();
    }, [pdfUrl]);

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    if (!imageSrc) {
        return <div className="flex justify-center items-center h-48 bg-gray-100 rounded-lg">
            <div className="animate-pulse">Loading PDF...</div>
        </div>;
    }

    return (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
            <Image
                src={imageSrc}
                alt={alt}
                fill
                className="object-contain"
                sizes="(min-width: 768px) 100vw, 50vw"
            />
        </div>
    );
} 