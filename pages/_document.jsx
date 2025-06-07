import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio of Shiva Krishna Reddy Burra, a Full-Stack Developer and AI Enthusiast" />
        <meta name="keywords" content="portfolio, full-stack developer, AI, web development, Shiva Krishna Reddy Burra, shiva, krishna, reddy, burra," />
        <meta name="author" content="Shiva Krishna Reddy Burra" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
       <link rel="icon" href="/favicon.ico" />
       <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
       <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
       <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
       <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}