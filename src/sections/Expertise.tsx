import { CheckCircle2 } from "lucide-react"

const points = [
  { label: "Customs Brokerage:", text: "Navigating complex regulations with ease." },
  { label: "Land Transportation:", text: "Reliable and efficient delivery across Asia." },
  { label: "Warehousing:", text: "Secure and strategically located facilities." },
]

export default function Expertise() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Decades of Logistics Excellence and Expertise
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            With nearly four decades of experience since 1985, Asian Cargocare has honed its expertise
            in providing seamless and cost-effective transit solutions. We prioritize the consignee,
            ensuring cargo safety and transparency in every operation.
          </p>

          <ul className="mt-8 space-y-5">
            {points.map((p) => (
              <li key={p.label} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand-orange" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{p.label}</span> {p.text}
                </p>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center rounded-lg bg-brand-orange px-8 py-3.5 font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Contact Our Experts
          </a>
        </div>

        <div className="relative">
          <img
            src="/images/expertise.png"
            alt="Logistics expertise"
            className="w-full rounded-3xl object-cover shadow-lg"
          />
          <div className="absolute -bottom-8 -right-4 flex items-center gap-4 rounded-2xl bg-card p-6 shadow-xl md:-right-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <span className="font-display text-3xl font-bold text-brand-orange">40</span>
            </div>
            <div>
              <p className="font-semibold leading-snug text-foreground">
                Years of
                <br />
                Excellence
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Trusted logistics partner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
