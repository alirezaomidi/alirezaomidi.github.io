'use client';

import { useEffect, useRef, useState } from 'react';
import './linkedin.css';

interface LinkedInPostProps {
  url: string;
  shareId?: string; // Optional: provide the share ID directly from LinkedIn's embed code
}

function LinkedInCard({ url }: { url: string }) {
  return (
    <div className="linkedin-fallback">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        <div className="linkedin-content">
          <div className="linkedin-header">
            <svg
              className="linkedin-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="linkedin-label">View on LinkedIn</span>
          </div>
          <p className="linkedin-text">Click to view the LinkedIn post</p>
        </div>
      </a>
    </div>
  );
}

/**
 * LinkedIn post component that embeds a LinkedIn post
 * Usage:
 *   <StaticLinkedIn url="https://www.linkedin.com/posts/..." />
 *   or with share ID:
 *   <StaticLinkedIn url="https://www.linkedin.com/posts/..." shareId="7399595387885379584" />
 *
 * To get the share ID: Click the three dots on the LinkedIn post > "Embed this post" >
 * Extract the ID from urn:li:share:{ID} in the embed code
 */
export function LinkedInComponent({ url, shareId }: LinkedInPostProps) {
  // Hooks run unconditionally — they used to sit inside `if (shareId)`, so the
  // hook count depended on a prop.
  const [showFallback, setShowFallback] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!shareId) return;

    timeoutRef.current = setTimeout(() => setShowFallback(true), 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [shareId]);

  const handleIframeLoad = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    // A frame refused by X-Frame-Options still fires `load` (on the error
    // document), and `onError` never fires — so probe for a real document
    // rather than trusting the event alone.
    let blocked = false;
    try {
      const doc = iframeRef.current?.contentDocument;
      blocked = doc !== null && doc !== undefined && doc.body?.childElementCount === 0;
    } catch {
      // Cross-origin access threw, which means a real document loaded.
      blocked = false;
    }
    setShowFallback(blocked);
  };

  if (!shareId) {
    return (
      <div className="linkedin-post my-6">
        <div className="flex justify-center">
          <div className="linkedin-container">
            <LinkedInCard url={url} />
          </div>
        </div>
      </div>
    );
  }

  const embedUrl = `https://www.linkedin.com/embed/feed/update/urn:li:share:${shareId}`;

  return (
    <div className="linkedin-post my-6">
      <div className="flex justify-center">
        <div className="linkedin-container">
          <iframe
            ref={iframeRef}
            src={embedUrl}
            height="764"
            width="504"
            frameBorder="0"
            allowFullScreen
            className="linkedin-embed"
            title="Embedded LinkedIn post"
            loading="lazy"
            onLoad={handleIframeLoad}
            onError={() => setShowFallback(true)}
            style={{ display: showFallback ? 'none' : 'block' }}
          />
          {showFallback && <LinkedInCard url={url} />}
        </div>
      </div>
    </div>
  );
}
