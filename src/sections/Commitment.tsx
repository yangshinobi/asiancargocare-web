import { Leaf, Lightbulb, Users } from "lucide-react"

const items = [
  {
    icon: Leaf,
    chip: "bg-green-100 text-green-600 dark:bg-green-500/15 dark:text-green-400",
    title: "Eco-Conscious Practices",
    text: "We are dedicated to fostering eco-friendly logistics solutions that minimize environmental impact while ensuring efficient cargo movement. Our partnerships with Neutral NOVCCs reflect our commitment to sustainability.",
  },
  {
    icon: Lightbulb,
    chip: "bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400",
    title: "Innovative Solutions",
    text: "Innovation drives our operations. We continuously seek smarter logistics solutions to enhance service delivery and meet the evolving needs of our clients in the dynamic logistics landscape.",
  },
  {
    icon: Users,
    chip: "bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400",
    title: "Client-Centric Approach",
    text: "Our clients are at the heart of everything we do. We strive to exceed expectations by providing reliable, transparent, and cost-effective logistics solutions tailored to their unique needs.",
  },
]

export default function Commitment() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
            Our Commitment to Excellence
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            At Asian Cargocare, we prioritize sustainable logistics and client satisfaction.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${item.chip}`}>
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
