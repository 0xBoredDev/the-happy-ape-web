import Navbar from 'components/layout/navbar';
import { ThemeModeScript } from 'flowbite-react';
import { ensureStartsWith } from 'lib/utils';
import { Happy_Monkey } from 'next/font/google';
import img from 'public/images/banner.avif';
import { ReactNode, Suspense } from 'react';
import './globals.css';

const happymonkey = Happy_Monkey({
  weight: '400',
  subsets: ['latin']
});

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite,
        description: 'Where happiness meets compassion!',
        image: img.src
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${happymonkey.className} bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white`}
      >
        <Suspense>
          <Navbar />
          <Suspense>
            <main>{children}</main>
          </Suspense>
        </Suspense>
      </body>
    </html>
  );
}
