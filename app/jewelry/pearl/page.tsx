import Image from "next/image";
import { promises as fs } from "node:fs";
import path from "node:path";

type Item = { id: string; name: string; image: string; price: string };

async function getPearlItems(): Promise<Item[]> {
  const dir = path.join(process.cwd(), "public", "jewelry-pearl");
  const files = await fs.readdir(dir);
  const images = files
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return images.map((file, i) => ({
    id: `pearl-${String(i + 1).padStart(3, "0")}`,
    name: `Pearl 珍珠 ${String(i + 1).padStart(2, "0")}`,
    image: `/jewelry-pearl/${file}`,
    price: "$300",
  }));
}

export default async function PearlPage() {
  const items = await getPearlItems();

  return (
    <main className="min-h-screen bg-white p-6 text-[#1f2f28] lg:p-8">
      <h1 className="text-3xl">Pearl 类目（统一 $300）</h1>
      <p className="mt-2 text-sm text-[#5d6b64]">
        当前共 {items.length} 张图。下一步将从微信公众号 BEIPINGLIFESTYLE 采集贴图并归入本类目。
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article key={item.id} className="rounded-2xl border border-[#e7ece9] bg-white p-3">
            <div className="relative aspect-[1156/1400] overflow-hidden rounded-xl bg-[#f6faf8]">
              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <h2 className="mt-3 text-sm leading-6">{item.name}</h2>
            <p className="mt-2 text-lg font-semibold">{item.price}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
