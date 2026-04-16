import Link from "next/link";

const categories = [
  { name: "Home", href: "/" },
  { name: "Living", href: "/living" },
  { name: "Wellness", href: "/wellness" },
  { name: "Beauty", href: "/beauty" },
  { name: "Clothing", href: "/clothing" },
  { name: "Accessories", href: "/accessories" },
  { name: "Art", href: "/art" },
  { name: "Gifts", href: "/gifts" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1f2f28]">
      <div className="bg-[#113a2f] px-4 py-2 text-center text-[11px] tracking-[0.16em] text-[#e8f5ef]">
        MAHALAND · NEW CATEGORY STRUCTURE
      </div>

      <header className="sticky top-0 z-40 border-b border-[#e3e3e3] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-4 lg:px-8">
          <p className="text-xl tracking-[0.35em] text-[#113a2f]">MAHALAND</p>
          <div className="text-sm text-[#44554d]">Rebuilding catalog</div>
        </div>
      </header>

      <section className="mx-auto max-w-[1100px] px-4 py-12 lg:px-8">
        <h1 className="text-3xl">Store Categories</h1>
        <p className="mt-3 text-[#586861]">已按你给的结构重建主类目，接下来可以逐类上新。</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <article key={cat.name} className="rounded-2xl border border-[#e7ece9] bg-white p-6">
              <h2 className="text-xl text-[#1f2f28]">{cat.name}</h2>
              <div className="mt-4">
                <Link href={cat.href} className="rounded-full bg-[#0f3b2f] px-4 py-2 text-xs text-white">
                  Enter
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
