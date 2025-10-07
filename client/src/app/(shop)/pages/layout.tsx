export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-off-white min-h-screen p-4.5 min-md:py-12">
      {children}
    </main>
  );
}
