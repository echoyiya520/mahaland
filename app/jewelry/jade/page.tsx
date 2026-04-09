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
  const dir = path.join(process.cwd(), "public", "jewelry-jade");
  const files = await fs.readdir(dir);
  const images = files
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const curatedGroups: string[][] = [
    ["jewelry-011.jpg", "jewelry-012.jpg", "jewelry-014.jpg"],
    ["jewelry-016.jpg", "jewelry-017.jpg", "jewelry-019.jpg"],
    ["jewelry-020.jpg", "jewelry-021.jpg"], // 用户确认这两张是同一款
    ["jewelry-022.jpg"],
    ["jewelry-024.jpg", "jewelry-025.jpg"],
    ["jewelry-001.jpg", "jewelry-002.jpg", "jewelry-003.jpg"],
    ["jewelry-005.jpg", "jewelry-006.jpg", "jewelry-007.jpg"],
    ["jewelry-008.jpg", "jewelry-009.jpg", "jewelry-010.jpg"],
    ["jewelry-015.jpg"],
    ["jewelry-018.jpg"],
    ["jewelry-023.jpg"],
  ];

  const existing = new Set(images);
  const grouped = curatedGroups.map((g) => g.filter((f) => existing.has(f))).filter((g) => g.length > 0);
  const used = new Set(grouped.flat());
  const leftovers = images.filter((f) => !used.has(f));
  for (const f of leftovers) grouped.push([f]);

  return grouped.map((groupImages, idx) => ({
    id: `jade-${String(idx + 1).padStart(3, "0")}`,
    name: `Jade 同款 ${String(idx + 1).padStart(2, "0")} · 介绍图 ${groupImages.length} 张`,
    images: groupImages.map((file) => `/jewelry-jade/${file}`),
    group: `Jade 同款 ${String(idx + 1).padStart(2, "0")}`,
    price: "$300",
  }));
}

export default async function JadePage() {
  const items = await getItems();
  return (
    <main className="min-h-screen bg-white p-6 text-[#1f2f28] lg:p-8">
      <h1 className="text-3xl">Jade 类目（统一 $300）</h1>
      <p className="mt-2 text-sm text-[#5d6b64]">共 {items.length} 个 Jade 商品</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
        {items.map((item) => (
          <article key={item.id} className="rounded-2xl border border-[#e7ece9] bg-white p-3">
            <div className="grid grid-cols-3 gap-2">
              {item.images.map((img, idx) => (
                <div key={img} className="relative aspect-[1156/1400] overflow-hidden rounded-xl bg-[#f6faf8]">
                  <Image src={img} alt={`${item.name} 图 ${idx + 1}`} fill className="object-cover" sizes="(max-width: 1024px) 33vw, 20vw" />
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
