import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
});

export const metadata = {
  title: "Indira Sowy",
  description: "Indira Sowy's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.variable} antialiased font-sans`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
