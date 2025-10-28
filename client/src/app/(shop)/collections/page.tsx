import Link from "next/link";

export default function CollectionsPage() {
  return (
    <main className="p-4.5 lg:px-6">
      <h2>Collections</h2>
      <Link href="/collections/men">Shop Mens</Link>
      <Link href="/collections/women">Shop Womens</Link>
    </main>
  );
}
