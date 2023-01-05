import type { AppProps } from "next/app";
import { Background } from "src/components/utils/background/Background";
import { Navigation } from "../src/components/organisms/navigation/Navigation";
import "../styles/normalize.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Background />
      <Component {...pageProps} />
    </>
  );
}
