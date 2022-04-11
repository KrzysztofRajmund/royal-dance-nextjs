import type { AppProps } from "next/app";
import "../styles/main.scss";
import Root from "./root";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Root>
      <Component {...pageProps} />
    </Root>
  );
}

export default MyApp;
