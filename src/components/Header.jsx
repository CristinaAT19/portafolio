import { profile } from '../data/content'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
]

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-5">
      <a
        href="#inicio"
        className="inline-flex min-h-11 items-center font-serif text-[28px] leading-none tracking-[-0.01em] italic hover:text-accent"
      >
        {profile.name}
      </a>
      <nav aria-label="Principal" className="flex flex-wrap items-center gap-x-7 gap-y-1">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="inline-flex min-h-11 items-center text-[15px] hover:text-accent"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contacto"
          className="inline-flex min-h-11 items-center rounded-full border border-ink px-5 text-[15px] font-medium hover:bg-ink hover:text-white"
        >
          Contacto
        </a>
      </nav>
    </header>
  )
}
