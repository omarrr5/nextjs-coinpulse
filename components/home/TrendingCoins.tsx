import React from "react";
import { fetcher } from "@/lib/coingekco.actions";
import DataTable from "@/components/DataTable";
import Link from "next/link";
import Image from "next/image";
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
            {item.data.price_change_percentage_24h.usd.toFixed(2)}
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

      return <p>{item.data.price.toFixed(2)}</p>;
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

const TrendingCoins = async () => {
  const trendingCoins = await fetcher<{ coins: TrendingCoin[] }>(
    "/search/trending",
    undefined,
    300,
  );

  return (
    <div id="trending-coins">
      <h4>Trending Coin</h4>
      <div>
        <DataTable
          columns={columns}
          data={trendingCoins.coins.slice(0, 6) ||[]}
          rowKey={(coin) => coin.item.id}
          headerCellClassName="py-3!"
          bodyCellClassName="py-2!"
        />
      </div>
    </div>
  );
};

export default TrendingCoins;
