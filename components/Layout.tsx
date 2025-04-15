"use client";

import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#fffaf0] text-[#4b5563]">
      {/* Header */}
      <header className="bg-[#fffaf0] py-2 shadow-md flex items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold text-[#ea580c] hover:underline">
          BisiBeleBot
        </Link>

      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#ea580c] text-white py-2 text-center text-sm">
        © 2025 BisiBeleBot. All rights reserved.
      </footer>
    </div>
  );
}
