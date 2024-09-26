"use client"
import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();


    return (
        <nav>
            <div className="flex rounded-md items-center justify-center my-2" role="group">
                <Link href="/projects">
                    <button className={`inline-flex items-center px-4 py-2 text-sm border-t border-b border-l border-gray-700 
                    font-medium text-white bg-gray-800 rounded-s-lg transition duration-200 ease-in-out 
                    ${pathname === '/projects' ? 'bg-gray-400' : 'hover:bg-gray-700 hover:text-blue-300'}`}>
                        Projects
                    </button>
                </Link>
                <Link href="/">
                    <button className={`inline-flex items-center px-4 py-2 text-sm border-t border-b border-gray-700 
                    font-medium text-white bg-gray-800 transition duration-200 ease-in-out 
                    ${pathname === '/' ? 'bg-gray-400' : 'hover:bg-gray-700 hover:text-blue-300'}`}>
                        Home
                    </button>
                </Link>
                <Link href="/contacts">
                    <button className={`inline-flex items-center px-4 py-2 text-sm border-t border-b border-gray-700 border-r 
                    font-medium text-white bg-gray-800 rounded-e-lg transition duration-200 ease-in-out 
                    ${pathname === '/contacts' ? 'bg-gray-400' : 'hover:bg-gray-700 hover:text-blue-300'}`}>
                        Contacts
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar