const stats = [
  { value: "40", label: "years", text: "Delivering seamless logistics solutions since our inception." },
  { value: "4", label: "decades", text: "We have built a legacy of trust and reliability in the logistics industry." },
  { value: "30", label: "team members", text: "Meet our dedicated team committed to excellence in logistics." },
]

export default function Journey() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Our Journey and Values
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Founded in 1986, Asian Cargocare Pvt. Ltd. has been a pioneer in logistics solutions across
            Asia. Our mission is to provide reliable and cost-effective transit solutions while
            prioritizing client needs and ensuring cargo safety.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <p>
                  <span className="text-4xl font-bold text-brand-orange">{s.value}</span>{" "}
                  <span className="text-xl font-semibold text-foreground">{s.label}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <p className="leading-relaxed text-muted-foreground">
                Shaleen Singh, our CEO, leads with a vision for innovation and excellence.
              </p>
              <p className="mt-4 text-right font-display text-xl font-semibold text-brand-orange">
                40 years
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="/images/journey.png"
            alt="Logistics team at work"
            className="w-full rounded-3xl object-cover shadow-lg"
          />
          <div className="absolute -bottom-8 -left-4 rounded-2xl bg-card p-4 shadow-xl md:-left-8">
            <div className="rounded-xl bg-gradient-to-br from-orange-500 to-orange-400 px-8 py-6 text-white">
              <p className="font-display text-5xl font-bold">1986</p>
              <p className="mt-2 max-w-[220px] text-sm leading-snug text-orange-50">
                Established with a vision to revolutionize logistics in Asia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
