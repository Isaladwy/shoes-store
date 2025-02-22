'use server';
import { sanity } from '@/sanity/lib/sanity';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export type Admin = { email: string; password: string };

export async function handleLogin(admin: Admin) {
  const token = jwt.sign(admin, sKey);
  (await cookies()).set('admin_token', token);
}

export async function handleAdmin(admin: Admin) {
  const query = `count(*[_type=="admin" && password=="${admin.password}" && email=="${admin.email}"] > 0)`;
  const res = await sanity.fetch(query);
  return res as boolean;
}
