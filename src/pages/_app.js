

import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';
import Header from '../components/Header';

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )

}

export default appWithTranslation(App);