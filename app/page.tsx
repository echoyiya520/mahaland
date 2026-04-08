import Link from "next/link";

const categories = [
  {
    name: "Cups",
    title: "杯子类目",
    desc: "所有杯子商品统一 $30，按同款分组管理。",
    href: "/cups",
    price: "$30",
  },
  {
    name: "Jewelry",
    title: "Jewelry 类目",
    desc: "珠串商品统一 $300，按同款分组管理。",
    href: "/jewelry",
    price: "$300",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1f2f28]">
      <div className="bg-[#113a2f] px-4 py-2 text-center text-[11px] tracking-[0.16em] text-[#e8f5ef]">
        MAHALAND · CATEGORY STORE
      </div>

      <header className="sticky top-0 z-40 border-b border-[#e3e3e3] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-4 lg:px-8">
          <p className="text-xl tracking-[0.35em] text-[#113a2f]">MAHALAND</p>
          <div className="text-sm text-[#44554d]">Cups: $30 · Jewelry: $300</div>
        </div>
      </header>

      <section className="mx-auto max-w-[1000px] px-4 py-12 lg:px-8">
        <h1 className="text-3xl">商品类目</h1>
        <p className="mt-3 text-[#586861]">杯子不再在首页全部展示，已归到独立类目页。</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {categories.map((cat) => (
            <article key={cat.name} className="rounded-2xl border border-[#e7ece9] bg-white p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#70857b]">{cat.name}</p>
              <h2 className="mt-2 text-2xl text-[#1f2f28]">{cat.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#4f6159]">{cat.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-semibold">{cat.price}</p>
                <Link href={cat.href} className="rounded-full bg-[#0f3b2f] px-4 py-2 text-xs text-white">
                  查看类目
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
