
import './globals.css';
import Navbar from '../../components/Navbar';
import Footer from '@/src/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}

