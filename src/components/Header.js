'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
  ];

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <div className="font-bold text-xl">My Website</div>
      <nav className="flex gap-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded transition-all ${
                isActive
                  ? 'bg-blue-600 font-bold text-white'
                  : 'hover:bg-gray-700 text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}