"use client";

import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#fffaf0] text-[#4b5563]">
      {/* Header */}
      <header className="bg-[#ea580c] text-white py-4 text-center text-2xl font-bold shadow-md">
        <Link href="/" className="hover:underline">
          BisiBeleBot
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#4b5563] text-white py-2 text-center text-sm">
        © 2025 BisiBeleBot. All rights reserved.
      </footer>
    </div>
  );
}
