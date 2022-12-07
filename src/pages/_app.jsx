import GlobalStyle from "../styles/global";
import { ThemeProvider } from 'styled-components'
import VLibras from 'vlibras-nextjs';
import { COLORS } from '../styles/colors'
const theme = {
  colors: COLORS
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <VLibras forceOnload />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}


export default MyApp
