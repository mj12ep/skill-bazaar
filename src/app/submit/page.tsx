import Link from "next/link";

export default function SubmitPage() {
  return (
    <div className="relative">
      <div className="orb orb-3" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-3">
            Publish a Skill
          </h1>
          <p className="text-surface-400 max-w-xl mx-auto">
            Share your agent capabilities with the community. Every skill you
            publish makes the entire ecosystem more powerful.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-12">
          {[
            {
              step: "1",
              title: "Build your skill",
              description:
                "Create a skill using the Gee-Code framework. Define your SKILL.md with frontmatter, add scripts, references, and any assets your skill needs.",
              code: `# Initialize a new skill
gee skill init my-awesome-skill

# Edit SKILL.md with your instructions
# Add scripts to scripts/
# Add references to references/`,
            },
            {
              step: "2",
              title: "Test and validate",
              description:
                "Run your skill through validation to ensure it meets quality standards. The validator checks frontmatter, script syntax, and directory structure.",
              code: `# Validate your skill
gee skill validate .gee/skills/my-awesome-skill

# Test it locally
/my-awesome-skill`,
            },
            {
              step: "3",
              title: "Publish to the Bazaar",
              description:
                "Sync your skill to the marketplace. It will be reviewed by the community and made available for other agents to install.",
              code: `# Publish your skill
gee skill sync my-awesome-skill

# Or use the CLI
gee skill publish my-awesome-skill`,
            },
          ].map((item) => (
            <div key={item.step} className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bazaar-600 to-bazaar-400 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-surface-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="install-cmd">
                    <pre className="text-xs text-bazaar-300 whitespace-pre-wrap">
                      {item.code}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill structure */}
        <div className="glass-card rounded-xl p-8 mb-12">
          <h2 className="text-lg font-semibold text-white mb-4">
            Skill Structure
          </h2>
          <div className="install-cmd">
            <pre className="text-xs text-surface-300 whitespace-pre">
{`.gee/skills/my-skill/
├── SKILL.md          # Instructions & frontmatter
├── scripts/          # Python helper scripts
│   ├── analyze.py
│   └── transform.py
├── references/       # Documentation files
│   └── api-docs.md
└── assets/           # Binary assets
    └── template.png`}
            </pre>
          </div>
        </div>

        {/* SKILL.md example */}
        <div className="glass-card rounded-xl p-8 mb-12">
          <h2 className="text-lg font-semibold text-white mb-4">
            SKILL.md Template
          </h2>
          <div className="install-cmd">
            <pre className="text-xs text-surface-300 whitespace-pre">
{`---
name: my-awesome-skill
description: A brief description of what this skill does
version: 1.0.0
tags:
  - automation
  - research
agents:
  - name: helper-agent
    description: Assists with specific subtasks
    system_prompt: You are a specialized helper...
---

# My Awesome Skill

## When to Use
Describe when this skill should be invoked...

## Instructions
Step-by-step instructions for the AI to follow...

## Output Format
Define the expected output structure...`}
            </pre>
          </div>
        </div>

        {/* Guidelines */}
        <div className="glass-card rounded-xl p-8">
          <h2 className="text-lg font-semibold text-white mb-4">
            Publishing Guidelines
          </h2>
          <ul className="space-y-3">
            {[
              "Skills must include clear, specific instructions in SKILL.md",
              "Include a meaningful description (max 1024 characters)",
              "Tag your skill with relevant categories for discoverability",
              "Test your skill thoroughly before publishing",
              "Version your skill using semantic versioning (e.g., 1.0.0)",
              "Don't include secrets, API keys, or sensitive data in your skill files",
              "Provide examples of expected input and output",
              "Keep scripts focused — one script per distinct function",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-bazaar-400 mt-0.5">•</span>
                <span className="text-sm text-surface-400">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-surface-500 text-sm mb-4">
            Ready to publish? Start building with the Gee-Code CLI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/browse" className="btn-secondary">
              ← Browse Skills
            </Link>
            <a
              href="https://github.com/mj12ep/Gee"
              className="btn-primary inline-block text-center"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
