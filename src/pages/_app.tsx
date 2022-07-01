import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import ProductProvider from '../context/ProductProvider';
import GlobalStyles from '../styles/global-styles';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ProductProvider >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
        <GlobalStyles />
      </ProductProvider>
    </ThemeProvider>
  );
}

export default MyApp;
