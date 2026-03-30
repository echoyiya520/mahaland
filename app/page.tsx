const featuredItems = [
  {
    name: "茶杯",
    subtitle: "Hand-finished tea cups",
    price: "$48",
    description:
      "Warm clay tones, balanced weight, and a quiet shape designed for slow tea rituals.",
    note: "Small-batch firing",
  },
  {
    name: "珠串",
    subtitle: "Meditation bead strands",
    price: "$72",
    description:
      "Natural wood and stone beads selected for texture, rhythm, and everyday wear.",
    note: "108-bead and wrist styles",
  },
  {
    name: "禅香",
    subtitle: "Zen incense collection",
    price: "$28",
    description:
      "Soft aromatic blends for reading corners, studio mornings, and evening stillness.",
    note: "Low-smoke sandalwood blend",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#efe5d7] text-stone-900">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 sm:px-10 lg:px-12">
        <header className="flex flex-col gap-8 rounded-[2rem] border border-stone-900/10 bg-white/55 px-6 py-8 shadow-[0_20px_80px_rgba(83,54,26,0.08)] backdrop-blur sm:px-10">
          <div className="flex flex-col gap-4 border-b border-stone-900/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-stone-500">
                Quiet Objects
              </p>
              <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
                An exhibition page for still, beautiful objects that are meant
                to be lived with.
              </h1>
            </div>
            <div className="rounded-full border border-stone-900/10 bg-stone-900 px-5 py-3 text-sm text-stone-50">
              Available for purchase
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-6">
              <p className="max-w-2xl text-lg leading-8 text-stone-700">
                A calm storefront for ceremonial tea cups, meditation bead
                strands, and incense crafted to bring warmth, rhythm, and
                presence into everyday spaces.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#collection"
                  className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-700"
                >
                  View Collection
                </a>
                <a
                  href="mailto:hello@quietobjects.com"
                  className="inline-flex items-center justify-center rounded-full border border-stone-900/15 px-6 py-3 text-sm font-medium text-stone-900 transition hover:bg-white/60"
                >
                  Ask About Ordering
                </a>
              </div>
            </div>

            <div className="grid gap-4 rounded-[1.75rem] bg-stone-900 p-5 text-stone-50">
              <p className="text-xs uppercase tracking-[0.35em] text-stone-400">
                Curatorial Note
              </p>
              <p className="text-xl leading-8 text-stone-100">
                Each piece is selected for quiet texture, natural material, and
                a sense of ritual rather than excess.
              </p>
              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-4 text-center">
                <div>
                  <p className="text-2xl font-semibold">03</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-400">
                    Collections
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">12</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-400">
                    Pieces
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">Now</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-400">
                    Open Sales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="collection" className="grid gap-5 lg:grid-cols-3">
          {featuredItems.map((item) => (
            <article
              key={item.name}
              className="flex flex-col justify-between rounded-[2rem] border border-stone-900/10 bg-white/70 p-6 shadow-[0_16px_50px_rgba(83,54,26,0.08)] backdrop-blur"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-3xl font-semibold">{item.name}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-stone-500">
                      {item.subtitle}
                    </p>
                  </div>
                  <p className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-stone-50">
                    {item.price}
                  </p>
                </div>
                <p className="mt-8 text-base leading-7 text-stone-700">
                  {item.description}
                </p>
              </div>

              <div className="mt-10 border-t border-stone-900/10 pt-5">
                <p className="text-sm text-stone-500">{item.note}</p>
                <button className="mt-5 inline-flex rounded-full border border-stone-900/15 px-5 py-2.5 text-sm font-medium text-stone-900 transition hover:bg-stone-900 hover:text-stone-50">
                  Inquire to Buy
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-5 rounded-[2rem] border border-stone-900/10 bg-white/60 p-6 shadow-[0_20px_80px_rgba(83,54,26,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-stone-500">
              Why this page sells
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Clear categories, calm tone, direct call to action.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] bg-stone-950 px-5 py-6 text-stone-50">
              <p className="text-sm text-stone-300">Trust</p>
              <p className="mt-2 text-lg leading-7">
                Small-batch language makes the objects feel specific and real.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-[#c59f74] px-5 py-6 text-stone-950">
              <p className="text-sm text-stone-800/70">Focus</p>
              <p className="mt-2 text-lg leading-7">
                Three featured groups keep the page easy to scan and remember.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-stone-200 px-5 py-6 text-stone-900">
              <p className="text-sm text-stone-500">Action</p>
              <p className="mt-2 text-lg leading-7">
                Inquiry buttons give you a simple path to start selling now.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
