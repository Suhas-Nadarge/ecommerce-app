import React, { ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Simple Next.js SSR App',
  description: 'A basic SSR app with Next.js',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="navbar-container">
            <Link href="/items" className="nav-link">
              Item List
            </Link>
            <Link href="/cart" className="nav-link">
              Cart
            </Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
