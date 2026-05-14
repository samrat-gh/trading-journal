import { TrendingUp } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Register | NepseJournal",
  description: "Create your new NepseJournal account.",
};

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Left Pane - Form */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-90"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 text-white dark:bg-emerald-600">
                <TrendingUp size={18} />
              </div>
              <span className="font-semibold text-lg text-zinc-900 tracking-tight dark:text-zinc-100">
                NepseJournal
              </span>
            </Link>
          </div>

          <h2 className="mt-8 font-bold text-2xl text-zinc-900 leading-9 tracking-tight dark:text-zinc-50">
            Create an account
          </h2>
          <p className="mt-2 text-sm text-zinc-500 leading-6 dark:text-zinc-400">
            Already a member?{" "}
            <Link
              href="/login"
              className="font-semibold text-emerald-600 hover:text-emerald-500 hover:underline dark:text-emerald-500"
            >
              Sign in to your account
            </Link>
          </p>

          <div className="mt-10">
            {/* The existing register form component is inside a Card natively, let's render it */}
            <div className="[&>div]:border-none [&>div]:bg-transparent [&>div]:p-0 [&>div]:shadow-none">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Right Pane - Visual/Testimonial */}
      <div className="relative hidden w-0 flex-1 border-zinc-200 border-l bg-zinc-900 lg:block dark:border-zinc-800 dark:bg-zinc-900">
        <div className="absolute inset-0 h-full w-full object-cover">
          <div className="flex h-full flex-col justify-center px-16 xl:px-24">
            <div className="max-w-xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-800/50 px-3 py-1 font-medium text-xs text-zinc-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
                Join the Community
              </div>
              <h2 className="mb-6 font-bold text-4xl text-white tracking-tight">
                Master your mindset and methodology.
              </h2>
              <p className="mb-10 text-lg text-zinc-400 leading-relaxed">
                "Finding an edge in NEPSE is hard enough. Knowing exactly why
                you take trades and recognizing the bad patterns ensures you
                survive the drawdowns."
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 font-bold text-zinc-400">
                  AR
                </div>
                <div>
                  <div className="font-medium text-white">Anil R.</div>
                  <div className="text-sm text-zinc-500">Swing Trader</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
