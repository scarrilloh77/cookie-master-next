import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { AppContext, AppProps } from 'next/app';
import { customTheme, darkTheme, lightTheme } from '../themes';
import '../styles/globals.css';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

interface Props extends AppProps {
  theme: string;
}

function MyApp({ Component, pageProps, theme = 'dark' }: Props) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  // No se ejecuta en el server:
  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light';
    const selectedTheme =
      cookieTheme === 'light'
        ? lightTheme
        : cookieTheme === 'dark'
        ? darkTheme
        : customTheme;

    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// Al usar initialProps se pierden las optimizaciones estaticas: getStaticPaths, getStaticProps, etc... Por lo tanto todas las pages hijas de _app.js van a ser renderizadas del lado del server!!! (PROBLEMA!!! Ya que al demandar varias veces una page, el server va a tener que trabajar demasiado.)
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const { theme } = appContext.ctx.req
//     ? (appContext.ctx.req as any).cookies
//     : { theme: 'light' };
//   const validTheme = ['light', 'dark', 'custom'];

//   return {
//     theme: validTheme.includes(theme) ? theme : 'dark',
//   };
// };

export default MyApp;
