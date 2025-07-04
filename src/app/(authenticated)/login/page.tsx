'use client';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Login() {
  const handleLogin = async (e: any) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      username: e.target.username.value,
      password: e.target.password.value,
      redirect: false,
    });

    if (res?.error) {
      alert("Invalid credentials");
    } else {
      redirect('/admin');
    }
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw', background: 'linear-gradient(90deg,rgba(41, 48, 71, 1) 0%, rgba(125, 125, 125, 1) 50%, rgba(255, 255, 255, 1) 100%)' }}>
      <form onSubmit={handleLogin} className="p-4" 
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  display: 'flex', flexDirection: 'column', gap: '10px' ,
                  alignItems: 'center', justifyContent: 'center',
                  width: '350px', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px'
                }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>NextJS App Login</h1>
        <input name="username" type='text' placeholder="Username" 
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input name="password" type="password" placeholder="Password" 
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
