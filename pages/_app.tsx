import type { AppProps } from "next/app";
import { Background } from "src/components/utils/background/Background";
import "../styles/main.scss";
import "../styles/normalize.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Background />
      <Component {...pageProps} />
    </>
  );
}
