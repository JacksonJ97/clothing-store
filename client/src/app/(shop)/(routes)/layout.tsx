import type { Metadata } from "next";
import Header from "@/app/(shop)/components/Header";
import Footer from "@/app/(shop)/components/Footer";

export const metadata: Metadata = {
  title: "SORA",
  description: "A modern clothing store.",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
