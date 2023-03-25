import type { AppProps } from "next/app";
import { Background } from "src/components/utils/background/Background";
import { LanguageProvider } from "src/utils/contexts/languageContext/LanguageProvider";
import { Navigation } from "../src/components/sections/navigation/organisms/navigation/Navigation";
import "../styles/main.scss";
import "../styles/normalize.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <header>
        <Navigation />
      </header>
      <Background />
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
