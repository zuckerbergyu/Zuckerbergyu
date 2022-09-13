import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { QueryClient, QueryClientProvider } from "react-query";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const queryClient = new QueryClient();

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Box sx={styles.background} />
          <Box sx={styles.component}>
            <Component {...pageProps} />
          </Box>
        </ThemeProvider>
      </QueryClientProvider>
    </CacheProvider>
  );
}

const styles = {
  background: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: {
      xs: "none",
      sm: 'url("https://bckheqsoycpxchnkzoea.supabase.co/storage/v1/object/public/service-resources/background/fisherman-4343089_1280.png")',
    },
    backgroundColor: {
      xs: "none",
      sm: "rgba(41, 44, 54, 0.985)",
    },
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  component: {
    maxWidth: { sm: 440, xs: "auto" },
    width: "100%",
    height: "100%",
    bottom: 0,
    margin: {
      sm: "auto",
      md: "auto",
      lg: "0 0 0 calc(50vw - 1px)",
    },
    position: { xs: "relative", sm: "relative" },
  },
};
