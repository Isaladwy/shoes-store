import React from 'react';
import Logo from '../navbar/Logo';
import { links } from '../navbar/Links';
import Link from 'next/link';
import { LuFacebook } from 'react-icons/lu';
import { FaInstagram } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';

export default function Footer() {
  return (
    <div className="fixed bottom-0 md:grid md:grid-cols-4 flex flex-col gap-4 border-t border-primary/10 py-12 items-start">
      <Logo />
      <div className="space-y-4">
        <span className="font-semibold text-xl ">Links</span>
        <ul className="space-y-4">
          {links.map((link) => (
            <Link key={link.route} href={link.route}>
              <li>{link.label}</li>
            </Link>
          ))}
          <Link href="/admin" className="underline">
            <li>Admin</li>
          </Link>
        </ul>
      </div>
      <div className="space-y-4">
        <span className="font-semibold text-xl">LOCATION</span>
        <div>
          <p>Miami</p>
          <p>Alexandria</p>
        </div>
        <div>
          <p>info@shoeshop.com</p>
          <p>+2010101010101</p>
        </div>
      </div>
      <div className="space-y-4">
        <span className="font-semibold text-xl">OUR SOCIAL MEDIAS</span>
        <ul className="flex items-center gap-3 text-3xl">
          <LuFacebook />
          <FaInstagram />
          <MdMailOutline />
        </ul>
      </div>
    </div>
  );
}
