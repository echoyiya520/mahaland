const categoryFocus = [
  {
    name: "串珠首饰",
    en: "Beaded Jewelry",
    note: "Etsy 热销：手工感 + 礼物属性强",
    products: ["天然石手串", "珍珠项链", "玻璃珠耳饰"],
  },
  {
    name: "茶杯与茶具",
    en: "Tea Cups & Tea Ritual",
    note: "Etsy 热销：生活方式场景驱动复购",
    products: ["手作陶瓷杯", "茶托套组", "日式马克杯"],
  },
  {
    name: "线香与香具",
    en: "Incense & Holders",
    note: "Etsy 热销：情绪价值高，适合礼盒组合",
    products: ["檀香线香", "黄铜香插", "香盘与收纳盒"],
  },
  {
    name: "书法与画作",
    en: "Calligraphy & Art Prints",
    note: "Etsy 热销：墙面装饰需求稳定",
    products: ["原创书法", "水墨版画", "小尺幅装饰画"],
  },
  {
    name: "亚麻衣服",
    en: "Linen Clothing",
    note: "Etsy 热销：舒适面料 + 慢生活叙事",
    products: ["亚麻衬衫", "宽松长裙", "居家外搭"],
  },
];

const bestsellers = [
  { name: "Natural Bead Bracelet Set", price: "$36", tag: "Best Seller" },
  { name: "Handmade Ceramic Tea Cup", price: "$48", tag: "Popular Gift" },
  { name: "Brass Incense Holder", price: "$32", tag: "Trending" },
  { name: "Ink Calligraphy Print", price: "$58", tag: "Editor Pick" },
  { name: "Relaxed Linen Shirt", price: "$69", tag: "Most Loved" },
  { name: "Pearl Bead Necklace", price: "$52", tag: "Top Rated" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f0e9] text-[#2e251d]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-8 sm:px-8 lg:px-10">
        <header className="rounded-3xl border border-[#d7cabb] bg-[#efe3d4] px-6 py-6 shadow-sm sm:px-8">
          <div className="flex flex-col gap-5 border-b border-[#cdbba8] pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#8a715a]">
                Atelier Market
              </p>
              <h1 className="mt-3 max-w-3xl text-4xl font-medium leading-tight sm:text-5xl">
                A warm, editorial storefront inspired by boutique lifestyle retail.
              </h1>
            </div>
            <a
              href="#shop"
              className="inline-flex w-fit rounded-full bg-[#2e251d] px-5 py-2.5 text-sm font-medium text-[#f8f4ee] transition hover:bg-[#4a3e34]"
            >
              Shop Bestsellers
            </a>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <p className="text-base leading-8 text-[#5f4f41] sm:text-lg">
              你的站点现在是“Anthropologie 风格灵感”版本：强调情绪化视觉、
              生活方式文案、精选类目陈列。核心经营类目聚焦 Etsy 热销方向：
              串珠首饰、茶杯、线香与香具、书法画作、亚麻衣服。
            </p>
            <div className="rounded-2xl bg-[#2f241c] p-5 text-[#f2e8dc]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#cab8a5]">
                Brand Direction
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[#ebdece]">
                <li>• Editorial 首页结构</li>
                <li>• 类目优先，爆品辅助</li>
                <li>• 软性色盘 + 高级留白</li>
                <li>• 适合后续接入 Shopify/Etsy feed</li>
              </ul>
            </div>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryFocus.map((cat) => (
            <article
              key={cat.name}
              className="rounded-3xl border border-[#ddcfbf] bg-[#fffaf4] p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#8e7761]">{cat.en}</p>
              <h2 className="mt-2 text-2xl font-medium">{cat.name}</h2>
              <p className="mt-3 text-sm leading-6 text-[#6d5a48]">{cat.note}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-[#4f4033]">
                {cat.products.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="shop" className="rounded-3xl border border-[#d9c9b8] bg-[#fdf7ef] p-6 sm:p-8">
          <div className="flex flex-col gap-3 border-b border-[#e7d9cb] pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#907761]">Most Wanted</p>
              <h3 className="mt-2 text-3xl font-medium">Etsy 热销风格单品区</h3>
            </div>
            <button className="inline-flex w-fit rounded-full border border-[#bfa991] px-5 py-2 text-sm text-[#49392d] transition hover:bg-[#f1e4d7]">
              View All Products
            </button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bestsellers.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-[#e7dbcd] bg-white px-4 py-5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#9f866f]">{item.tag}</p>
                <h4 className="mt-2 text-lg font-medium text-[#2d241c]">{item.name}</h4>
                <p className="mt-3 text-sm text-[#7a6654]">Crafted for gifting and daily ritual.</p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-lg font-semibold">{item.price}</p>
                  <button className="rounded-full bg-[#2f251c] px-4 py-1.5 text-xs text-[#f6efe6]">
                    Add
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
