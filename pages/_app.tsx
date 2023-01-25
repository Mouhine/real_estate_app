import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { SearchProvider } from "../context";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </Layout>
  );
}
