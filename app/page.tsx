import React, { Suspense } from "react";
import TrendingCoins from "@/components/home/TrendingCoins";
import CoinOverview from "@/components/home/CoinOverview";

const page = () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<div>Loading Coin Overview...</div>}>
          <CoinOverview />
        </Suspense>
        <Suspense fallback={<div>Loading Trending Coins...</div>}>
          <TrendingCoins />
        </Suspense>
      </section>
      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  );
};

export default page;
