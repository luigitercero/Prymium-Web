// import App from 'next/app'
import React,{useEffect} from 'react';
import { useRouter } from 'next/router';
import { Workbox } from "workbox-window";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../src/styles/globals/root_vars.scss';
import '../src/styles/container/layout.scss';
import '../src/styles/container/home.scss';
import '../src/styles/container/contact.scss';
import '../src/styles/components/animated-gallery.scss';
import '../src/styles/components/bidet.scss';
import '../src/styles/components/cardProduct.scss';
import '../src/styles/components/contacts-list.scss';
import '../src/styles/components/contact-form.scss';
import '../src/styles/components/footer.scss';
import '../src/styles/components/gallery.scss';
import '../src/styles/components/header.scss';
import '../src/styles/components/hero.scss';
import '../src/styles/components/singleProduct.scss';
import '../src/styles/components/schedule.scss';
import '../src/styles/components/youtube-video.scss';
import TagManager from 'react-gtm-module'
import Layout from '@components/Layout';

const tagManagerArgs = {
  id: 'GTM-NKSQN8N'
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    TagManager.initialize({ gtmId: tagManagerArgs.id });
    if (
      !("serviceWorker" in navigator) ||
      process.env.NODE_ENV !== "production"
    ) {
      console.warn("Progressive Web App support is disabled");
      return;
    }

    const wb = new Workbox("sw.js", { scope: "/" });
    wb.register();
  }, []);

  return <CustomLayout pathname={router.pathname}><Component {...pageProps} /></CustomLayout>
}

const CustomLayout = ({ pathname, children }) => (
  <>
    {
      pathname === "/_error" ? <>{children}</>
        : (
          <Layout>{children}</Layout>
        )
    }
  </>
)
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp