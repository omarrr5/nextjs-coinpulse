import React from "react";
import Image from "next/image";
import DataTable from "@/components/DataTable";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";

const columns: DataTableColumn<TrendingCoin>[] = [
  {
    header: "name",
    cellClassName: "name-cell",
    cell: (coin: TrendingCoin) => {
      const item = coin.item;

      return (
        <Link href={`/coin/${item.id}`}>
          <Image src={item.large} alt={item.name} width={36} height={36} />
          <p>{item.name}</p>
        </Link>
      );
    },
  },
  {
    header: "24h Change",
    cellClassName: "name-cell",
    cell: (coin) => {
      const item = coin.item;
      const isTrendingUp = item.data.price_change_percentage_24h.usd >= 0;

      return (
        <div
          className={cn(
            "price-change",
            isTrendingUp ? "text-green-500" : "text-red-500",
          )}
        >
          <p>
            {isTrendingUp ? <TrendingUp /> : <TrendingDown />}
            {item.data.price_change_percentage_24h.usd}
          </p>
        </div>
      );
    },
  },
  {
    header: "Price",
    cellClassName: "price-cell",
    cell: (coin) => {
      const item = coin.item;

      return <p>{item.data.price}</p>;
    },
  },
];

const dummyTrendingCoins: TrendingCoin[] = [
  {
    item: {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      market_cap_rank: 1,
      thumb: "/logo.svg",
      large: "/logo.svg",
      data: {
        price: 64231.45,
        price_change_percentage_24h: {
          usd: 2.5,
        },
      },
    },
  },
  {
    item: {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      market_cap_rank: 2,
      thumb: "/logo.svg",
      large: "/logo.svg",
      data: {
        price: 3452.12,
        price_change_percentage_24h: {
          usd: -1.2,
        },
      },
    },
  },
  {
    item: {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      market_cap_rank: 5,
      thumb: "/logo.svg",
      large: "/logo.svg",
      data: {
        price: 145.67,
        price_change_percentage_24h: {
          usd: 5.8,
        },
      },
    },
  },
];

const page = () => {
  return (
    <main className="main-container">
      <section className="home-grid">
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
        <p>Trending Coin</p>
        <DataTable
          columns={columns}
          data={dummyTrendingCoins}
          rowKey={(coin) => coin.item.id}
        />
      </section>
      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  );
};

export default page;
