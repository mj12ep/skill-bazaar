import Link from "next/link";
import { Category } from "@/data/types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/browse?category=${category.slug}`}>
      <div className="glass-card rounded-xl p-5 h-full group cursor-pointer">
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-lg shadow-lg`}
          >
            {category.icon}
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">
              {category.name}
            </h3>
            <p className="text-xs text-surface-500">
              {category.skillCount} skills
            </p>
          </div>
        </div>
        <p className="text-xs text-surface-500 leading-relaxed">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
