import React from 'react';
import Logo from './Logo';
import Links from './Links';

export default function Navbar() {
  return (
    <nav className="fixed z-[10] top-0 inset-x-0 py-3 border-b border-primary/10 bg-white">
      <div className="flex items-center justify-between py-2 ">
        <Logo />
        <ul className="hidden md:flex items-center gap-4 text-[14.5px] text-neutral-700">
          <Links />
        </ul>
      </div>
    </nav>
  );
}

