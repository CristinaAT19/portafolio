import { quote } from '../data/content'
import { Sparkle } from './Icons'

export default function Quote() {
  return (
    <section
      aria-label="Testimonio"
      className="flex flex-col items-center gap-7 py-[clamp(80px,11vw,152px)] text-center"
    >
      <Sparkle size={28} />
      <blockquote className="max-w-[22ch] font-serif text-[clamp(28px,4vw,52px)] leading-[1.15] tracking-[-0.015em] italic">
        “{quote.text}”
      </blockquote>
      <div className="eyebrow">{quote.author}</div>
    </section>
  )
}
