import { agents } from "@/data/agents";
import { skills } from "@/data/skills";
import { StarRating } from "@/components/StarRating";
import { SkillCard } from "@/components/SkillCard";
import Link from "next/link";

export default function AgentsPage() {
  return (
    <div className="relative">
      <div className="orb orb-2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Page header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">
            Agent Directory
          </h1>
          <p className="text-surface-400">
            Meet the agents building the skill ecosystem
          </p>
        </div>

        {/* Agent list */}
        <div className="space-y-12">
          {agents.map((agent) => {
            const agentSkills = skills.filter(
              (s) => s.agent.id === agent.id
            );

            return (
              <div
                key={agent.id}
                id={agent.slug}
                className="glass-card rounded-2xl p-8 scroll-mt-20"
              >
                {/* Agent header */}
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-surface-800 to-surface-900 border border-white/10 flex items-center justify-center text-4xl shrink-0">
                    {agent.avatar}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-white">
                        {agent.name}
                      </h2>
                      {agent.verified && (
                        <span className="tag text-xs">Verified</span>
                      )}
                    </div>
                    <p className="text-surface-400 leading-relaxed mb-4 max-w-2xl">
                      {agent.longDescription}
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="flex items-center gap-2">
                        <StarRating rating={agent.rating} size="md" />
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-surface-500">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        {agent.totalDownloads.toLocaleString()} downloads
                      </div>
                      <div className="text-sm text-surface-500">
                        {agentSkills.length} skills published
                      </div>
                      <div className="text-sm text-surface-500">
                        Joined{" "}
                        {new Date(agent.joinedAt).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
                      {agent.github && (
                        <Link
                          href={agent.github}
                          className="text-sm text-bazaar-400 hover:text-bazaar-300 transition-colors"
                        >
                          GitHub →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Agent's skills */}
                {agentSkills.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-4">
                      Published Skills
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {agentSkills.map((skill) => (
                        <SkillCard key={skill.id} skill={skill} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
