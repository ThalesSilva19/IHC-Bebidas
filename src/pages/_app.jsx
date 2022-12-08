import React from 'react'
import GlobalStyle from "../styles/global";
import { ThemeProvider } from 'styled-components'
import VLibras from 'vlibras-nextjs';
import { COLORS } from '../styles/colors'
import ModalPopup from '../components/modal_popup';
const theme = {
  colors: COLORS
}

function MyApp({ Component, pageProps }) {

  React.useEffect(function () {
    
  }, []);

  return (
    <>
      <ModalPopup/>
      <VLibras forceOnload />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}


export default MyApp
