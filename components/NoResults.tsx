import React from 'react';
import { PiSneaker } from 'react-icons/pi';

export default function NoResults() {
  return (
    <div className="w-full tex-3xl font-semibold flex items-center justify-center flex-col border border-red-400">
      <span>No Result</span>
      <PiSneaker />
    </div>
  );
}
