import Link from "next/link";

const sections = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/pages/about", isExternal: false },
      { label: "Careers", href: "/pages/careers", isExternal: false },
      { label: "FAQ", href: "/pages/faq", isExternal: false },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Privacy", href: "/pages/privacy", isExternal: false },
      { label: "Terms & Conditions", href: "/pages/terms", isExternal: false },
      {
        label: "Shipping & Returns",
        href: "/pages/shipping-returns",
        isExternal: false,
      },
    ],
  },
  {
    title: "Follow Us",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com",
        isExternal: true,
      },
      { label: "Facebook", href: "https://www.facebook.com", isExternal: true },
      { label: "TikTok", href: "https://www.tiktok.com", isExternal: true },
      { label: "X", href: "https://www.x.com", isExternal: true },
    ],
  },
];

function FooterSection({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; isExternal: boolean }[];
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      <h2 className="font-sora font-medium uppercase">{title}</h2>
      <ul className="flex flex-col gap-0.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="text-xs uppercase hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="p-4.5 sm:pt-8 lg:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        {sections.map((section) => (
          <FooterSection
            title={section.title}
            links={section.links}
            key={section.title}
          />
        ))}
      </div>

      <div className="mt-4.5 flex items-center gap-1.5 sm:mt-8">
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
