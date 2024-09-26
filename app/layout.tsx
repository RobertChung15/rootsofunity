"use client"
import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en">
      <body className="bg-gray-900">
      <Navbar></Navbar>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
