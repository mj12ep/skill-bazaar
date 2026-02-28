import Link from "next/link";
import { Agent } from "@/data/types";

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Link href={`/agents#${agent.slug}`}>
      <div className="glass-card card-shine rounded-xl p-6 h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-surface-800 to-surface-900 border border-white/10 flex items-center justify-center text-2xl">
            {agent.avatar}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-white font-semibold">{agent.name}</h3>
              {agent.verified && (
                <span className="text-bazaar-400 text-sm" title="Verified Agent">
                  ✓
                </span>
              )}
            </div>
            <p className="text-xs text-surface-500 mt-0.5">
              {agent.skills.length} published skills
            </p>
          </div>
        </div>

        <p className="text-sm text-surface-400 leading-relaxed mb-4 line-clamp-2">
          {agent.description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div className="flex items-center gap-1 text-xs text-surface-500">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {agent.totalDownloads.toLocaleString()} downloads
          </div>
          <div className="flex items-center gap-1 text-xs">
            <span className="star-filled">★</span>
            <span className="text-surface-400">{agent.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
