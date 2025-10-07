import Link from "next/link";

function FooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="flex flex-col gap-0.5">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="text-xs uppercase hover:underline">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function FooterSection({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      <h2 className="font-sora font-medium uppercase">{title}</h2>
      <FooterLinks links={links} />
    </div>
  );
}

export default function Footer() {
  const sections = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/pages/about" },
        { label: "Careers", href: "/pages/careers" },
        { label: "FAQ", href: "/pages/faq" },
      ],
    },
    {
      title: "Policies",
      links: [
        { label: "Privacy", href: "/pages/privacy" },
        { label: "Terms & Conditions", href: "/pages/terms" },
        { label: "Shipping & Returns", href: "/pages/shipping-returns" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Facebook", href: "https://facebook.com" },
        { label: "TikTok", href: "https://tiktok.com" },
        { label: "X", href: "https://x.com" },
      ],
    },
  ];

  return (
    <footer className="p-4.5 min-lg:px-6 min-lg:py-8">
      <div className="flex flex-col gap-4 min-sm:flex-row min-sm:justify-between">
        {sections.map((section) => (
          <FooterSection
            title={section.title}
            links={section.links}
            key={section.title}
          />
        ))}
      </div>

      <div className="mt-4 flex items-center gap-1.5 min-lg:mt-8">
        <p className="text-xs">© 2025 SORA, Inc.</p>
        <div className="text-sm">|</div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/JacksonJ97/clothing-store"
          className="text-xs hover:underline"
        >
          Source Code
        </Link>
      </div>
    </footer>
  );
}
