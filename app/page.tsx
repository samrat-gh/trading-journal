"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  TrendingUp,
  AlertTriangle,
  BarChart3,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

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

// --- Components ---

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-md p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors"
      aria-label="Toggle Dark Mode">
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 text-white dark:bg-emerald-600">
            <TrendingUp size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            NepseJournal
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a
            href="#features"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            How it Works
          </a>
          <a
            href="#pricing"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Pricing
          </a>
          <a
            href="#faq"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            FAQ
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <button className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
            Login
          </button>
          <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-all dark:bg-emerald-600 dark:hover:bg-emerald-500">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-zinc-600 dark:text-zinc-400"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white px-6 py-4 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex flex-col space-y-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
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
  <section className="relative overflow-hidden border-b border-zinc-100 bg-zinc-50 pt-24 pb-32 dark:bg-zinc-950 dark:border-zinc-900 md:pt-32">
    <div className="mx-auto max-w-7xl px-6 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 mb-8 shadow-sm dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Built exclusively for NEPSE Traders
      </div>

      <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl md:text-7xl">
        Stop Gambling on Rumors. <br className="hidden md:block" />
        <span className="text-emerald-600 dark:text-emerald-500">
          Start Trading with Data.
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
        The first smart trading journal built for the Nepali market. Move beyond
        MeroShare and Excel sheets. Identify your patterns, kill your bad
        habits, and become consistent.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto rounded-lg bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200 dark:bg-emerald-600 dark:hover:bg-emerald-500 dark:shadow-none">
          Start Journaling for Free
        </button>
        <button className="w-full sm:w-auto rounded-lg border border-zinc-200 bg-white px-8 py-3.5 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition-all dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800">
          See Demo
        </button>
      </div>
      <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500">
        No credit card required • Perfect for MeroShare users
      </p>

      {/* Abstract UI Mockup */}
      <div className="mx-auto mt-20 max-w-5xl rounded-xl border border-zinc-200 bg-white p-2 shadow-2xl shadow-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-black/50">
        <div className="rounded-lg border border-zinc-100 bg-zinc-50/50 p-4 md:p-8 aspect-[16/9] overflow-hidden relative dark:bg-zinc-950 dark:border-zinc-800">
          {/* Mock Sidebar */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-64 border-r border-zinc-200 bg-white hidden sm:block p-4 space-y-4 dark:bg-zinc-900 dark:border-zinc-800">
            <div className="h-8 w-3/4 bg-zinc-100 rounded-md animate-pulse dark:bg-zinc-800"></div>
            <div className="h-4 w-1/2 bg-zinc-50 rounded-md dark:bg-zinc-800/50"></div>
            <div className="h-4 w-2/3 bg-zinc-50 rounded-md dark:bg-zinc-800/50"></div>
            <div className="h-4 w-1/2 bg-zinc-50 rounded-md dark:bg-zinc-800/50"></div>
          </div>
          {/* Mock Content */}
          <div className="ml-0 sm:ml-16 md:ml-64 p-4 md:p-8 space-y-6">
            <div className="flex justify-between items-center">
              <div className="h-8 w-32 bg-zinc-200 rounded-md dark:bg-zinc-800"></div>
              <div className="h-8 w-8 bg-emerald-100 rounded-full dark:bg-emerald-900/30"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-24 bg-white border border-zinc-200 rounded-lg shadow-sm p-4 dark:bg-zinc-900 dark:border-zinc-800">
                <div className="text-xs text-zinc-400 mb-2">Win Rate</div>
                <div className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                  58%
                </div>
              </div>
              <div className="h-24 bg-white border border-zinc-200 rounded-lg shadow-sm p-4 dark:bg-zinc-900 dark:border-zinc-800">
                <div className="text-xs text-zinc-400 mb-2">Avg PnL</div>
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">
                  +Rs 12,500
                </div>
              </div>
              <div className="h-24 bg-white border border-zinc-200 rounded-lg shadow-sm p-4 dark:bg-zinc-900 dark:border-zinc-800">
                <div className="text-xs text-zinc-400 mb-2">Discipline</div>
                <div className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                  8.5<span className="text-sm text-zinc-400">/10</span>
                </div>
              </div>
            </div>
            <div className="h-48 w-full bg-white border border-zinc-200 rounded-lg shadow-sm mt-6 flex items-end justify-around p-4 pb-0 dark:bg-zinc-900 dark:border-zinc-800">
              {/* Simple CSS Graph Bars */}
              <div className="w-8 h-[40%] bg-emerald-500/20 rounded-t-sm dark:bg-emerald-500/10"></div>
              <div className="w-8 h-[60%] bg-emerald-500/40 rounded-t-sm dark:bg-emerald-500/20"></div>
              <div className="w-8 h-[30%] bg-red-500/20 rounded-t-sm dark:bg-red-500/20"></div>
              <div className="w-8 h-[80%] bg-emerald-500 rounded-t-sm"></div>
              <div className="w-8 h-[50%] bg-emerald-500/60 rounded-t-sm dark:bg-emerald-500/40"></div>
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
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
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
        <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-8 shadow-inner dark:bg-zinc-900/50 dark:border-zinc-800">
          <h3 className="text-lg font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            Why Generic Journals Fail Here
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
              <span className="text-zinc-500 text-sm dark:text-zinc-500">
                Generic Journal
              </span>
              <span className="text-zinc-800 font-medium text-sm dark:text-zinc-300">
                Built for Forex (Pips)
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg border border-emerald-100 relative overflow-hidden dark:bg-emerald-950/20 dark:border-emerald-900/50">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
              <span className="text-emerald-900 font-medium text-sm dark:text-emerald-400">
                NepseJournal
              </span>
              <span className="text-emerald-900 font-bold text-sm dark:text-emerald-300">
                Built for NEPSE (Rs/Kitta)
              </span>
            </div>

            <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
              <span className="text-zinc-500 text-sm dark:text-zinc-500">
                Generic Journal
              </span>
              <span className="text-zinc-800 font-medium text-sm dark:text-zinc-300">
                Confusing Tax Math
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg border border-emerald-100 relative overflow-hidden dark:bg-emerald-950/20 dark:border-emerald-900/50">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
              <span className="text-emerald-900 font-medium text-sm dark:text-emerald-400">
                NepseJournal
              </span>
              <span className="text-emerald-900 font-bold text-sm dark:text-emerald-300">
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
    className="bg-zinc-50 py-24 border-t border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Designed for Discipline
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Tools that treat your trading like a business, not a casino.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Feature 1 */}
        <div className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800 dark:hover:border-zinc-700">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
            <AlertTriangle size={24} />
          </div>
          <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Mistake Pattern Detector
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Our system analyzes your losses. "You keep losing money on
            Microfinance stocks on Tuesdays." Tag your emotions (FOMO, Revenge)
            and fix the leak.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800 dark:hover:border-zinc-700">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            <BarChart3 size={24} />
          </div>
          <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Clean Trade Analytics
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Forget messy Excel formulas. Get instant clarity on Win/Loss Ratio,
            Average R:R, and Sector Exposure (Hydro vs Commercial) instantly.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800 dark:hover:border-zinc-700">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            <ShieldCheck size={24} />
          </div>
          <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-100">
            The Discipline Score
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
    <section className="bg-white py-24 border-t border-zinc-200 dark:bg-zinc-950 dark:border-zinc-900">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-16">
          Trusted by Nepali Traders
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-zinc-50 p-8 border border-zinc-100 dark:bg-zinc-900 dark:border-zinc-800">
              <p className="italic text-zinc-700 dark:text-zinc-300 mb-6">
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
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
          Invest in Your Consistency
        </h2>
        <p className="mt-4 text-zinc-400">
          Choose the plan that fits your trading frequency.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {/* Free Plan */}
        <div className="rounded-2xl border border-zinc-700 bg-zinc-800/50 p-8 dark:bg-zinc-900/30">
          <h3 className="text-xl font-bold text-white">Free Tier</h3>
          <div className="my-4 text-3xl font-bold text-white">
            Rs 0{" "}
            <span className="text-sm font-normal text-zinc-400">/ forever</span>
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
          <button className="w-full rounded-lg border border-zinc-600 bg-transparent py-3 font-medium hover:bg-zinc-700 transition-colors text-white">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="relative rounded-2xl border border-emerald-500 bg-zinc-800 p-8 shadow-2xl shadow-emerald-900/20 dark:bg-zinc-900">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">
            RECOMMENDED
          </div>
          <h3 className="text-xl font-bold text-emerald-400">Pro Trader</h3>
          <div className="my-4 text-3xl font-bold text-white">
            Rs 499{" "}
            <span className="text-sm font-normal text-zinc-400">/ month</span>
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
          <button className="w-full rounded-lg bg-emerald-600 py-3 font-medium text-white hover:bg-emerald-700 transition-colors">
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
        <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-zinc-200 bg-white overflow-hidden dark:bg-zinc-900 dark:border-zinc-800">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-zinc-900 hover:bg-zinc-50 dark:text-zinc-100 dark:hover:bg-zinc-800/50">
                {faq.question}
                {openIndex === idx ? (
                  <ChevronUp size={20} className="text-zinc-400" />
                ) : (
                  <ChevronDown size={20} className="text-zinc-400" />
                )}
              </button>
              {openIndex === idx && (
                <div className="border-t border-zinc-100 px-6 py-4 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
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
  <footer className="border-t border-zinc-200 bg-white py-12 dark:border-zinc-900 dark:bg-zinc-950">
    <div className="mx-auto max-w-7xl px-6 text-center">
      <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Master the Market.
      </h3>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Don't let another bull run pass you by while you make the same mistakes.
      </p>

      <div className="mt-8">
        <button className="rounded-lg bg-emerald-600 px-8 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-all">
          Start Your Trading Journal
        </button>
      </div>

      <div className="mt-16 border-t border-zinc-100 pt-8 text-sm text-zinc-400 dark:border-zinc-900">
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
        className="bg-white py-24 border-t border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-zinc-900 dark:text-zinc-50">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="relative p-4">
              <div className="text-4xl font-bold text-zinc-100 absolute -top-4 left-1/2 -translate-x-1/2 dark:text-zinc-900">
                01
              </div>
              <h3 className="text-lg font-bold relative z-10 text-zinc-900 dark:text-zinc-100">
                Execute Trade
              </h3>
              <p className="text-sm text-zinc-600 mt-2 dark:text-zinc-400">
                Buy or sell via your broker (TMS).
              </p>
            </div>
            <div className="relative p-4">
              <div className="text-4xl font-bold text-zinc-100 absolute -top-4 left-1/2 -translate-x-1/2 dark:text-zinc-900">
                02
              </div>
              <h3 className="text-lg font-bold relative z-10 text-zinc-900 dark:text-zinc-100">
                Log It
              </h3>
              <p className="text-sm text-zinc-600 mt-2 dark:text-zinc-400">
                Enter details in app (takes 30s).
              </p>
            </div>
            <div className="relative p-4">
              <div className="text-4xl font-bold text-zinc-100 absolute -top-4 left-1/2 -translate-x-1/2 dark:text-zinc-900">
                03
              </div>
              <h3 className="text-lg font-bold relative z-10 text-zinc-900 dark:text-zinc-100">
                Reflect
              </h3>
              <p className="text-sm text-zinc-600 mt-2 dark:text-zinc-400">
                Add a note on why you took the trade.
              </p>
            </div>
            <div className="relative p-4">
              <div className="text-4xl font-bold text-zinc-100 absolute -top-4 left-1/2 -translate-x-1/2 dark:text-zinc-900">
                04
              </div>
              <h3 className="text-lg font-bold relative z-10 text-zinc-900 dark:text-zinc-100">
                Review
              </h3>
              <p className="text-sm text-zinc-600 mt-2 dark:text-zinc-400">
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
