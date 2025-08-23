import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  // prevent dark/light mismatch flash
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo {...SEO} />
      {mounted && <Component {...pageProps} />}
    </>
  );
}
