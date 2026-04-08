import Image from "next/image";
import { promises as fs } from "node:fs";
import path from "node:path";

type ProductItem = {
  id: string;
  name: string;
  image: string;
  group: string;
  price: string;
  category: "Cups" | "Jewelry";
};

async function getItems(options: {
  folder: string;
  prefix: string;
  groupLabel: string;
  price: string;
  category: "Cups" | "Jewelry";
}): Promise<ProductItem[]> {
  const dir = path.join(process.cwd(), "public", options.folder);
  const files = await fs.readdir(dir);

  const images = files
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const groupSize = 4;

  return images.map((file, index) => {
    const groupIndex = Math.floor(index / groupSize) + 1;
    const itemIndex = (index % groupSize) + 1;
    const group = `${options.groupLabel} ${String(groupIndex).padStart(2, "0")}`;

    return {
      id: `${options.prefix}-${String(index + 1).padStart(3, "0")}`,
      name: `${group} · 款式 ${itemIndex}`,
      image: `/${options.folder}/${file}`,
      group,
      price: options.price,
      category: options.category,
    };
  });
}

function ProductGrid({ title, subtitle, items }: { title: string; subtitle: string; items: ProductItem[] }) {
  return (
    <section className="mx-auto max-w-[1320px] px-4 py-8 lg:px-8">
      <div className="mb-6 flex items-end justify-between border-b border-[#e8e8e8] pb-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#6d8378]">{subtitle}</p>
          <h2 className="mt-2 text-3xl">{title}</h2>
        </div>
        <p className="text-sm text-[#5d6b64]">共 {items.length} 张商品图</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article key={item.id} className="rounded-2xl border border-[#e7ece9] bg-white p-3">
            <div className="relative aspect-[1156/1400] overflow-hidden rounded-xl bg-[#f6faf8]">
              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-[#70857b]">{item.category} · {item.group}</p>
            <h3 className="mt-1 text-sm leading-6 text-[#2c3a34]">{item.name}</h3>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-lg font-semibold text-[#1f2f28]">{item.price}</p>
              <button className="rounded-full bg-[#0f3b2f] px-3 py-1.5 text-xs text-white">Add</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default async function Home() {
  const [cups, jewelry] = await Promise.all([
    getItems({ folder: "cups", prefix: "cup", groupLabel: "同款杯子", price: "$30", category: "Cups" }),
    getItems({ folder: "jewelry", prefix: "jewelry", groupLabel: "同款珠串", price: "$300", category: "Jewelry" }),
  ]);

  return (
    <main className="min-h-screen bg-white text-[#1f2f28]">
      <div className="bg-[#113a2f] px-4 py-2 text-center text-[11px] tracking-[0.16em] text-[#e8f5ef]">
        MAHALAND · CUPS & JEWELRY LIVE NOW
      </div>

      <header className="sticky top-0 z-40 border-b border-[#e3e3e3] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-4 lg:px-8">
          <p className="text-xl tracking-[0.35em] text-[#113a2f]">MAHALAND</p>
          <div className="text-sm text-[#44554d]">Cups: $30 · Jewelry: $300</div>
        </div>
      </header>

      <ProductGrid title="杯子已上架（统一 $30）" subtitle="cups live now" items={cups} />
      <ProductGrid title="Jewelry 类目已上架（统一 $300）" subtitle="jewelry live now" items={jewelry} />
    </main>
  );
}
