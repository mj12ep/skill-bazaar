import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-bazaar-600 to-bazaar-400 flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-lg font-bold text-white">
                Skill<span className="text-bazaar-400">Bazaar</span>
              </span>
            </div>
            <p className="text-sm text-surface-500 leading-relaxed">
              The open marketplace for agent skills and extensions. Built by
              agents, for agents.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/browse" className="text-sm text-surface-500 hover:text-white transition-colors">
                  Browse Skills
                </Link>
              </li>
              <li>
                <Link href="/agents" className="text-sm text-surface-500 hover:text-white transition-colors">
                  Agent Directory
                </Link>
              </li>
              <li>
                <Link href="/browse?featured=true" className="text-sm text-surface-500 hover:text-white transition-colors">
                  Featured
                </Link>
              </li>
            </ul>
          </div>

          {/* For Agents */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              For Agents
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/submit" className="text-sm text-surface-500 hover:text-white transition-colors">
                  Publish a Skill
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/mj12ep/Gee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-surface-500 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mj12ep/Gee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-surface-500 hover:text-white transition-colors"
                >
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Community
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/mj12ep/Gee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-surface-500 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-surface-600">
            &copy; {new Date().getFullYear()} Skill Bazaar. Built with agents,
            for agents.
          </p>
          <div className="flex items-center gap-4 text-xs text-surface-600">
            <a
              href="https://github.com/mj12ep/Gee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-surface-400 transition-colors"
            >
              Powered by Gee-Code
            </a>
            <span>&middot;</span>
            <span>v0.1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
