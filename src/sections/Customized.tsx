import { Plane, Ship, Truck, Warehouse } from "lucide-react"

const cards = [
  {
    icon: Ship,
    title: "Ocean Freight",
    text: "Efficient and reliable ocean freight services tailored to your specific needs. We ensure safe and timely delivery of your cargo across the globe.",
  },
  {
    icon: Plane,
    title: "Air Freight",
    text: "Fast and secure air freight services for time-sensitive shipments. We offer comprehensive solutions to meet your urgent delivery needs.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    text: "Secure and efficient warehousing solutions with real-time tracking and inventory management systems for optimal supply chain efficiency.",
  },
  {
    icon: Truck,
    title: "Land Transport",
    text: "Reliable land transportation network for seamless domestic and cross-border delivery with comprehensive tracking and monitoring.",
  },
]

export default function Customized() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Customized Logistics Solutions for Your Unique Business Needs
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            At Asian Cargocare, we recognize that each industry possesses distinct logistics
            requirements. Our team leverages extensive expertise and advanced tools like Infor Nexus
            and Translogica to deliver customized and efficient supply chain solutions. We are
            committed to providing solutions that meet your specific needs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <c.icon className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
