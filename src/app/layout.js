import "./globals.css";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata = {
  title: "Indira Sowy",
  description:
    "Indira Sowy is a software engineer and designer, and a UBC Cognitive Systems graduate. Previously @ Meta and Salesforce",
};

// Runs before paint so the saved or system theme applies without a flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${hankenGrotesk.variable} ${instrumentSerif.variable} antialiased font-sans`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
