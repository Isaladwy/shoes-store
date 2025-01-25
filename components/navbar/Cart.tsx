import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { RiShoppingBagLine } from 'react-icons/ri';

export default function Cart() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative">
          <RiShoppingBagLine className="text-3xl text-zinc-800" />
          <div className="text-white absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 bg-primary rounded-full text-wrap w-4 h-4 text-center text-sm flex items-center justify-center">0</div>
        </div>
      </SheetTrigger>
      <SheetContent className='py-20 px-8 flex flex-col justify-between'>Hello</SheetContent>
    </Sheet>
  );
}
