import Link from 'next/link';
import { brand } from '@/config/brand';

const FOOTER_LINKS = {
  Product: [
    { label: 'Experiences', href: '/experiences' },
    { label: 'Categories', href: '/categories' },
    { label: 'Farm Weekends', href: '/experiences?category=farming' },
    { label: 'Search', href: '/search' },
  ],
  Hosts: [
    { label: 'Become a Host', href: '/become-host' },
    { label: 'Host Dashboard', href: '/host/dashboard' },
    { label: 'Farmer Dashboard', href: '/farmer/dashboard' },
    { label: 'Pricing', href: '#pricing' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Press', href: '/press' },
  ],
  Support: [
    { label: 'Help Center', href: '/support' },
    { label: 'Safety', href: '/safety' },
    { label: 'Terms', href: '/terms' },
    { label: 'Privacy', href: '/privacy' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20 py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="gradient-bg flex h-9 w-9 items-center justify-center rounded-xl">
                <span className="text-lg font-bold text-white">G</span>
              </div>
              <span className="text-xl font-bold">{brand.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">
              {brand.description}
            </p>
            <p className="mt-4 text-sm text-muted">
              {brand.support}
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold">{title}</h4>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {Object.entries(brand.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm capitalize text-muted transition-colors hover:text-foreground"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
