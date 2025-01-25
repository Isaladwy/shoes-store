import React from 'react';
import { Input } from '../ui/input';

export default function Search() {
  const handleSearch = async (FormData: FormData) => {
    'use server';
    {console.log(FormData)
    }
  };
  return (
    <div>
      <form action={handleSearch}>
        <Input
          type="search"
          name="search"
          placeholder="Search..."
          className="hidden md:inline w-[300px]"
        />
      </form>
    </div>
  );
}
