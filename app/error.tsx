"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="prose prose-neutral dark:prose-invert">
      <p>Something went wrong loading this page.</p>
      <button
        type="button"
        onClick={reset}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:opacity-80"
      >
        Try again
      </button>
    </div>
  );
}
