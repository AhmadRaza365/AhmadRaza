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
      <Footer />
    </>
  );
}

export default MyApp;
