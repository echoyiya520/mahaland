const navGroups = [
  "new",
  "dresses",
  "clothing",
  "shoes",
  "bags",
  "accessories",
  "home decor",
  "beauty",
  "gifts",
  "sale",
];

const quickCats = [
  "串珠首饰",
  "茶杯",
  "线香",
  "香具",
  "书法画作",
  "亚麻衣服",
];

const editCards = [
  { title: "珠饰日常", desc: "天然石与珍珠串珠，礼物属性强、复购高。" },
  { title: "茶席器物", desc: "手作茶杯与茶托，让家居场景更有内容。" },
  { title: "线香香具", desc: "高频消耗品+器具搭配，客单价更稳定。" },
];

const products = [
  ["淡水珍珠手链", "$39", "串珠首饰"],
  ["檀木108念珠", "$45", "串珠首饰"],
  ["手作陶瓷茶杯", "$52", "茶杯"],
  ["黄铜月牙香插", "$34", "香具"],
  ["低烟沉香线香", "$26", "线香"],
  ["水墨书法装饰画", "$62", "书法画作"],
  ["亚麻宽松衬衫", "$68", "亚麻衣服"],
  ["亚麻系带长裙", "$76", "亚麻衣服"],
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1f2f28]">
      <div className="bg-[#113a2f] px-4 py-2 text-center text-[11px] tracking-[0.16em] text-[#e8f5ef]">
        FREE SHIPPING ON ORDERS $75+ · HANDMADE EDIT FOR SPRING
      </div>

      <header className="sticky top-0 z-40 border-b border-[#ded2c5] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-4 lg:px-8">
          <button className="text-sm uppercase tracking-[0.2em] text-[#5b4838]">menu</button>
          <p className="text-xl tracking-[0.35em] text-[#113a2f]">MAHALAND</p>
          <div className="flex items-center gap-4 text-sm text-[#5b4838]">
            <span>search</span>
            <span>account</span>
            <span>cart(0)</span>
          </div>
        </div>

        <nav className="mx-auto hidden max-w-[1320px] items-center gap-6 overflow-x-auto px-8 pb-3 text-[13px] uppercase tracking-[0.13em] text-[#4d3d30] lg:flex">
          {navGroups.map((g) => (
            <a key={g} href="#" className="whitespace-nowrap hover:text-black">
              {g}
            </a>
          ))}
        </nav>
      </header>

      <section className="mx-auto grid max-w-[1320px] gap-4 px-4 py-5 lg:grid-cols-[1.45fr_1fr] lg:px-8">
        <article className="relative overflow-hidden rounded-[28px] border border-[#e1d6ca] bg-[#f5faf7] p-8 lg:p-12">
          <p className="text-xs uppercase tracking-[0.28em] text-[#7f6652]">editorial market</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight lg:text-6xl">
            同款精品感首页结构，类目聚焦 Etsy 热销方向
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#5c4a3c] lg:text-lg">
            以串珠首饰、茶杯、线香香具、书法画作、亚麻衣服为核心，做出“生活方式+礼物场景”导向的电商首页。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-[#0f3b2f] px-6 py-3 text-sm text-white">shop now</button>
            <button className="rounded-full border border-[#bda894] px-6 py-3 text-sm text-[#4d3b2e]">view collections</button>
          </div>
        </article>

        <article className="rounded-[28px] border border-[#e2d8cd] bg-white p-6 lg:p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-[#826a57]">shop by category</p>
          <div className="mt-4 grid gap-2">
            {quickCats.map((c) => (
              <a
                key={c}
                className="flex items-center justify-between rounded-xl border border-[#e9dfd4] bg-[#fcf9f5] px-4 py-3 text-sm hover:bg-[#f3e8db]"
                href="#"
              >
                <span>{c}</span>
                <span>→</span>
              </a>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 pb-3 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-3">
          {editCards.map((c) => (
            <article key={c.title} className="rounded-[24px] border border-[#e5d9cd] bg-[#f7fcf9] p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#8b735f]">the edit</p>
              <h2 className="mt-3 text-2xl">{c.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#5e4b3d]">{c.desc}</p>
              <button className="mt-5 rounded-full border border-[#c6b09b] px-4 py-2 text-xs uppercase tracking-[0.14em]">explore</button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-8 lg:px-8">
        <div className="flex items-end justify-between border-b border-[#e2d6ca] pb-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8b735f]">bestsellers</p>
            <h3 className="mt-2 text-3xl">最畅销类目商品区</h3>
          </div>
          <button className="rounded-full border border-[#ccb7a2] px-4 py-2 text-sm">view all</button>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(([name, price, cat]) => (
            <article key={name} className="rounded-2xl border border-[#e7ddd2] bg-white p-4">
              <div className="aspect-[4/5] rounded-xl bg-gradient-to-b from-[#eee1d3] to-[#ddcab4]" />
              <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-[#947c68]">{cat}</p>
              <h4 className="mt-2 text-base leading-6">{name}</h4>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-semibold">{price}</p>
                <button className="rounded-full bg-[#0f3b2f] px-3 py-1.5 text-xs text-white">quick add</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 pb-10 lg:px-8">
        <div className="rounded-[28px] border border-[#e2d7ca] bg-[#f3faf6] p-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#896f5a]">email signup</p>
          <h4 className="mt-3 text-3xl">Get first access to new drops</h4>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#5e4b3d]">
            每周更新选品与主题合集，优先获取串珠新品、茶器上新、香具补货和亚麻季节款。
          </p>
          <div className="mx-auto mt-5 flex max-w-lg flex-col gap-2 sm:flex-row">
            <input
              placeholder="Enter your email"
              className="h-11 flex-1 rounded-full border border-[#cdb9a5] bg-white px-4 text-sm outline-none"
            />
            <button className="h-11 rounded-full bg-[#0f3b2f] px-5 text-sm text-white">subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}
