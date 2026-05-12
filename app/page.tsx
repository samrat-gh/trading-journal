"use client";

import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Menu,
  Moon,
  ShieldCheck,
  Sun,
  TrendingUp,
  X,
  XCircle,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

// --- Types ---
interface FaqItem {
  question: string;
  answer: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-md p-2 text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-zinc-200 border-b bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 text-white dark:bg-emerald-600">
            <TrendingUp size={18} />
          </div>
          <span className="font-semibold text-lg text-zinc-900 tracking-tight dark:text-zinc-100">
            NepseJournal
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 font-medium text-sm text-zinc-600 md:flex dark:text-zinc-400">
          <a
            href="#features"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            How it Works
          </a>
          <a
            href="#pricing"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            FAQ
          </a>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <Link
            href="/login"
            className="font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Login
          </Link>
          <button className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-sm text-white transition-all hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-zinc-600 dark:text-zinc-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-zinc-100 border-t bg-white px-6 py-4 shadow-lg md:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex flex-col space-y-4 font-medium text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#features" onClick={() => setIsOpen(false)}>
              Features
            </a>
            <a href="#pricing" onClick={() => setIsOpen(false)}>
              Pricing
            </a>
            <a href="#faq" onClick={() => setIsOpen(false)}>
              FAQ
            </a>
            <hr className="border-zinc-100 dark:border-zinc-800" />
            <button className="w-full rounded-lg border border-zinc-200 py-2 text-center dark:border-zinc-700 dark:text-zinc-200">
              Login
            </button>
            <button className="w-full rounded-lg bg-emerald-600 py-2 text-center text-white">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative overflow-hidden border-zinc-100 border-b bg-zinc-50 pt-24 pb-32 md:pt-32 dark:border-zinc-900 dark:bg-zinc-950">
    <div className="mx-auto max-w-7xl px-6 text-center">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 font-medium text-xs text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
        Built exclusively for NEPSE Traders
      </div>

      <h1 className="mx-auto max-w-4xl font-bold text-5xl text-zinc-900 tracking-tight sm:text-6xl md:text-7xl dark:text-zinc-50">
        Stop Gambling on Rumors. <br className="hidden md:block" />
        <span className="text-emerald-600 dark:text-emerald-500">
          Start Trading with Data.
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 leading-relaxed dark:text-zinc-400">
        The first smart trading journal built for the Nepali market. Move beyond
        MeroShare and Excel sheets. Identify your patterns, kill your bad
        habits, and become consistent.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="/dashboard"
          className="w-full rounded-lg bg-zinc-900 px-8 py-3.5 font-semibold text-sm text-white shadow-lg shadow-zinc-200 transition-all hover:bg-zinc-800 sm:w-auto dark:bg-emerald-600 dark:shadow-none dark:hover:bg-emerald-500"
        >
          Start Journaling for Free
        </Link>
        <button className="w-full rounded-lg border border-zinc-200 bg-white px-8 py-3.5 font-semibold text-sm text-zinc-700 transition-all hover:bg-zinc-50 sm:w-auto dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800">
          See Demo
        </button>
      </div>
      <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500">
        No credit card required • Perfect for MeroShare users
      </p>

