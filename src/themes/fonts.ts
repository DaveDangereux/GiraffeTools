import { Caveat, Roboto_Mono } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export { caveat, robotoMono };
