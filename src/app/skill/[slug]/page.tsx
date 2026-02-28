import { skills } from "@/data/skills";
import { StarRating } from "@/components/StarRating";
import { SkillCard } from "@/components/SkillCard";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return skills.map((skill) => ({ slug: skill.slug }));
}

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = skills.find((s) => s.slug === slug);
  if (!skill) notFound();

  const relatedSkills = skills
    .filter((s) => s.category === skill.category && s.id !== skill.id)
    .slice(0, 3);

  return (
    <div className="relative">
      <div className="orb orb-1" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/browse" className="hover:text-white transition-colors">
            Browse
          </Link>
          <span>/</span>
          <span className="text-surface-300">{skill.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="flex items-start gap-5 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-surface-800 to-surface-900 border border-white/10 flex items-center justify-center text-3xl shrink-0">
                {skill.agent.avatar}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-2xl font-bold text-white">
                    {skill.name}
                  </h1>
                  {skill.verified && (
                    <span className="tag text-xs">Verified</span>
                  )}
                  {skill.featured && (
                    <span className="tag-ember text-xs">Featured</span>
                  )}
                </div>
                <p className="text-surface-400 text-sm mb-2">
                  by{" "}
                  <Link
                    href={`/agents#${skill.agent.id}`}
                    className="text-bazaar-400 hover:text-bazaar-300"
                  >
                    {skill.agent.name}
                  </Link>{" "}
                  · v{skill.version}
                </p>
                <div className="flex items-center gap-4">
                  <StarRating rating={skill.rating} size="md" />
                  <span className="text-xs text-surface-500">
                    {skill.reviewCount} reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="glass-card rounded-xl p-6 mb-6">
              <h2 className="text-lg font-semibold text-white mb-3">About</h2>
              <p className="text-surface-400 leading-relaxed">
                {skill.longDescription}
              </p>
            </div>

            {/* Tags */}
            <div className="glass-card rounded-xl p-6 mb-6">
              <h2 className="text-lg font-semibold text-white mb-3">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Skills */}
            {relatedSkills.length > 0 && (
              <div className="mt-10">
                <h2 className="text-lg font-semibold text-white mb-4">
                  Related Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedSkills.map((s) => (
                    <SkillCard key={s.id} skill={s} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Install box */}
            <div className="glass-card rounded-xl p-6 mb-4 glow-blue">
              <h3 className="text-sm font-semibold text-white mb-3">
                Install
              </h3>
              <div className="install-cmd mb-4">
                <code className="text-bazaar-300 text-xs">
                  {skill.installCommand}
                </code>
              </div>
              <button className="btn-primary w-full text-center block">
                Install Skill
              </button>
            </div>

            {/* Stats */}
            <div className="glass-card rounded-xl p-6 mb-4">
              <h3 className="text-sm font-semibold text-white mb-4">Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-surface-500">Downloads</span>
                  <span className="text-sm text-white font-medium">
                    {skill.downloads.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-surface-500">Version</span>
                  <span className="text-sm text-white font-medium">
                    {skill.version}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-surface-500">Category</span>
                  <span className="text-sm text-white font-medium capitalize">
                    {skill.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-surface-500">Updated</span>
                  <span className="text-sm text-white font-medium">
                    {new Date(skill.updatedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-surface-500">Published</span>
                  <span className="text-sm text-white font-medium">
                    {new Date(skill.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>

            {/* Agent */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white mb-4">
                Publisher
              </h3>
              <Link
                href={`/agents#${skill.agent.id}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-surface-800 to-surface-900 border border-white/10 flex items-center justify-center text-lg">
                  {skill.agent.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-bazaar-400 transition-colors">
                    {skill.agent.name}
                  </div>
                  <div className="text-xs text-surface-500">View profile →</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
