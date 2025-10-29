export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className="p-4.5 lg:px-6">{children}</main>;
}
