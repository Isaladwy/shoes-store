import Link from 'next/link';
import React from 'react';
export default function Links() {
  return (
    <ul className="flex md:flex-row md:text-[14.5px] text-2xl flex-col items-center gap-4 text-neutral-700">
      {links.map((link) => (
        <Link href={link.route} key={link.label}>
          {link.label}
        </Link>
      ))}
    </ul>
  );
}

export const links = [
  {
    route: '/',
    label: 'Home',
  },
  {
    route: '/catalog',
    label: 'catalog',
  },
  {
    route: '/about',
    label: 'About us',
  },
];
