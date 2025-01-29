import React, { ReactNode } from 'react';
import './globals.css';
import StoreProvider from './StoreProvider';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Simple Next.js SSR App',
  description: 'A basic SSR app with Next.js',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">

            <body>
            <StoreProvider>
             <Navbar/>
              
              <main>{children}</main>
              </StoreProvider>
            </body>
    </html>
  );
}
