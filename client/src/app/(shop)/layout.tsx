import Link from "next/link";
import type { Metadata } from "next";
import { Search, Heart, UserRound, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "SORA",
  description: "A modern clothing store.",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="bg-background sticky top-0 flex items-center gap-2 p-4.5 min-lg:px-6">
        <div className="flex w-full items-center gap-4">
          <p className="text-sm font-semibold uppercase">Men</p>
          <p className="text-sm font-semibold uppercase">Women</p>
        </div>

        <Link href="/" className="text-2xl font-bold tracking-widest">
          SORA
        </Link>

        <div className="flex w-full items-center justify-end gap-4">
          <button className="flex size-8 cursor-pointer items-center justify-center">
            <Search strokeWidth={1.5} />
          </button>
          <button className="flex size-8 cursor-pointer items-center justify-center">
            <Heart strokeWidth={1.5} />
          </button>
          <Link
            href="/auth"
            className="flex size-8 items-center justify-center"
          >
            <UserRound strokeWidth={1.5} />
          </Link>
          <button className="flex size-8 cursor-pointer items-center justify-center">
            <ShoppingBag strokeWidth={1.5} />
          </button>
        </div>
      </header>
      {children}
      <footer className="p-4.5 min-lg:px-6 min-lg:py-8">Footer</footer>
    </>
  );
}
