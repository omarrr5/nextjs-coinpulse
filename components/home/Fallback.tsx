import React from "react";
import DataTable from "@/components/DataTable";
import { cn } from "@/lib/utils";

const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header">
        <div className="header-image skeleton" />
      </div>
      <div className="info">
        <div className="header-line-sm skeleton" />
        <div className="header-line-lg skeleton" />
      </div>
    </div>
  );
};

const trendingColumns: DataTableColumn<any>[] = [
  {
    header: "name",
    cellClassName: "name-cell",
    cell: () => (
      <div className="name-link">
        <div className="name-image skeleton" />
        <div className="name-line skeleton" />
      </div>
    ),
  },
  {
    header: "24h Change",
    cellClassName: "change-cell",
    cell: () => (
      <div className="price-change">
        <div className="change-icon skeleton" />
        <div className="change-line skeleton" />
      </div>
    ),
  },
  {
    header: "Price",
    cellClassName: "price-cell",
    cell: () => <div className="price-line skeleton" />,
  },
];

const TrendingCoinsFallback = () => {
  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coin</h4>
      <div className="trending-coins-table">
        <DataTable
          columns={trendingColumns}
          data={[1, 2, 3, 4, 5, 6]}
          rowKey={(row) => row}
          headerCellClassName="py-3!"
          bodyCellClassName="py-2!"
        />
      </div>
    </div>
  );
};

export { CoinOverviewFallback, TrendingCoinsFallback };
