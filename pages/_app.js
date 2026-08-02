import '../styles/globals.css'
import { ThemeProvider } from 'styled-components';
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from '../components/GoogleAnalytics';

const theme = {
  colors: {
    background: '#ffffff',
    primary: 'pink'
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider theme={theme} >
      <Component {...pageProps} />
    </ThemeProvider>
    <GoogleAnalytics />
    <SpeedInsights />
    <Analytics />
    </>
  )
}

export default MyApp
