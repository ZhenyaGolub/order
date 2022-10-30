import 'normalize.css/normalize.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Тренажёр "Порядок"</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
