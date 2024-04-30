import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeModeContextProvider } from "../context/ThemeModeContext";

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
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <ThemeModeContextProvider>{children}</ThemeModeContextProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
