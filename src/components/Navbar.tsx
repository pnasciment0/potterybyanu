'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white h-[127px] p-4">
      <div className="flex justify-between items-center h-full">
        {/* Pottery by Anu */}
        <div className="text-xl font-semibold">Pottery by Anu</div>

        {/* Links */}
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className={pathname === '/' ? 'underline' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/gallery" className={pathname === '/gallery' ? 'underline' : ''}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/shop" className={pathname === '/shop' ? 'underline' : ''}>
              Shop
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
