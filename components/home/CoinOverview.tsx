import React from "react";
import { fetcher } from "@/lib/coingekco.actions";
import Image from "next/image";
import { CoinOverviewFallback } from "./Fallback";
import { formatCurrency } from "@/lib/utils";

const CoinOverview = async () => {
  let coin;

  try {
    coin = await fetcher<CoinDetailsData>("/coins/bitcoin", {
      dex_pair__format: "symbol",
    });
  } catch (error) {
    console.log(error);
    return <CoinOverviewFallback />;
  }

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
        <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
      </div>
    </div>
  );
};

export default CoinOverview;
