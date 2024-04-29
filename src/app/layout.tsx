import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/600.css";
import "@fontsource/caveat/700.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Giraffe Tools",
  description:
    "A simple tool for selecting and collating words to describe immediate felt experience in compassionate ways",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
