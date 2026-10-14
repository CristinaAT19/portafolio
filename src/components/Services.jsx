import { services } from '../data/content'

export default function Services() {
  return (
    <section
      id="servicios"
      className="flex flex-col gap-[clamp(32px,4vw,56px)] pt-[clamp(72px,9vw,128px)]"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2 className="section-title">
          Lo que <span className="accent-word">hago</span>
        </h2>
        <div className="eyebrow">Servicios</div>
      </div>
      <div className="flex flex-wrap gap-5">
        {services.map((service, i) => (
          <div
            key={i}
            className="flex min-w-0 flex-[1_1_260px] flex-col gap-3.5 rounded-2xl border border-line bg-white p-7"
          >
            <div className="font-serif text-[34px] leading-none text-accent italic">
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="pt-5 text-[21px] leading-[1.2] font-medium tracking-[-0.02em]">
              {service.title}
            </h3>
            <p className="text-[15px] text-muted">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
