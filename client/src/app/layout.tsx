import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  fallback: ["Poppins", "Avenir", "Helvetica Neue", "Arial", "sans-serif"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  fallback: ["Inter", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
