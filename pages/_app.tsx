import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Counter } from "../components/organisms";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Counter initialValue={5} />
  );
}
