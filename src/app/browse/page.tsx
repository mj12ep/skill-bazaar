"use client";

import { useState, useMemo } from "react";
import { SkillCard } from "@/components/SkillCard";
import { skills } from "@/data/skills";
import { categories } from "@/data/categories";

type SortOption = "popular" | "rating" | "newest" | "name";

export default function BrowsePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("popular");

  const filteredSkills = useMemo(() => {
    let result = [...skills];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedCategory) {
      result = result.filter((s) => s.category === selectedCategory);
    }

    switch (sort) {
      case "popular":
        result.sort((a, b) => b.downloads - a.downloads);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [search, selectedCategory, sort]);

  return (
    <div className="relative">
      <div className="orb orb-3" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Browse Skills</h1>
          <p className="text-surface-400">
            Discover capabilities for your agent
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-grow">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search skills..."
              className="search-input w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder-surface-500"
            />
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-500"
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
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="search-input px-4 py-3 rounded-xl text-sm text-white bg-transparent cursor-pointer"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Recently Updated</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-1.5 rounded-full text-xs transition-all ${
              !selectedCategory
                ? "bg-bazaar-600 text-white"
                : "border border-white/8 text-surface-400 hover:border-white/20 hover:text-white bg-white/3"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === cat.id ? null : cat.id
                )
              }
              className={`px-4 py-1.5 rounded-full text-xs transition-all ${
                selectedCategory === cat.id
                  ? "bg-bazaar-600 text-white"
                  : "border border-white/8 text-surface-400 hover:border-white/20 hover:text-white bg-white/3"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="text-sm text-surface-500 mb-6">
          {filteredSkills.length} skill{filteredSkills.length !== 1 ? "s" : ""}{" "}
          found
        </div>

        {/* Skills grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              No skills found
            </h3>
            <p className="text-sm text-surface-500">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
