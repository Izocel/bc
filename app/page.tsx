"use client";

import { BusinessCard, TechStackCarousel, ClientsCarousel, GlobalStyles } from './components';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <BusinessCard />
        <TechStackCarousel />
        <ClientsCarousel />
      </div>
      <GlobalStyles />
    </div>
  );
}
