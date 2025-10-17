import Link from "next/link";

export default function CollectionsPage() {
  return (
    <main>
      <h2>Collections</h2>
      <Link href="/collections/men">Shop Mens</Link>
      <Link href="/collections/women">Shop Womens</Link>
    </main>
  );
}
