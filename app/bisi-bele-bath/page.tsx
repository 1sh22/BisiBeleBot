"use client";

import Layout from '@/components/Layout';

export default function BisiBeleBathPage() {
  return (
    <Layout>
      <div className="space-y-6 w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-[#ea580c] text-center mb-4">
          How to Make Bisi Bele Bath
        </h1>
        <div className="text-[#4b5563] space-y-4">
          <p>
            <b>Step 1:</b> Cook 1 cup of rice and 1/2 cup of toor dal (pigeon peas) separately until soft.
          </p>
          <p>
            <b>Step 2:</b> In a pan, heat 2 tablespoons of ghee and add mustard seeds, curry leaves, and a pinch of asafoetida.
          </p>
          <p>
            <b>Step 3:</b> Add chopped vegetables like carrots, beans, and peas. Sauté for a few minutes.
          </p>
          <p>
            <b>Step 4:</b> Add tamarind water, 2 tablespoons of Bisi Bele Bath powder, and salt to taste. Let it simmer.
          </p>
          <p>
            <b>Step 5:</b> Mix the cooked rice and dal into the pan. Stir well and let it cook for 5-10 minutes.
          </p>
          <p>
            <b>Step 6:</b> Garnish with fried cashews and serve hot.
          </p>
          <p className="text-[#ea580c] font-bold">
            10x better with khaara boondi
          </p>
        </div>
      </div>
    </Layout>
  );
}
