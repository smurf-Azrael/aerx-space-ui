import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../components/LandingPage/css/landing.css";
import { ThemeProvider } from "next-themes";
import { ChakraProvider } from "@chakra-ui/react";
import myTheme from "../lib/theme.js";
import { Provider } from 'react-redux';
import { store } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {

  
  return (
    <Provider store={store}>
    <ChakraProvider
                theme={myTheme}
            >
                <ThemeProvider attribute="class">
    <Component {...pageProps} />
    </ThemeProvider>
    </ChakraProvider>
    </Provider>
  ) 
}

export default MyApp
