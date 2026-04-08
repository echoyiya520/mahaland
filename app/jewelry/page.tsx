import Image from "next/image";
import { promises as fs } from "node:fs";
import path from "node:path";

type Item = {
  id: string;
  name: string;
  images: string[];
  group: string;
  price: string;
};

async function getItems(): Promise<Item[]> {
  const dir = path.join(process.cwd(), "public", "jewelry");
  const files = await fs.readdir(dir);
  const images = files
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  // 每 2 张图作为 1 个珠串商品（两张介绍图）
  const pairSize = 2;
  const items: Item[] = [];

  for (let i = 0; i < images.length; i += pairSize) {
    const pair = images.slice(i, i + pairSize);
    const groupIndex = Math.floor(i / pairSize) + 1;
    const group = `同款珠串 ${String(groupIndex).padStart(2, "0")}`;

    items.push({
      id: `jewelry-${String(groupIndex).padStart(3, "0")}`,
      name: `${group} · 介绍图 ${pair.length} 张`,
      images: pair.map((file) => `/jewelry/${file}`),
      group,
      price: "$300",
    });
  }

  return items;
}

export default async function JewelryPage() {
  const items = await getItems();
  return (
    <main className="min-h-screen bg-white p-6 text-[#1f2f28] lg:p-8">
      <h1 className="text-3xl">Jewelry 类目（统一 $300）</h1>
      <p className="mt-2 text-sm text-[#5d6b64]">共 {items.length} 个珠串商品（每个商品固定 2 张介绍图，单卡展示）</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <article key={item.id} className="rounded-2xl border border-[#e7ece9] bg-white p-3">
            <div className="grid grid-cols-2 gap-2">
              {item.images.map((img, idx) => (
                <div key={img} className="relative aspect-[1156/1400] overflow-hidden rounded-xl bg-[#f6faf8]">
                  <Image
                    src={img}
                    alt={`${item.name} 图 ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
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
