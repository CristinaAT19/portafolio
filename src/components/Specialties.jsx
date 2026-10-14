import { Fragment } from 'react'
import { specialties } from '../data/content'
import { Sparkle } from './Icons'

export default function Specialties() {
  return (
    <section
      aria-label="Especialidades"
      className="flex flex-wrap items-center justify-between gap-x-7 gap-y-3 border-y border-line py-5.5 font-serif text-[clamp(20px,2.2vw,28px)] leading-[1.2] italic"
    >
      {specialties.map((item, i) => (
        <Fragment key={i}>
          {i > 0 && <Sparkle />}
          <span>{item}</span>
        </Fragment>
      ))}
    </section>
  )
}
