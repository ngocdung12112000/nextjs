'use client';
import { signIn } from 'next-auth/react';

export default function Login() {
  const handleLogin = async (e: any) => {
    e.preventDefault();
    await signIn('credentials', {
      username: e.target.username.value,
      password: e.target.password.value,
      callbackUrl: '/',
    });
  };

  return (
    <form onSubmit={handleLogin} className="p-4">
      <input name="username" placeholder="Username" className="block mb-2" />
      <input name="password" type="password" placeholder="Password" className="block mb-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
    </form>
  );
}
