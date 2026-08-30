import { getTweet } from 'react-tweet/api';
import { Suspense } from 'react';
import {
  TweetSkeleton,
  EmbeddedTweet,
  TweetNotFound,
  type TweetProps,
} from 'react-tweet';
import './tweet.css';

const TweetContent = async ({ id, components, onError }: TweetProps) => {
  let error: unknown;
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          error = onError(err);
        } else {
          console.error(err);
          error = err;
        }
      })
    : undefined;

  if (!tweet) {
    // Fail the production build rather than silently shipping a permanent
    // "Tweet not found" card when X rate-limits or blocks the CI runner.
    if (process.env.NODE_ENV === "production" && !onError) {
      throw new Error(
        `Failed to fetch tweet ${id} at build time. ` +
          `Re-run the build, or remove the embed if the tweet is gone. ` +
          `Cause: ${error instanceof Error ? error.message : String(error)}`
      );
    }
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={error} />;
  }

  return <EmbeddedTweet tweet={tweet} components={components} />;
};

export const ReactTweet = (props: TweetProps) => <TweetContent {...props} />;

export async function TweetComponent({ id }: { id: string }) {
  return (
    <div className="tweet my-6">
      <div className={`flex justify-center`}>
        {/* <Suspense fallback={<TweetSkeleton />}> */}
        <ReactTweet id={id} />
        {/* </Suspense> */}
      </div>
    </div>
  );
}