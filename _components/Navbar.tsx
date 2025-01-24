import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed z-[10] top-0 inset-x-0 py-3 border-b border-primary/10 bg-white">
      <div className="flex items-center justify-between py-2 "></div>
    </nav>
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
