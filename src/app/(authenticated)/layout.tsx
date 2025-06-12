
import './globals.css';
import Navbar from '../../components/Navbar';
import { redirect } from "next/navigation";
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  console.log("Session:", session);

  if (!session) {
    redirect("/login");
  }

  return (
    <html lang="en">
      <body>
         <Navbar />
        {children}
      </body>
    </html>
  );
}

