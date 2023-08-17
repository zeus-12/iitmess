import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
}
