"use client";

import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';

export default function HomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/question-form');
  };

  const handleBisiBeleBath = () => {
    router.push('/bisi-bele-bath');
  };

  return (
    <Layout>
      <div className="w-full bg-[#fffaf0] text-[#1f2937] flex flex-col items-center justify-start px-4 py-16">

        {/* Hero Section */}
        <div className="max-w-2xl text-center mt-10 space-y-6">
          <h2 className="text-5xl font-extrabold text-[#1f2937]">
            Get Your Perfect <span className="text-[#ea580c]">Recipe</span>
          </h2>
          <p className="text-lg text-gray-600">
            Personalized South Indian recipes tailored to your taste—authentic, flavorful, and unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white font-medium rounded-md"
            >
              Start Cooking
            </button>
            <button
              onClick={handleBisiBeleBath}
              className="px-6 py-3 border border-[#ea580c] hover:bg-[#fff0e5] text-[#ea580c] font-medium rounded-md"
            >
              Make Bisi Bele Bath
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
