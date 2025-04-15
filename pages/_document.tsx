import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>BisiBeleBot</title> {/* Updated title */}
        <meta
          name="description"
          content="Discover personalized recipes inspired by Karnataka cuisine."
        />
        <link rel="icon" href="/favicon.png" /> {/* Added favicon */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
