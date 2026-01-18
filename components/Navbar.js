'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getUser, logout } from '@/lib/auth';

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser());
  }, [pathname]);

  const handleLogout = () => {
    logout();
    setUser(null);
    window.location.href = '/';
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-600">
            ItemStore
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/" 
              className={`hover:text-blue-600 transition-colors ${pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
            >
              Home
            </Link>
            <Link 
              href="/items" 
              className={`hover:text-blue-600 transition-colors ${pathname === '/items' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
            >
              Items
            </Link>
            
            {user ? (
              <>
                <Link 
                  href="/add-item" 
                  className={`hover:text-blue-600 transition-colors ${pathname === '/add-item' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
                >
                  Add Item
                </Link>
                <div className="flex items-center gap-4">
                  <span className="text-gray-700">Hi, {user.name}</span>
                  <button 
                    onClick={handleLogout}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <Link 
                href="/login" 
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
