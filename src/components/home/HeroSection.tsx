"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-[#faf9f6]/60">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-b from-black/[0.02] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Website Cards Gallery (Screenshots / Showcase) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden max-w-[1700px] mx-auto select-none hidden lg:block">
        {/* === TOP-LEFT: Bakery Card === */}
        <div
          className="absolute -top-4 -left-12 xl:left-4 w-[340px] xl:w-[380px] rounded-2xl bg-white border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-3.5 transform -rotate-8 hover:rotate-0 transition-transform duration-500 opacity-90 xl:opacity-100"
          style={{ transform: "rotate(-7deg)" }}
        >
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-black/[0.04]">
            <div className="flex flex-col">
              <span className="font-serif italic font-bold text-base text-stone-900 tracking-tight leading-none">
                MAVLY Gigue
              </span>
              <span className="text-[10px] text-stone-500 font-medium">
                Artisanal Bakery & Bakehouse
              </span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-medium">
              Explore Menu
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-28 rounded-xl bg-amber-50/80 border border-amber-200/40 p-2 flex flex-col justify-end overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
              <div className="w-8 h-8 rounded-full bg-amber-100 mx-auto mb-2 flex items-center justify-center text-xs">☕</div>
              <span className="relative text-[10px] font-semibold text-white">Iced Latte</span>
            </div>
            <div className="h-28 rounded-xl bg-amber-100/70 border border-amber-300/40 p-2 flex flex-col justify-end overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
              <div className="w-8 h-8 rounded-full bg-amber-200 mx-auto mb-2 flex items-center justify-center text-xs">🥐</div>
              <span className="relative text-[10px] font-semibold text-white">Cinnamon Roll</span>
            </div>
            <div className="h-28 rounded-xl bg-stone-100 border border-stone-200 p-2 flex flex-col justify-end overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
              <div className="w-8 h-8 rounded-full bg-stone-200 mx-auto mb-2 flex items-center justify-center text-xs">🥖</div>
              <span className="relative text-[10px] font-semibold text-white">Warm Bread</span>
            </div>
          </div>
        </div>

        {/* === MIDDLE-LEFT: Fitness Card === */}
        <div
          className="absolute top-64 -left-16 xl:-left-6 w-[340px] xl:w-[370px] rounded-2xl bg-stone-950 text-white border border-stone-800 shadow-[0_22px_55px_rgba(0,0,0,0.18)] p-4 transform -rotate-3 transition-transform duration-500 opacity-90 xl:opacity-100"
          style={{ transform: "rotate(-4deg)" }}
        >
          <div className="flex items-center justify-between text-[10px] text-stone-400 mb-2">
            <span className="font-semibold text-white tracking-wider uppercase text-[9px]">
              Roy Pratt · Fitness
            </span>
            <div className="flex gap-2">
              <span>Home</span>
              <span>Plans</span>
              <span>Contact</span>
            </div>
          </div>
          <div className="h-28 rounded-xl bg-stone-900 border border-stone-800 p-3 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
            <span className="text-sm font-extrabold tracking-tight leading-tight uppercase max-w-[200px] relative z-10">
              It doesn&apos;t get easier. <br />
              <span className="text-orange-500">You get better.</span>
            </span>
            <div className="flex gap-2 relative z-10">
              <span className="text-[10px] px-2.5 py-1 rounded-md bg-white text-stone-950 font-bold">
                My Plans ↗
              </span>
              <span className="text-[10px] px-2.5 py-1 rounded-md border border-stone-700 text-stone-300">
                Contact
              </span>
            </div>
          </div>
        </div>

        {/* === BOTTOM-LEFT: Commute & Business Cards === */}
        <div
          className="absolute bottom-6 -left-10 xl:left-2 w-[310px] xl:w-[340px] rounded-2xl bg-white border border-black/[0.08] shadow-[0_18px_45px_rgba(0,0,0,0.08)] p-3.5 transform -rotate-5"
          style={{ transform: "rotate(-5deg)" }}
        >
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-[11px] font-semibold text-gray-900">Nimbus Commute</span>
          </div>
          <div className="h-20 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 text-white p-3 flex flex-col justify-end">
            <span className="text-xs font-bold">Commute with Purpose</span>
            <span className="text-[9px] text-slate-400 mt-0.5">Track your daily transit & impact</span>
          </div>
        </div>

        {/* === TOP-RIGHT: Advice & Sprout Plant Shop === */}
        <div
          className="absolute -top-4 -right-12 xl:right-4 w-[340px] xl:w-[380px] rounded-2xl bg-white border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-3.5 transform rotate-6 hover:rotate-0 transition-transform duration-500 opacity-90 xl:opacity-100"
          style={{ transform: "rotate(6deg)" }}
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/[0.04]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="font-semibold text-xs text-stone-900">Sprout Boutique</span>
            </div>
            <span className="text-[10px] font-medium text-stone-500">Shop Plants</span>
          </div>
          <div className="h-24 rounded-xl bg-gradient-to-br from-emerald-900 via-stone-900 to-stone-950 text-white p-3.5 flex flex-col justify-center">
            <span className="text-xs sm:text-sm font-semibold tracking-tight text-emerald-100">
              Is There Such a Thing as Too Many Plants?
            </span>
            <span className="text-[10px] text-emerald-300/80 mt-1">Discover rare tropical varieties</span>
          </div>
        </div>

        {/* === MIDDLE-RIGHT: Auto Repair Card === */}
        <div
          className="absolute top-64 -right-16 xl:-right-6 w-[340px] xl:w-[370px] rounded-2xl bg-white border border-black/[0.08] shadow-[0_22px_55px_rgba(0,0,0,0.12)] p-4 transform rotate-4 transition-transform duration-500 opacity-90 xl:opacity-100"
          style={{ transform: "rotate(4deg)" }}
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/[0.04]">
            <span className="font-bold text-[11px] text-gray-900 tracking-wider">
              SANDERS & YOUNG
            </span>
            <span className="text-[9px] text-gray-500 font-medium uppercase tracking-wide">
              Auto Care
            </span>
          </div>
          <div className="rounded-xl border border-black/[0.06] overflow-hidden">
            <div className="bg-orange-600 text-white p-3 flex flex-col">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-orange-200">
                Certified Service
              </span>
              <span className="text-base font-extrabold tracking-tight uppercase leading-none mt-1">
                Auto Repair You Can Trust
              </span>
            </div>
            <div className="bg-stone-50 p-2.5 flex items-center justify-between text-[10px] text-gray-600">
              <span>Brakes · Diagnostics · Tires</span>
              <span className="font-semibold text-orange-600">Schedule →</span>
            </div>
          </div>
        </div>

        {/* === BOTTOM-RIGHT: Architecture & EV Mobility === */}
        <div
          className="absolute bottom-6 -right-10 xl:right-2 w-[310px] xl:w-[340px] rounded-2xl bg-white border border-black/[0.08] shadow-[0_18px_45px_rgba(0,0,0,0.08)] p-3.5 transform rotate-5"
          style={{ transform: "rotate(5deg)" }}
        >
          <div className="flex items-center justify-between text-[10px] text-stone-500 mb-2">
            <span className="font-semibold text-stone-900">LA PERLA</span>
            <span>52 Brook St.</span>
          </div>
          <div className="h-20 rounded-xl bg-gradient-to-r from-stone-900 to-stone-800 text-white p-3 flex flex-col justify-end">
            <span className="text-xs font-serif font-bold">The Future of Mobility</span>
            <span className="text-[9px] text-stone-400 mt-0.5">Architectural living & zero-emissions transit</span>
          </div>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
        {/* Mavly Brand Logo */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-md p-1.5 border border-black/[0.08] flex items-center justify-center transition-transform hover:scale-105 duration-200">
            <Image
              src="/logo/Mavly.png"
              alt="Mavly Logo"
              width={72}
              height={72}
              className="w-full h-full object-contain rounded-xl sm:rounded-2xl"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-950 leading-[1.12] max-w-2xl mx-auto">
          Build Websites with AI. <br className="hidden sm:inline" />
          No Coding Required.
        </h1>

        {/* Subheading */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-[#2563eb] font-normal leading-relaxed max-w-xl mx-auto">
          Mavly is an AI website builder that turns your ideas into beautiful, functional websites. We don&apos;t make websites. We make memories.
        </p>

        {/* Authentication Buttons directly below the subheading */}
        <div className="mt-8 flex flex-col items-center gap-3 w-full max-w-sm mx-auto">
          {/* Button 1: Continue with Google */}
          <Link
            href="/login?provider=google"
            className="w-full h-12 rounded-full bg-black hover:bg-neutral-800 text-white font-medium text-sm flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
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
            <span>Continue with Google</span>
          </Link>

          {/* Button 2: Continue with GitHub */}
          <Link
            href="/login?provider=github"
            className="w-full h-12 rounded-full bg-white hover:bg-neutral-50 text-gray-900 border border-gray-200 font-medium text-sm flex items-center justify-center gap-3 shadow-xs hover:shadow-sm transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            <svg className="w-4 h-4 shrink-0 fill-current text-gray-900" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>Continue with GitHub</span>
          </Link>

          {/* Legal Notice */}
          <p className="text-xs text-gray-500 text-center mt-3">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
