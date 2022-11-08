import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Script
        src="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap"
        rel="stylesheet"
      ></Script>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-B0RCDDLJEK"
      ></Script>
      <Script strategy="lazyOnload" id="googleAnalytics">
        {`
     window.dataLayer = window.dataLayer || [];
     function gtag() {
       dataLayer.push(arguments);
     }
     gtag("js", new Date());

     gtag("config", "G-B0RCDDLJEK"); 
    `}
      </Script>
      <Script id="hotjarScript" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3238453,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}  
      </Script>
      <Footer />
    </>
  );
}

export default MyApp;
