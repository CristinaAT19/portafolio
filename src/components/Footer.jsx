import { profile } from '../data/content'
import { ArrowUp } from './Icons'

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 pt-5 pb-8 text-sm text-muted">
      <div>
        © {new Date().getFullYear()} {profile.name}
      </div>
      <a href="#inicio" className="inline-flex min-h-11 items-center gap-2 hover:text-ink">
        Volver arriba
        <ArrowUp />
      </a>
    </footer>
  )
}
