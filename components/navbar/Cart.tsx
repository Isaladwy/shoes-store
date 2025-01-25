import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export default function Cart() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative"></div>
      </SheetTrigger>
      <SheetContent>Hello</SheetContent>
    </Sheet>
  );
}
