const topCategories = [
  "串珠首饰",
  "茶杯与茶具",
  "线香与香具",
  "书法与画作",
  "亚麻衣服",
  "礼物灵感",
];

const featureTiles = [
  {
    eyebrow: "NEW EDIT",
    title: "Beaded Jewelry For Everyday Ritual",
    text: "Natural pearl, sandalwood, and gemstone strands styled for gifting and layering.",
    cta: "Shop Jewelry",
    tone: "bg-[#f2e7db]",
  },
  {
    eyebrow: "TEA TABLE",
    title: "Handmade Cups & Calm Morning Ceramics",
    text: "Small-batch tea cups, saucers, and tactile pieces for slow-living homes.",
    cta: "Shop Tea",
    tone: "bg-[#e8dfd2]",
  },
  {
    eyebrow: "WELLNESS",
    title: "Incense, Holders & Quiet Corners",
    text: "Low-smoke incense and brass holders designed for studio, reading, and meditation space.",
    cta: "Shop Incense",
    tone: "bg-[#efe6da]",
  },
];

const productCards = [
  { name: "Freshwater Pearl Bead Necklace", category: "串珠首饰", price: "$52", badge: "Best Seller" },
  { name: "Hand-thrown Matcha Tea Cup", category: "茶杯与茶具", price: "$48", badge: "Trending" },
  { name: "Brass Crescent Incense Holder", category: "线香与香具", price: "$34", badge: "Popular Gift" },
  { name: "Ink Brush Calligraphy Art Print", category: "书法与画作", price: "$59", badge: "Editor Pick" },
  { name: "Relaxed Linen Button Shirt", category: "亚麻衣服", price: "$72", badge: "Top Rated" },
  { name: "108 Sandalwood Prayer Beads", category: "串珠首饰", price: "$39", badge: "Most Loved" },
  { name: "Ceramic Teacup Set of 2", category: "茶杯与茶具", price: "$66", badge: "Back in Stock" },
  { name: "Lotus Bronze Incense Plate", category: "线香与香具", price: "$41", badge: "New Arrival" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f2eb] text-[#2f241c]">
      <div className="sticky top-0 z-30 border-b border-[#dfd1c1] bg-[#f7f2eb]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
          <p className="text-sm tracking-[0.35em] text-[#715a46]">MAHALAND</p>
          <nav className="hidden items-center gap-6 text-sm text-[#4a3a2d] md:flex">
            <a href="#new" className="hover:text-black">New</a>
            <a href="#shop" className="hover:text-black">Shop</a>
            <a href="#collections" className="hover:text-black">Collections</a>
            <a href="#story" className="hover:text-black">Our Story</a>
          </nav>
          <button className="rounded-full border border-[#c4b09b] px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-[#4b3a2d]">
            Cart (0)
          </button>
        </div>
      </div>

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-4 pb-4 pt-6 sm:px-8 lg:grid-cols-[1.35fr_0.65fr]">
        <article className="relative overflow-hidden rounded-[2rem] border border-[#dfd2c4] bg-[#efe3d5] p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8b705a]">Spring Edit 2026</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Artisan Home & Style — inspired by editorial boutique shopping.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5d4b3b] sm:text-lg">
            Discover Etsy-leading categories built around ritual and gifting: beaded jewelry, tea cups,
            incense & holders, calligraphy artwork, and airy linen clothing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#shop"
              className="rounded-full bg-[#2f241c] px-6 py-3 text-sm font-medium text-[#f7eee3] transition hover:bg-[#4c3d31]"
            >
              Shop Bestsellers
            </a>
            <a
              href="#collections"
              className="rounded-full border border-[#bda68f] px-6 py-3 text-sm font-medium text-[#463629] transition hover:bg-[#f4e8da]"
            >
              Browse Collections
            </a>
          </div>
        </article>

        <aside className="rounded-[2rem] border border-[#e2d4c6] bg-[#fffaf3] p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8f755f]">Top Categories</p>
          <ul className="mt-5 space-y-2.5 text-sm text-[#4d3f32]">
            {topCategories.map((cat) => (
              <li
                key={cat}
                className="flex items-center justify-between rounded-xl border border-[#eadfd3] bg-white px-3 py-2"
              >
                <span>{cat}</span>
                <span>→</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section id="new" className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-6 sm:px-8 lg:grid-cols-3">
        {featureTiles.map((tile) => (
          <article key={tile.title} className={`rounded-[1.7rem] border border-[#e0d2c3] p-6 ${tile.tone}`}>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b705b]">{tile.eyebrow}</p>
            <h2 className="mt-3 text-2xl leading-tight">{tile.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#5f4c3c]">{tile.text}</p>
            <button className="mt-6 rounded-full border border-[#bda791] px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#443327]">
              {tile.cta}
            </button>
          </article>
        ))}
      </section>

      <section id="shop" className="mx-auto w-full max-w-7xl px-4 pb-4 pt-8 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#e1d4c6] pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#8d735d]">Most Wanted</p>
            <h3 className="mt-2 text-3xl">Etsy-style Bestsellers</h3>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-[#5b493b]">
            {topCategories.slice(0, 5).map((f) => (
              <button key={f} className="rounded-full border border-[#ccb8a3] px-3 py-1.5 hover:bg-[#f3e7d9]">
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {productCards.map((item) => (
            <article
              key={item.name}
              className="group rounded-2xl border border-[#e6dbcf] bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="aspect-[4/5] rounded-xl bg-gradient-to-b from-[#efe4d7] to-[#e1d1be]" />
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-[#907763]">{item.badge}</p>
              <h4 className="mt-2 text-base leading-6 text-[#2d241d]">{item.name}</h4>
              <p className="mt-1 text-sm text-[#7d6654]">{item.category}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-semibold">{item.price}</p>
                <button className="rounded-full bg-[#2f241c] px-3 py-1.5 text-xs text-[#f8efe6] opacity-90 transition group-hover:opacity-100">
                  Quick Add
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="collections" className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-10 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-[2rem] border border-[#ddcfc0] bg-[#f0e4d5] p-7">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8a715a]">Seasonal Curation</p>
          <h3 className="mt-3 text-3xl leading-tight">Build your ritual corner: wear, sip, scent, and art.</h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5e4c3c]">
            Curated collections that cross-category naturally increase basket size: bead + tea + incense gift sets,
            calligraphy wall accents for tea corners, and linen apparel for a complete lifestyle story.
          </p>
        </article>

        <article id="story" className="rounded-[2rem] border border-[#e0d3c5] bg-[#fffaf3] p-7">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8f755f]">From Studio</p>
          <p className="mt-3 text-sm leading-7 text-[#5d4a3a]">
            Every item is selected for texture, utility, and visual calm — the same principles behind modern
            boutique marketplaces, now adapted for your own brand voice.
          </p>
          <button className="mt-6 rounded-full border border-[#cbb7a3] px-5 py-2 text-sm text-[#49392d]">
            Read Journal
          </button>
        </article>
      </section>

      <footer className="border-t border-[#dfd1c2] px-4 py-7 text-center text-xs tracking-[0.2em] text-[#7d6755] sm:px-8">
        MAHALAND · ARTISAN LIVING MARKET
      </footer>
    </main>
  );
}
