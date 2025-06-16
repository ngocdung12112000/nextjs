import '../(public)/globals.css';
import { redirect } from "next/navigation";
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function AuthenLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}

