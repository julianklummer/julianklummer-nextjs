import type { AppProps } from "next/app";
import { Navigation } from "../src/components/organisms/navigation/Navigation";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Component {...pageProps} />
    </div>
  );
}
