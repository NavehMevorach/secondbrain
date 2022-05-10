import './../styles/main.scss'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="my-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-192315689-3"`}
      />
      <Script
        id="my-second-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-192315689-3');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
