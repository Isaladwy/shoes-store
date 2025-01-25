import React from 'react';
import Logo from './Logo';
import Links from './Links';
import Search from './Search';
import Cart from './Cart';
import Menu from './Menu';

export default function Navbar() {
  return (
    <nav className="fixed z-[10] top-0 inset-x-0 p-3 border-b border-primary/10 bg-white">
      <div className="flex items-center justify-between py-2 ">
        <Logo />
        <ul className="hidden md:flex items-center gap-4 text-[14.5px] text-neutral-700">
          <Links />
        </ul>
        <div className="flex items-center gap-3">
          <div className="hidden md:inline">
            <Search />
          </div>
          <Cart />
          <Menu />
        </div>
      </div>
    </nav>
  );
}
