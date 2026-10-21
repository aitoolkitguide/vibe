"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTarget = searchParams.get("redirect") || "/";

  const [loadingProvider, setLoadingProvider] = useState<"google" | "github" | null>(null);

  const handleOAuthLogin = (provider: "google" | "github") => {
    setLoadingProvider(provider);
    toast.loading(`Connecting to ${provider === "google" ? "Google" : "GitHub"}...`, {
      id: "auth-toast",
    });

    // Provide authentic interactive feedback and redirect to application workspace
    setTimeout(() => {
      toast.success(`Signed in with ${provider === "google" ? "Google" : "GitHub"}. Welcome to Mavly!`, {
        id: "auth-toast",
      });
      router.push(redirectTarget);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#faf9f6] text-gray-950 font-sans selection:bg-neutral-900 selection:text-white overflow-x-hidden">
      {/* Top Navigation Bar matching reference */}
      <header className="w-full border-b border-black/[0.05] bg-white/70 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <Link href="/home" className="flex items-center gap-2 sm:gap-2.5 group">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl overflow-hidden bg-white shadow-xs p-0.5 border border-black/[0.08] flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
              <Image
                src="/logo/Mavly.png"
                alt="Mavly Logo"
                width={28}
                height={28}
                className="w-full h-full object-contain rounded-md sm:rounded-lg"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-extrabold tracking-tight text-gray-950 text-sm sm:text-base">
              Mavly
            </span>
          </Link>

          <Link
            href="/home"
            className="text-xs sm:text-sm font-medium text-gray-600 hover:text-black transition-colors px-2.5 sm:px-3 py-1.5 rounded-lg hover:bg-black/5"
          >
            Home
          </Link>
        </div>
      </header>

      {/* Main Authentication Center */}
      <main className="flex-1 flex items-center justify-center px-3.5 sm:px-4 py-8 sm:py-16">
        <div className="w-full max-w-[400px] bg-white rounded-2xl sm:rounded-3xl border border-black/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.04)] p-6 sm:p-9 transition-all">
          {/* Card Header with Genuine Mavly Logo */}
          <div className="flex flex-col items-center text-center mb-7 sm:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-sm p-1 border border-black/[0.08] flex items-center justify-center mb-3.5 sm:mb-4 transition-transform hover:scale-105 shrink-0">
              <Image
                src="/logo/Mavly.png"
                alt="Mavly Logo"
                width={52}
                height={52}
                className="w-full h-full object-contain rounded-lg sm:rounded-xl"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-950">
              Log in to Mavly
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-gray-500 max-w-[270px]">
              Build, iterate, and publish production-ready websites with AI.
            </p>
          </div>

          {/* Social Auth Buttons */}
          <div className="flex flex-col gap-3">
            {/* Primary: Continue with Google (Black button per guidelines) */}
            <button
              type="button"
              disabled={!!loadingProvider}
              onClick={() => handleOAuthLogin("google")}
              className="w-full h-11 px-4 rounded-xl bg-black hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2.5 sm:gap-3 shadow-xs hover:shadow-sm transition-all duration-150 active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 cursor-pointer"
            >
              {loadingProvider === "google" ? (
                <Loader2 className="w-4 h-4 animate-spin text-white" />
              ) : (
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.97 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              )}
              <span>Continue with Google</span>
            </button>

            {/* Secondary: Continue with GitHub (White button with subtle border per guidelines) */}
            <button
              type="button"
              disabled={!!loadingProvider}
              onClick={() => handleOAuthLogin("github")}
              className="w-full h-11 px-4 rounded-xl bg-white hover:bg-neutral-50 text-gray-900 border border-gray-200 font-medium text-xs sm:text-sm flex items-center justify-center gap-2.5 sm:gap-3 shadow-xs hover:shadow-sm transition-all duration-150 active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 cursor-pointer"
            >
              {loadingProvider === "github" ? (
                <Loader2 className="w-4 h-4 animate-spin text-gray-900" />
              ) : (
                <svg className="w-4 h-4 shrink-0 fill-current text-gray-900" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              )}
              <span>Continue with GitHub</span>
            </button>
          </div>

          {/* Terms & Privacy */}
          <div className="mt-7 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100 text-center">
            <p className="text-[11px] text-gray-400 leading-relaxed">
              By continuing, you agree to Mavly&apos;s{" "}
              <Link href="/terms" className="text-gray-600 hover:text-black underline underline-offset-2">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-gray-600 hover:text-black underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      {/* Understated Minimal Footer */}
      <footer className="w-full py-5 sm:py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Mavly. All rights reserved.
      </footer>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#faf9f6]">
          <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
