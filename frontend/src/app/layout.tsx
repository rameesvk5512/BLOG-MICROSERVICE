// src/app/login/layout.tsx
import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';

export const metadata: Metadata = {
  title: 'Login - My App',
  description: 'Login page for users',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>{children}</body>
    </html>
  );
}
