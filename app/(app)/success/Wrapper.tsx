'use client';
import { Button } from '@/components/ui/button';
import { updatePurchase } from '@/services/product/purchase';
import { redirect } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import Confetti from 'react-confetti-boom';

export default function Wrapper() {
  const called = useRef(false);
  useEffect(() => {
    if (called.current === false) {
      updatePurchase();
      called.current = true;
    }
  }, []);
  return (
    <div className="h-screen overflow-hidden flex flex-col justify-center items-center font-black text-6xl ">
      <Confetti mode="fall" particleCount={300} />
      <span>PAYMENT COMPLETED!</span>
      <Button onClick={() => redirect('/')}>GO TO HOME PAGE</Button>
    </div>
  );
}
