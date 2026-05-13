"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar,
  Edit,
  Edit3,
  Plus,
  TrendingUp,
  UploadCloud,
} from "lucide-react";

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 pb-10">
      {/* Performance Header */}
      <section className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 className="font-bold text-3xl text-zinc-900 tracking-tight dark:text-zinc-50">
            Portfolio Performance
          </h1>
          <div className="mt-2 flex items-center gap-2">
            <span className="flex items-center gap-1 font-semibold text-emerald-600 text-lg dark:text-emerald-500">
              <TrendingUp size={20} />
              +NPR 142,500.00 (12.4%)
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Last 30 days
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="gap-2 bg-white font-semibold dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <UploadCloud size={16} />
            Import MeroShare CSV
          </Button>
          <Button className="gap-2 bg-emerald-600 font-semibold text-white hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500">
            <Plus size={16} />
            Add Trade Entry
          </Button>
        </div>
      </section>

      {/* Bento Grid Top Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Current Holdings */}
        <Card className="flex flex-col overflow-hidden border-zinc-200 bg-white shadow-sm lg:col-span-2 dark:border-zinc-800 dark:bg-zinc-950">
          <CardHeader className="flex flex-row items-center justify-between border-zinc-200 border-b bg-zinc-50/50 px-6 py-4 dark:border-zinc-800 dark:bg-zinc-900/50">
            <CardTitle className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
              Current Holdings
            </CardTitle>
            <Button
              variant="link"
              className="h-auto p-0 font-semibold text-emerald-600 dark:text-emerald-500"
            >
              View All
            </Button>
          </CardHeader>
          <CardContent className="overflow-x-auto p-0">
            <Table>
              <TableHeader className="sticky top-0 bg-zinc-50 dark:bg-zinc-900">
                <TableRow className="border-zinc-200 hover:bg-transparent dark:border-zinc-800">
                  <TableHead className="font-semibold text-xs text-zinc-500 tracking-wider">
                    SYMBOL
                  </TableHead>
                  <TableHead className="font-semibold text-xs text-zinc-500 tracking-wider">
                    QTY
                  </TableHead>
                  <TableHead className="text-right font-semibold text-xs text-zinc-500 tracking-wider">
                    LTP (NPR)
                  </TableHead>
                  <TableHead className="text-right font-semibold text-xs text-zinc-500 tracking-wider">
                    P/L (%)
                  </TableHead>
                  <TableHead className="text-center font-semibold text-xs text-zinc-500 tracking-wider">
                    ACTION
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    symbol: "NICA",
                    qty: 250,
                    ltp: "842.00",
                    pl: "+8.42%",
                    plColor: "text-emerald-600 dark:text-emerald-500",
                  },
                  {
                    symbol: "GBIME",
                    qty: 500,
                    ltp: "214.50",
                    pl: "-2.15%",
                    plColor: "text-red-600 dark:text-red-500",
                  },
                  {
                    symbol: "HDL",
                    qty: 120,
                    ltp: "2,150.00",
                    pl: "+15.20%",
                    plColor: "text-emerald-600 dark:text-emerald-500",
                  },
                  {
                    symbol: "UPPER",
                    qty: 1000,
                    ltp: "312.00",
                    pl: "-0.45%",
                    plColor: "text-red-600 dark:text-red-500",
                  },
                ].map((row) => (
                  <TableRow
                    key={row.symbol}
                    className="border-zinc-200 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900/50"
                  >
                    <TableCell className="font-bold text-zinc-900 dark:text-zinc-100">
                      {row.symbol}
                    </TableCell>
                    <TableCell className="font-medium text-zinc-700 dark:text-zinc-300">
                      {row.qty}
                    </TableCell>
                    <TableCell className="text-right font-medium text-zinc-700 dark:text-zinc-300">
                      {row.ltp}
                    </TableCell>
                    <TableCell
                      className={`text-right font-bold ${row.plColor}`}
                    >
                      {row.pl}
                    </TableCell>
                    <TableCell className="p-0 text-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                      >
                        <Edit size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Journaling / Insights */}
        <div className="flex flex-col gap-6">
          <Card className="border-zinc-200 shadow-sm dark:border-zinc-800">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                Recent Insights
              </CardTitle>
              <Badge
                variant="secondary"
                className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] text-white dark:bg-zinc-100 dark:text-zinc-900"
              >
                3 NEW
              </Badge>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="space-y-2 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="flex items-start justify-between">
                  <span className="font-bold text-emerald-600 text-xs uppercase tracking-wider dark:text-emerald-500">
                    NICA ENTRY
                  </span>
                  <span className="font-medium text-[10px] text-zinc-500">
                    2h ago
                  </span>
                </div>
                <p className="line-clamp-2 text-sm text-zinc-700 leading-relaxed dark:text-zinc-300">
                  "Entry triggered at breakout of weekly resistance. Emotional
                  state: Calm. Risk adjusted."
                </p>
              </div>
              <div className="space-y-2 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="flex items-start justify-between">
                  <span className="font-bold text-red-600 text-xs uppercase tracking-wider dark:text-red-500">
                    UPPER EXIT PLAN
                  </span>
                  <span className="font-medium text-[10px] text-zinc-500">
                    Yesterday
                  </span>
                </div>
                <p className="line-clamp-2 text-sm text-zinc-700 leading-relaxed dark:text-zinc-300">
                  "Feeling anxious about the volatility. Need to stick to the
                  trailing stop loss at 310."
                </p>
              </div>
              <Button
                variant="link"
                className="mt-1 w-full font-bold text-emerald-600 dark:text-emerald-500"
              >
                Open Full Journal
              </Button>
            </CardContent>
          </Card>

          <Card className="relative flex min-h-[160px] flex-col justify-between overflow-hidden border-none bg-emerald-700 text-white shadow-sm dark:bg-emerald-800">
            <CardHeader className="relative z-10 pb-0">
              <CardTitle className="text-lg text-white">
                Account Maturity
              </CardTitle>
              <CardDescription className="mt-1.5 text-emerald-100/90 text-sm leading-relaxed">
                You have followed your rules in 92% of trades this month. Keep
                it up!
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 mt-6">
              <div className="h-2 w-full overflow-hidden rounded-full bg-emerald-900/40">
                <div className="h-full w-[92%] bg-emerald-300" />
              </div>
            </CardContent>
            {/* Decorative Element */}
            <div className="-right-4 -bottom-4 pointer-events-none absolute h-24 w-24 rounded-full bg-white/10 blur-2xl" />
          </Card>
        </div>
      </div>

      {/* Bento Grid Bottom Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* NEPSE Bullish */}
        <Card className="flex flex-col items-center gap-6 border-zinc-200 bg-zinc-50/50 p-6 shadow-sm sm:flex-row lg:col-span-2 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-100 px-2.5 py-1 font-bold text-[10px] text-emerald-700 uppercase tracking-wider dark:bg-emerald-900/40 dark:text-emerald-400">
              Market Trend
            </span>
            <h3 className="font-bold text-2xl text-zinc-900 tracking-tight dark:text-zinc-50">
              NEPSE is currently Bullish
            </h3>
            <p className="max-w-md text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
              The index closed above the 20-day SMA with strong volume. Consider
              holding current positions while maintaining strict stop losses on
              small-cap stocks.
            </p>
            <div className="flex gap-8 pt-2">
              <div>
                <p className="mb-1 font-bold text-[10px] text-zinc-400 tracking-wider">
                  INDEX
                </p>
                <p className="font-bold text-lg text-zinc-900 dark:text-zinc-100">
                  2,145.32
                </p>
              </div>
              <div>
                <p className="mb-1 font-bold text-[10px] text-zinc-400 tracking-wider">
                  CHANGE
                </p>
                <p className="font-bold text-emerald-600 text-lg dark:text-emerald-500">
                  +1.2%
                </p>
              </div>
              <div>
                <p className="mb-1 font-bold text-[10px] text-zinc-400 tracking-wider">
                  VOL (B)
                </p>
                <p className="font-bold text-lg text-zinc-900 dark:text-zinc-100">
                  4.2
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex h-40 w-full shrink-0 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm sm:w-64 dark:border-zinc-800 dark:bg-zinc-950">
            {/* Chart mock SVG/image */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <svg
                className="h-full w-full text-emerald-500 opacity-60"
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
                aria-label="Market Chart"
                role="img"
              >
                <path
                  d="M0,40 L15,35 L30,37 L50,22 L70,26 L90,10 L100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="cursor-pointer rounded-full border border-zinc-200 bg-white/90 px-4 py-2 font-bold text-[10px] text-zinc-600 shadow-sm backdrop-blur-sm transition-transform hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-300">
                VIEW CHART
              </span>
            </div>
          </div>
        </Card>

        {/* Next Review */}
        <Card className="flex flex-col justify-between border-zinc-200 p-6 shadow-sm dark:border-zinc-800">
          <div>
            <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-50">
              Next Review
            </h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed dark:text-zinc-400">
              Your weekly performance review is scheduled for Sunday evening.
            </p>
          </div>
          <div className="mt-8">
            <div className="-space-x-2 flex">
              <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-emerald-600 dark:border-zinc-950 dark:bg-emerald-900/50 dark:text-emerald-500">
                <Calendar size={18} />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-zinc-100 text-zinc-500 dark:border-zinc-950 dark:bg-zinc-800 dark:text-zinc-400">
                <Edit3 size={18} />
              </div>
            </div>
            <Button
              variant="secondary"
              className="mt-6 w-full bg-zinc-900 font-bold text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
            >
              Set Reminder
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
