export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center justify-center bg-background pt-20">
      <div className="px-6 py-16">
        <img
          src="/images/logo.png"
          alt="Asian Cargocare Logo"
          className="mx-auto w-[320px] max-w-[70vw] dark:hidden md:w-[420px]"
        />
        <img
          src="/images/logo-dark.png"
          alt="Asian Cargocare Logo"
          className="mx-auto hidden w-[320px] max-w-[70vw] dark:block md:w-[420px]"
        />
      </div>
    </section>
  )
}
