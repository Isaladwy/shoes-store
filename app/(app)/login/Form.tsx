import Logo from '@/components/navbar/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';

export default function Form() {
  const login = async (form: FormData) => {
    'use server';
  };
  return (
    <form action={login} className="flex flex-col gap-3 justify-center p-20">
      <Logo admin />
      <div className="space-y-2 w-full">
        <Label>Email</Label>
        <Input type="email" placeholder="islam@mail.com" name="email" />
      </div>
      <div className="space-y-2 w-full">
        <Label>Password</Label>
        <Input type="password" name="password" />
      </div>
      <Button type="submit">Log in</Button>
    </form>
  );
}
