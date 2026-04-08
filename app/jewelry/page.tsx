import Link from "next/link";

const categories = [
  {
    key: "jade",
    title: "Jade 珠串",
    desc: "现有珠串已归到 Jade 类目",
    href: "/jewelry/jade",
    price: "$300",
  },
  {
    key: "pearl",
    title: "Pearl 珍珠",
    desc: "将从 BEIPINGLIFESTYLE 采集贴图后上架到此类目",
    href: "/jewelry/pearl",
    price: "$300",
  },
];

export default function JewelryIndexPage() {
  return (
    <main className="min-h-screen bg-white p-6 text-[#1f2f28] lg:p-8">
      <h1 className="text-3xl">Jewelry 类目</h1>
      <p className="mt-2 text-sm text-[#5d6b64]">已拆分为 Jade / Pearl 两个子类目</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {categories.map((cat) => (
          <article key={cat.key} className="rounded-2xl border border-[#e7ece9] bg-white p-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#70857b]">{cat.key}</p>
            <h2 className="mt-2 text-2xl">{cat.title}</h2>
            <p className="mt-2 text-sm text-[#5d6b64]">{cat.desc}</p>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-lg font-semibold">{cat.price}</p>
              <Link href={cat.href} className="rounded-full bg-[#0f3b2f] px-4 py-2 text-xs text-white">
                进入类目
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
