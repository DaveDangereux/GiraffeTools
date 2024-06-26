import { caveat, robotoMono } from "@/fonts";
import { ThemeModeContextProvider } from "@/context/ThemeModeContext";
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

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
    <html lang="en" className={`${caveat.className} ${robotoMono.className}`}>
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <ThemeModeContextProvider>{children}</ThemeModeContextProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
