import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ── Primary Meta Tags ── */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Shiva Krishna Reddy Burra – Full-Stack Developer and AI Enthusiast from KITSW (Kakatiya Institute of Technology and Science, Warangal). Roll No B22AI067. Explore my portfolio of web development and AI projects."
        />
        <meta
          name="keywords"
          content="Shiva Krishna Reddy Burra, shivakrishnareddyburra, shivakrishna, Shiva Krishna, Reddy Burra, KITSW, B22AI067, b22ai067, Kakatiya Institute of Technology and Science Warangal, full-stack developer, AI enthusiast, web developer, portfolio, Next.js, React, machine learning, Warangal, Telangana"
        />
        <meta name="author" content="Shiva Krishna Reddy Burra" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://www.shivakrishnareddyburra.me/" />

        {/* ── Open Graph / Facebook ── */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shivakrishnareddyburra.me/" />
        <meta property="og:site_name" content="Shiva Krishna Reddy Burra – Portfolio" />
        <meta property="og:title" content="Shiva Krishna Reddy Burra | Full-Stack Developer & AI Enthusiast" />
        <meta
          property="og:description"
          content="Portfolio of Shiva Krishna Reddy Burra, Full-Stack Developer and AI Enthusiast from KITSW (B22AI067). Explore projects, skills, and work experience."
        />
        <meta property="og:image" content="https://www.shivakrishnareddyburra.me/og-image.png" />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:alt" content="Shiva Krishna Reddy Burra – Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.shivakrishnareddyburra.me/" />
        <meta name="twitter:title" content="Shiva Krishna Reddy Burra | Full-Stack Developer & AI Enthusiast" />
        <meta
          name="twitter:description"
          content="Portfolio of Shiva Krishna Reddy Burra, Full-Stack Developer and AI Enthusiast from KITSW (B22AI067)."
        />
        <meta name="twitter:image" content="https://www.shivakrishnareddyburra.me/og-image.png" />

        {/* ── Structured Data: Person (JSON-LD) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shiva Krishna Reddy Burra",
              "alternateName": ["shivakrishnareddyburra", "Shiva Krishna", "B22AI067"],
              "url": "https://www.shivakrishnareddyburra.me/",
              "image": "https://www.shivakrishnareddyburra.me/og-image.png",
              "description": "Full-Stack Developer and AI Enthusiast. Student at Kakatiya Institute of Technology and Science, Warangal (KITSW), Roll No B22AI067.",
              "jobTitle": "Full-Stack Developer & AI Enthusiast",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Kakatiya Institute of Technology and Science, Warangal",
                "alternateName": "KITSW",
                "url": "https://www.kitsw.ac.in/"
              },
              "sameAs": [
                "https://github.com/shivakrishnareddyburra",
                "https://linkedin.com/in/shivakrishnareddyburra"
              ],
              "knowsAbout": [
                "Full-Stack Development",
                "Artificial Intelligence",
                "Web Development",
                "React",
                "Next.js",
                "Machine Learning"
              ]
            })
          }}
        />

        {/* ── Structured Data: WebSite (enables Sitelinks Search Box) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Shiva Krishna Reddy Burra – Portfolio",
              "url": "https://www.shivakrishnareddyburra.me/",
              "description": "Portfolio of Shiva Krishna Reddy Burra, Full-Stack Developer and AI Enthusiast from KITSW (B22AI067).",
              "author": {
                "@type": "Person",
                "name": "Shiva Krishna Reddy Burra"
              }
            })
          }}
        />

        {/* ── Fonts ── */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />

        {/* ── Favicons & PWA ── */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4A6CF7" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}