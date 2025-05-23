import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio of Shiva Krishna Reddy Burra, a Full-Stack Developer and AI Enthusiast" />
        <meta name="keywords" content="portfolio, full-stack developer, AI, web development, Shiva Krishna Reddy Burra" />
        <meta name="author" content="Shiva Krishna Reddy Burra" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}