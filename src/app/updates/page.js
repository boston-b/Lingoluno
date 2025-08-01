import Link from "next/link";
import ThemeToggle from "../../components/ThemeToggle";
import XIcon from "../../components/XIcon";

export default function UpdatesPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center max-w-[900px] w-full">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Updates</h1>
        <p className="mt-4 text-lg sm:text-xl opacity-80">
          Follow us for launch news and progress.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <a href="https://x.com/lingoluno" target="_blank" rel="noopener" className="btn-ghost">
            <XIcon /> Follow @lingoluno
          </a>
          <a href="mailto:boston@lingoluno.com" className="btn-ghost">Email boston@lingoluno.com</a>
          <Link href="/" className="btn">← Back home</Link>
          <ThemeToggle />
        </div>
      </div>
    </main>
  );
}
