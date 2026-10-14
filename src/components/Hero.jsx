import { profile } from '../data/content'
import { ArrowDown } from './Icons'

export default function Hero() {
  return (
    <section className="flex flex-wrap items-center gap-x-[clamp(32px,6vw,88px)] gap-y-12 pt-[clamp(40px,6vw,88px)] pb-[clamp(56px,7vw,96px)]">
      <div className="flex min-w-0 flex-1 flex-col gap-7">
        <div className="flex w-fit items-center gap-2.5 rounded-full border border-line bg-white px-4 py-2 text-sm">
          <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
          {profile.availability}
        </div>
        <div className="eyebrow flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          Portafolio · {new Date().getFullYear()}
        </div>
        <h1 className="text-[clamp(42px,6.2vw,88px)] leading-[1.02] font-medium tracking-[-0.04em]">
          Hola, soy <span className="accent-word text-accent">{profile.name}</span>.
        </h1>
        <p className="max-w-[44ch] text-[clamp(18px,1.9vw,23px)] leading-[1.45] tracking-[-0.01em] text-muted">
          {profile.role} — {profile.tagline}.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#proyectos"
            className="inline-flex min-h-13 items-center gap-2.5 rounded-full bg-ink px-6.5 text-[15px] font-medium text-white hover:bg-accent"
          >
            Ver proyectos
            <ArrowDown />
          </a>
          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              download="Cristina Advincola.pdf"
              className="inline-flex min-h-13 items-center rounded-full border border-line-strong px-6.5 text-[15px] font-medium hover:border-ink"
            >
              Descargar CV
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
