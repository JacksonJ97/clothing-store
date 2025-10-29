export default async function CategoryPage({
  params,
}: {
  params: Promise<{ collection: string; category: string }>;
}) {
  const { collection, category } = await params;

  return (
    <>
      <h2>
        List of all {collection} - {category} products
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <p>Product 1</p>
        <p>Product 2</p>
        <p>Product 3</p>
        <p>Product 4</p>
        <p>Product 5</p>
        <p>Product 6</p>
        <p>Product 7</p>
        <p>Product 8</p>
        <p>Product 9</p>
        <p>Product 10</p>
      </div>
    </>
  );
}
