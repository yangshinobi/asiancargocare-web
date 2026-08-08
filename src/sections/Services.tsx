import { Anchor, Plane, Truck, Warehouse } from "lucide-react"

const services = [
  {
    icon: Anchor,
    image: "/images/ocean-freight.png",
    alt: "Ocean Freight Solutions",
    title: "Ocean Freight Solutions",
    text: "Efficient and reliable ocean freight services connecting major ports worldwide. Ideal for businesses needing cost-effective, large-volume shipping solutions. We provide FCL and LCL shipments, consolidation, and door-to-door delivery.",
  },
  {
    icon: Plane,
    image: "/images/air-freight.png",
    alt: "Air Freight Expertise",
    title: "Air Freight Expertise",
    text: "Fast and secure air freight services for time-sensitive shipments. Perfect for industries like pharmaceuticals, electronics, and high-value goods. We offer expedited shipping, customs clearance, and IATA-certified handling.",
  },
  {
    icon: Warehouse,
    image: "/images/warehousing.png",
    alt: "Warehousing and Distribution",
    title: "Warehousing and Distribution",
    text: "Secure and efficient warehousing solutions with advanced inventory management. Serving industries requiring storage, order fulfillment, and distribution services. Our strategically located facilities ensure optimal supply chain efficiency.",
  },
  {
    icon: Truck,
    image: "/images/land-transport.png",
    alt: "Land Transportation Network",
    title: "Land Transportation Network",
    text: "Comprehensive land transportation services for seamless domestic and cross-border delivery. Suited for businesses needing reliable ground transport solutions. We offer trucking services, intermodal solutions, and last-mile delivery.",
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
            Our Comprehensive Services
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We provide end-to-end logistics solutions tailored to your business needs, ensuring
            efficient and reliable service every step of the way.
          </p>
        </div>

        <div className="mt-24 space-y-24">
          {services.map((s, i) => (
            <div key={s.title} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={s.image}
                  alt={s.alt}
                  className="aspect-[3/2] w-full rounded-2xl object-cover shadow-md"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
                  <s.icon className="h-7 w-7 text-brand-orange" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
