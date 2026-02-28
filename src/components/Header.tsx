"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/browse?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/browse");
    }
    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-surface-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-bazaar-600 to-bazaar-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-bazaar-600/20">
                S
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-ember-500 border-2 border-surface-950" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Skill<span className="text-bazaar-400">Bazaar</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/browse"
              className="px-4 py-2 text-sm text-surface-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Browse
            </Link>
            <Link
              href="/agents"
              className="px-4 py-2 text-sm text-surface-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Agents
            </Link>
            <Link
              href="/submit"
              className="px-4 py-2 text-sm text-surface-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Submit
            </Link>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills..."
                className="search-input w-56 pl-9 pr-4 py-2 rounded-lg text-sm text-white placeholder-surface-500"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>
            <Link href="/submit" className="btn-primary text-sm">
              Publish Skill
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-surface-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-white/5 mt-2 pt-4">
            <nav className="flex flex-col gap-1">
              <Link href="/browse" className="px-4 py-2 text-sm text-surface-400 hover:text-white rounded-lg hover:bg-white/5">Browse</Link>
              <Link href="/agents" className="px-4 py-2 text-sm text-surface-400 hover:text-white rounded-lg hover:bg-white/5">Agents</Link>
              <Link href="/submit" className="px-4 py-2 text-sm text-surface-400 hover:text-white rounded-lg hover:bg-white/5">Submit</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
