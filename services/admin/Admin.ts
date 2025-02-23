'use server';
import { sanity } from '@/sanity/lib/sanity';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
const sKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY || '';

export type Admin = { email: string; password: string };

export async function handleLogin(admin: Admin) {
  const token = jwt.sign(admin, sKey); 
  (await cookies()).set('admin_token', token);
  redirect('/admin')
}

export async function handleAdmin(admin: Admin) {
  const query = `*[_type=="admin" && password=="${admin.password}" && email=="${admin.email}"][0]`
  const res = await sanity.fetch(query);
  console.log(res);
  return !!res as boolean;
}
