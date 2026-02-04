import React from "react";
import { fetcher } from "@/lib/coingekco.actions";
import Image from "next/image";

const CoinOverview = async () => {
  const coin = await fetcher<CoinDetailsData>("/coins/bitcoin", {
    dex_pair__format: "symbol",
  });

  return (
    <div id="coin-overview">
      <div className="header pt-2">
        <Image
          src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
          alt="Bitcoins logo"
          width={56}
          height={56}
        />
      </div>
      <div className="info">
        <p>Bitcoin / BTC</p>
        <h1>$89,523.12</h1>
      </div>
    </div>
  );
};

export default CoinOverview;
