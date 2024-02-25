import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="https://docs.material-tailwind.com/favicon.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://docs.material-tailwind.com/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://docs.material-tailwind.com/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://docs.material-tailwind.com/favicon.png"
        />
        <link
          rel="manifest"
          href="https://docs.material-tailwind.com/img/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="https://docs.material-tailwind.com/img/safari-pinned-tab.svg"
          color="#020617"
        />
        <meta name="msapplication-TileColor" content="#020617" />
        <meta name="theme-color" content="#ffffff" />

       
      </Head>
      <body className="root">
        {" "}
        
        <Main />
        <NextScript />
        
      </body>
    </Html>
  );
}
