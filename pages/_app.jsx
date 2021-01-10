// import App from 'next/app'
import React from 'react';
import '../src/styles/container/home.scss';
import '../src/styles/container/contact.scss';
import '../src/styles/components/animated-gallery.scss';
import '../src/styles/components/app.scss';
import '../src/styles/components/bidet.scss';
import '../src/styles/components/cardProduct.scss';
import '../src/styles/components/contacts-list.scss';
import '../src/styles/components/contact-map.scss';
import '../src/styles/components/contact-form.scss';
import '../src/styles/components/footer.scss';
import '../src/styles/components/gallery.scss';
import '../src/styles/components/header.scss';
import '../src/styles/components/hero.scss';
import '../src/styles/components/listOfProduct.scss';
import '../src/styles/components/singleProduct.scss';
import '../src/styles/components/schedule.scss';
import '../src/styles/components/title.scss';
import '../src/styles/components/youtube-video.scss';
import Layout from '../src/components/Layout';
import AppContext from '../src/context/AppContext';
import useInitialState from '../src/hooks/useInitialState'

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState()
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AppContext.Provider value={initialState}><Layout><Component {...pageProps} /></Layout></AppContext.Provider>
}

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
