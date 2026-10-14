import { profile, socials } from '../data/content'
import { ArrowUpRight } from './Icons'

export default function Contact() {
  return (
    <section
      id="contacto"
      className="flex flex-col items-center gap-7 rounded-[28px] bg-tint-mauve px-[clamp(24px,5vw,72px)] py-[clamp(48px,8vw,112px)] text-center"
    >
      <div className="eyebrow">Contacto</div>
      <h2 className="max-w-[16ch] text-[clamp(34px,5.2vw,72px)] leading-[1.04] font-medium tracking-[-0.04em]">
        ¿Tienes un proyecto en mente? <span className="accent-word text-accent">Hablemos.</span>
      </h2>
      <a
        href={`mailto:${profile.email}`}
        className="inline-flex min-h-14 items-center gap-3 rounded-full bg-ink px-7.5 font-medium wrap-anywhere text-white hover:bg-accent"
      >
        {profile.email}
        <ArrowUpRight />
      </a>
      <div className="flex flex-wrap justify-center gap-x-7 gap-y-1">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center text-[15px] underline decoration-1 underline-offset-[5px] hover:text-accent"
          >
            {social.label}
          </a>
        ))}
      </div>
    </section>
  )
}
