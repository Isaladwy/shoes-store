'use client';
import { Button } from '@/components/ui/button';
import React, { useEffect, useRef } from 'react';
import Confetti from 'react-confetti-boom';

export default function Wrapper() {
  const called = useRef(false);
  useEffect(() => {
    if (called.current === false) {
      called.current = true;
    }
  }, []);
  return (
    <div className="h-screen overflow-hidden flex justify-center items-center font-black text-6xl ">
      <Confetti mode="fall" particleCount={300} />
      <span>PAYMENT COMPLETED!</span>
      <Button>GO TO HOME PAGE</Button>
    </div>
  );
}