      {/* Abstract UI Mockup */}
      <div className="mx-auto mt-20 max-w-5xl rounded-xl border border-zinc-200 bg-white p-2 shadow-2xl shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/50">
        <div className="relative aspect-video overflow-hidden rounded-lg border border-zinc-100 bg-zinc-50/50 p-4 md:p-8 dark:border-zinc-800 dark:bg-zinc-950">
          {/* Mock Sidebar */}
          <div className="absolute top-0 bottom-0 left-0 hidden w-16 space-y-4 border-zinc-200 border-r bg-white p-4 sm:block md:w-64 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="h-8 w-3/4 animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-800"></div>
            <div className="h-4 w-1/2 rounded-md bg-zinc-50 dark:bg-zinc-800/50"></div>
            <div className="h-4 w-2/3 rounded-md bg-zinc-50 dark:bg-zinc-800/50"></div>
            <div className="h-4 w-1/2 rounded-md bg-zinc-50 dark:bg-zinc-800/50"></div>
          </div>
          {/* Mock Content */}
          <div className="ml-0 space-y-6 p-4 sm:ml-16 md:ml-64 md:p-8">
            <div className="flex items-center justify-between">
              <div className="h-8 w-32 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
              <div className="h-8 w-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-24 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-2 text-xs text-zinc-400">Win Rate</div>
                <div className="font-bold text-2xl text-zinc-800 dark:text-zinc-100">
                  58%
                </div>
              </div>
              <div className="h-24 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-2 text-xs text-zinc-400">Avg PnL</div>
                <div className="font-bold text-2xl text-emerald-600 dark:text-emerald-500">
                  +Rs 12,500
                </div>
              </div>
              <div className="h-24 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-2 text-xs text-zinc-400">Discipline</div>
                <div className="font-bold text-2xl text-zinc-800 dark:text-zinc-100">
                  8.5<span className="text-sm text-zinc-400">/10</span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex h-48 w-full items-end justify-around rounded-lg border border-zinc-200 bg-white p-4 pb-0 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              {/* Simple CSS Graph Bars */}
              <div className="h-[40%] w-8 rounded-t-sm bg-emerald-500/20 dark:bg-emerald-500/10"></div>
              <div className="h-[60%] w-8 rounded-t-sm bg-emerald-500/40 dark:bg-emerald-500/20"></div>
              <div className="h-[30%] w-8 rounded-t-sm bg-red-500/20 dark:bg-red-500/20"></div>
              <div className="h-[80%] w-8 rounded-t-sm bg-emerald-500"></div>
              <div className="h-[50%] w-8 rounded-t-sm bg-emerald-500/60 dark:bg-emerald-500/40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section className="bg-white py-24 dark:bg-zinc-950">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-bold text-3xl text-zinc-900 tracking-tight sm:text-4xl dark:text-zinc-50">
            The Market Isn't Beating You. <br />
            <span className="text-red-500 dark:text-red-400">
              Your Emotions Are.
            </span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            We know the NEPSE reality. It’s not just about technical analysis.
            It's about filtering out the noise.
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                <XCircle size={16} />
              </div>
              <span className="text-zinc-700 dark:text-zinc-300">
                <strong>The Telegram Trap:</strong> Buying because a "Guru" said
                a stock is bullish.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                <XCircle size={16} />
              </div>
              <span className="text-zinc-700 dark:text-zinc-300">
                <strong>The FOMO Buy:</strong> Jumping into Hydropower stocks
                after they hit circuit level.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                <XCircle size={16} />
              </div>
              <span className="text-zinc-700 dark:text-zinc-300">
                <strong>The Panic Sell:</strong> Dumping good scripts just
                because the index dropped 20 points.
              </span>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-8 shadow-inner dark:border-zinc-800 dark:bg-zinc-900/50">
          <h3 className="mb-6 font-semibold text-lg text-zinc-900 dark:text-zinc-200">
            Why Generic Journals Fail Here
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <span className="text-sm text-zinc-500 dark:text-zinc-500">
                Generic Journal
              </span>
              <span className="font-medium text-sm text-zinc-800 dark:text-zinc-300">
                Built for Forex (Pips)
              </span>
            </div>
            <div className="relative flex items-center justify-between overflow-hidden rounded-lg border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20">
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-emerald-500"></div>
              <span className="font-medium text-emerald-900 text-sm dark:text-emerald-400">
                NepseJournal
              </span>
              <span className="font-bold text-emerald-900 text-sm dark:text-emerald-300">
                Built for NEPSE (Rs/Kitta)
              </span>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <span className="text-sm text-zinc-500 dark:text-zinc-500">
                Generic Journal
              </span>
              <span className="font-medium text-sm text-zinc-800 dark:text-zinc-300">
                Confusing Tax Math
              </span>
            </div>
            <div className="relative flex items-center justify-between overflow-hidden rounded-lg border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20">
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-emerald-500"></div>
              <span className="font-medium text-emerald-900 text-sm dark:text-emerald-400">
                NepseJournal
              </span>
              <span className="font-bold text-emerald-900 text-sm dark:text-emerald-300">
                Adjusted for WACC & SEBON
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section
    id="features"
    className="border-zinc-200 border-t bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900"
  >
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-16 text-center">
        <h2 className="font-bold text-3xl text-zinc-900 tracking-tight sm:text-4xl dark:text-zinc-50">
          Designed for Discipline
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Tools that treat your trading like a business, not a casino.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Feature 1 */}
        <div className="group rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
            <AlertTriangle size={24} />
          </div>
          <h3 className="mb-3 font-bold text-xl text-zinc-900 dark:text-zinc-100">
            Mistake Pattern Detector
          </h3>
          <p className="text-zinc-600 leading-relaxed dark:text-zinc-400">
            Our system analyzes your losses. "You keep losing money on
            Microfinance stocks on Tuesdays." Tag your emotions (FOMO, Revenge)
            and fix the leak.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="group rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            <BarChart3 size={24} />
          </div>
          <h3 className="mb-3 font-bold text-xl text-zinc-900 dark:text-zinc-100">
            Clean Trade Analytics
          </h3>
          <p className="text-zinc-600 leading-relaxed dark:text-zinc-400">
            Forget messy Excel formulas. Get instant clarity on Win/Loss Ratio,
            Average R:R, and Sector Exposure (Hydro vs Commercial) instantly.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="group rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            <ShieldCheck size={24} />
          </div>
          <h3 className="mb-3 font-bold text-xl text-zinc-900 dark:text-zinc-100">
            The Discipline Score
          </h3>
          <p className="text-zinc-600 leading-relaxed dark:text-zinc-400">
            Gamify your growth. We give you a score based on how well you follow
            your own rules. Did you set a Stop Loss? Did you exit as planned?
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const items: Testimonial[] = [
    {
      quote:
        "I used to track trades in a notebook, but I was lazy. This app makes it so easy to see that I was losing 80% of my money on 'Hallako bhar ma' trades.",
      name: "Sushil K.",
      role: "Active Trader (Kathmandu)",
    },
    {
      quote:
        "Most journals are for Forex. Finally, something that understands WACC and the Nepali market context. The emotional tagging feature is a game changer.",
      name: "Anjali S.",
      role: "Part-time Trader",
    },
    {
      quote:
        "Simple, clean, and to the point. It helps me treat trading like a business, not a casino.",
      name: "Rohan B.",
      role: "Student & Trader",
    },
  ];

  return (
    <section className="border-zinc-200 border-t bg-white py-24 dark:border-zinc-900 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-center font-bold text-3xl text-zinc-900 tracking-tight dark:text-zinc-50">
          Trusted by Nepali Traders
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-zinc-100 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="mb-6 text-zinc-700 italic dark:text-zinc-300">
                "{item.quote}"
              </p>
              <div>
                <div className="font-bold text-zinc-900 dark:text-zinc-100">
                  {item.name}
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-500">
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="pricing" className="bg-zinc-900 py-24 text-white dark:bg-black">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-16 text-center">
        <h2 className="font-bold text-3xl text-white tracking-tight sm:text-4xl">
          Invest in Your Consistency
        </h2>
        <p className="mt-4 text-zinc-400">
          Choose the plan that fits your trading frequency.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {/* Free Plan */}
        <div className="rounded-2xl border border-zinc-700 bg-zinc-800/50 p-8 dark:bg-zinc-900/30">
          <h3 className="font-bold text-white text-xl">Free Tier</h3>
          <div className="my-4 font-bold text-3xl text-white">
            Rs 0{" "}
            <span className="font-normal text-sm text-zinc-400">/ forever</span>
          </div>
          <ul className="mb-8 space-y-4 text-zinc-300">
            <li className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-zinc-500" /> Track up to
              30 trades/month
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-zinc-500" /> Basic
              Analytics
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-zinc-500" /> Standard
              Support
            </li>
          </ul>
          <button className="w-full rounded-lg border border-zinc-600 bg-transparent py-3 font-medium text-white transition-colors hover:bg-zinc-700">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="relative rounded-2xl border border-emerald-500 bg-zinc-800 p-8 shadow-2xl shadow-emerald-900/20 dark:bg-zinc-900">
          <div className="-top-4 -translate-x-1/2 absolute left-1/2 rounded-full bg-emerald-500 px-3 py-1 font-bold text-white text-xs">
            RECOMMENDED
          </div>
          <h3 className="font-bold text-emerald-400 text-xl">Pro Trader</h3>
          <div className="my-4 font-bold text-3xl text-white">
            Rs 499{" "}
            <span className="font-normal text-sm text-zinc-400">/ month</span>
          </div>
          <ul className="mb-8 space-y-4 text-zinc-300">
            <li className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-emerald-500" /> Unlimited
              Trades
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-emerald-500" /> Advanced
              Pattern Recognition
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-emerald-500" /> Multiple
              Portfolios
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-emerald-500" /> Export to
              Excel/PDF
            </li>
          </ul>
          <button className="w-full rounded-lg bg-emerald-600 py-3 font-medium text-white transition-colors hover:bg-emerald-700">
            Go Pro
          </button>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs: FaqItem[] = [
    {
      question: "Can I connect this directly to TMS (Broker)?",
      answer:
        "Currently, TMS does not allow third-party API connections. You have to log trades manually, but we've made the interface incredibly fast—it takes less time than checking your Facebook notifications.",
    },
    {
      question: "Is my data private?",
      answer:
        "100%. We do not sell your trade data to big investors or brokers. Your strategy is yours alone.",
    },
    {
      question: "Does this support right shares and dividends?",
      answer:
        "Yes, you can adjust your holdings to account for bonus shares and right shares to keep your net worth accurate.",
    },
    {
      question: "Is this better than MeroShare's 'My Portfolio'?",
      answer:
        "MeroShare shows you what you have. We show you how you perform. MeroShare doesn't tell you that you lose money every time you trade based on rumors; we do.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-zinc-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-12 text-center font-bold text-3xl text-zinc-900 dark:text-zinc-50">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-zinc-900 hover:bg-zinc-50 dark:text-zinc-100 dark:hover:bg-zinc-800/50"
              >
                {faq.question}
                {openIndex === idx ? (
                  <ChevronUp size={20} className="text-zinc-400" />
                ) : (
                  <ChevronDown size={20} className="text-zinc-400" />
                )}
              </button>
              {openIndex === idx && (
                <div className="border-zinc-100 border-t px-6 py-4 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-zinc-200 border-t bg-white py-12 dark:border-zinc-900 dark:bg-zinc-950">
    <div className="mx-auto max-w-7xl px-6 text-center">
      <h3 className="font-bold text-2xl text-zinc-900 tracking-tight dark:text-zinc-50">
        Master the Market.
      </h3>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Don't let another bull run pass you by while you make the same mistakes.
      </p>

      <div className="mt-8">
        <button className="rounded-lg bg-emerald-600 px-8 py-3 font-semibold text-sm text-white transition-all hover:bg-emerald-700">
          Start Your Trading Journal
        </button>
      </div>

      <div className="mt-16 border-zinc-100 border-t pt-8 text-sm text-zinc-400 dark:border-zinc-900">
        <p>Copyright © 2025. Made with ❤️ in Nepal.</p>
        <div className="mt-2 flex justify-center gap-6">
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-200">
            Terms of Service
          </a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-200">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main Page Component ---

export default function LandingPage() {
  return (
    // 'selection:' classes style the color when you highlight text
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900 dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-emerald-900 dark:selection:text-emerald-100">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <div
        id="how-it-works"
        className="border-zinc-200 border-t bg-white py-24 dark:border-zinc-800 dark:bg-zinc-950"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-12 font-bold text-3xl text-zinc-900 dark:text-zinc-50">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="relative p-4">
              <div className="-top-4 -translate-x-1/2 absolute left-1/2 font-bold text-4xl text-zinc-100 dark:text-zinc-900">
                01
              </div>
              <h3 className="relative z-10 font-bold text-lg text-zinc-900 dark:text-zinc-100">
                Execute Trade
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Buy or sell via your broker (TMS).
              </p>
            </div>
            <div className="relative p-4">
              <div className="-top-4 -translate-x-1/2 absolute left-1/2 font-bold text-4xl text-zinc-100 dark:text-zinc-900">
                02
              </div>
              <h3 className="relative z-10 font-bold text-lg text-zinc-900 dark:text-zinc-100">
                Log It
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Enter details in app (takes 30s).
              </p>
            </div>
            <div className="relative p-4">
              <div className="-top-4 -translate-x-1/2 absolute left-1/2 font-bold text-4xl text-zinc-100 dark:text-zinc-900">
                03
              </div>
              <h3 className="relative z-10 font-bold text-lg text-zinc-900 dark:text-zinc-100">
                Reflect
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Add a note on why you took the trade.
              </p>
            </div>
            <div className="relative p-4">
              <div className="-top-4 -translate-x-1/2 absolute left-1/2 font-bold text-4xl text-zinc-100 dark:text-zinc-900">
                04
              </div>
              <h3 className="relative z-10 font-bold text-lg text-zinc-900 dark:text-zinc-100">
                Review
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Check your weekly report card.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
