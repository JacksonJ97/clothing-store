import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clothing Store",
  description: "A modern clothing store.",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </>
  );
}
