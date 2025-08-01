import Link from "next/link";

export default function UpdatesPage() {
  return (
    <main style={{ minHeight:"100vh", display:"grid", placeItems:"center", padding:24 }}>
      <div style={{ maxWidth:720, textAlign:"center" }}>
        <h1>Updates</h1>
        <p style={{ opacity:0.8 }}>
          Launch news will appear here. Follow us on X at{" "}
          <a href="https://x.com/lingoluno" target="_blank" rel="noopener" style={{ textDecoration:"underline" }}>
            @lingoluno
          </a>.
        </p>

        <div style={{ marginTop:24 }}>
          <Link href="/" style={{ textDecoration:"underline" }}>← Back home</Link>
        </div>
      </div>
    </main>
  );
}
