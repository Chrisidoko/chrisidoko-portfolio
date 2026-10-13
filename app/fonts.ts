import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";

export const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "800"],
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
});
