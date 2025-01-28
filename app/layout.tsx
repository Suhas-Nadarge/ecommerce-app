import React, { ReactNode } from 'react';
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
      <body>{children}</body>
    </html>
  );
}