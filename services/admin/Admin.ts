'use server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const sKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY || '';
type Admin = { email: string; password: string };

export async function handleLogin(admin: Admin) {
  const token = jwt.sign(admin, sKey);
  (await cookies()).set('admin_token', token);
}
