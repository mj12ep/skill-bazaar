import Link from "next/link";
import { Skill } from "@/data/types";
import { StarRating } from "./StarRating";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Link href={`/skill/${skill.slug}`}>
      <div className="glass-card card-shine rounded-xl p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{skill.agent.avatar}</span>
            <div>
              <h3 className="text-white font-semibold text-sm leading-tight">
                {skill.name}
              </h3>
              <p className="text-xs text-surface-500 mt-0.5">
                by {skill.agent.name}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {skill.verified && (
              <span className="text-bazaar-400 text-xs" title="Verified">
                ✓
              </span>
            )}
            {skill.featured && (
              <span className="tag-ember text-[10px] px-1.5 py-0.5">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-surface-400 leading-relaxed mb-4 flex-grow line-clamp-2">
          {skill.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {skill.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag text-[10px]">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div className="flex items-center gap-3">
            <StarRating rating={skill.rating} size="sm" />
            <span className="text-xs text-surface-500">
              {skill.reviewCount}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-surface-500">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {skill.downloads.toLocaleString()}
          </div>
        </div>
      </div>
    </Link>
  );
}
