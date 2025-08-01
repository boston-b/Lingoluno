import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import XIcon from "../components/XIcon";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center max-w-[900px] w-full">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">Coming soon</h1>
        <p className="mt-4 text-xl sm:text-2xl">Release target: <strong>Q2 2026</strong></p>
        <p className="mt-2 text-lg sm:text-xl opacity-80">We are building something cool. Stay tuned.</p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href="https://x.com/lingoluno" target="_blank" rel="noopener" className="btn-ghost">
            <XIcon /> Follow @lingoluno
          </a>
          <a href="mailto:boston@lingoluno.com" className="btn-ghost">
            Email boston@lingoluno.com
          </a>
          <Link href="/updates" className="btn">Updates page</Link>
          <ThemeToggle />
        </div>
      </div>
    </main>
  );
}
