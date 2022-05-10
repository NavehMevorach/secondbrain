import './../styles/main.scss'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="my-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-0N09DNHH6H"`}
      />
      <Script
        id="my-second-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0N09DNHH6H', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
