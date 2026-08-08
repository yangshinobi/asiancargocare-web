import { Linkedin, Plane, Twitter } from "lucide-react"

const columns = [
  {
    heading: "Company",
    links: ["About Us", "Our Team", "Careers"],
  },
  {
    heading: "Services",
    links: ["Air Freight", "Sea Freight", "Ground Transportation"],
  },
  {
    heading: "Resources",
    links: ["FAQ", "Blog", "News"],
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-footer">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-lg font-semibold text-white">{col.heading}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#home"
                      className="text-[15px] text-brand-footerlink transition-colors hover:text-brand-orange"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-lg font-semibold text-white">IATA Agent</h4>
            <div className="mt-5 inline-flex items-center gap-3 rounded-lg bg-white px-4 py-3">
              <Plane className="h-6 w-6 text-brand-orange" />
              <div className="leading-tight">
                <p className="text-sm font-bold tracking-wide text-[#020817]">IATA</p>
                <p className="text-xs font-medium text-slate-500">Certified Agent</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-sm text-slate-400">
            © 2025 Asian Cargocare Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-sm text-slate-400 transition-colors hover:text-brand-orange"
            >
              Terms &amp; Conditions
            </a>
            <a
              href="#home"
              className="text-sm text-slate-400 transition-colors hover:text-brand-orange"
            >
              Privacy Policy
            </a>
            <a
              href="#home"
              aria-label="LinkedIn"
              className="text-slate-400 transition-colors hover:text-brand-orange"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#home"
              aria-label="Twitter"
              className="text-slate-400 transition-colors hover:text-brand-orange"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
