import Image from "next/image";
import { promises as fs } from "node:fs";
import path from "node:path";

type Item = { id: string; name: string; image: string; group: string; price: string };

async function getItems(): Promise<Item[]> {
  const dir = path.join(process.cwd(), "public", "cups");
  const files = await fs.readdir(dir);
  const images = files.filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f)).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return images.map((file, i) => {
    const g = Math.floor(i / 4) + 1;
    return {
      id: `cup-${String(i + 1).padStart(3, "0")}`,
      name: `同款杯子 ${String(g).padStart(2, "0")} · 款式 ${(i % 4) + 1}`,
      image: `/cups/${file}`,
      group: `同款杯子 ${String(g).padStart(2, "0")}`,
      price: "$30",
    };
  });
}

export default async function CupsPage() {
  const items = await getItems();
  return (
    <main className="min-h-screen bg-white text-[#1f2f28] p-6 lg:p-8">
      <h1 className="text-3xl">Cups 类目（统一 $30）</h1>
      <p className="mt-2 text-sm text-[#5d6b64]">共 {items.length} 件</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article key={item.id} className="rounded-2xl border border-[#e7ece9] bg-white p-3">
            <div className="relative aspect-[1156/1400] overflow-hidden rounded-xl bg-[#f6faf8]">
              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-[#70857b]">{item.group}</p>
            <h2 className="mt-1 text-sm leading-6">{item.name}</h2>
            <p className="mt-2 text-lg font-semibold">{item.price}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
