import { projects } from '../data/content'
import { ArrowUpRight } from './Icons'

function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, '0')
  const reversed = index % 2 === 1

  return (
    <article
      className={`flex flex-wrap items-center gap-x-[clamp(32px,5vw,72px)] gap-y-8 ${reversed ? 'flex-row-reverse' : ''}`}
    >
      <div
        className={`min-w-0 flex-[3_1_440px] overflow-hidden rounded-[20px] px-[clamp(20px,4vw,52px)] pt-[clamp(20px,4vw,52px)] ${project.tint}`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`Captura de ${project.name}`}
            className="aspect-[16/10] w-full rounded-t-[10px] object-cover object-top shadow-[0_16px_40px_rgba(15,17,20,0.08)]"
          />
        ) : (
          <div className="flex aspect-[16/10] items-center justify-center rounded-t-[10px] bg-white p-6 text-center font-mono text-[13px] text-muted shadow-[0_16px_40px_rgba(15,17,20,0.08)]">
            [CAPTURA DEL PROYECTO {number}]
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-[2_1_300px] flex-col gap-4.5">
        <div className="flex items-baseline gap-3.5">
          <span className="font-serif text-[44px] leading-none text-accent italic">{number}</span>
          <span className="eyebrow text-xs">
            {project.category} · {project.year}
          </span>
        </div>
        <h3 className="text-[clamp(26px,2.8vw,36px)] leading-[1.1] font-medium tracking-[-0.03em]">
          {project.name}
        </h3>
        <p className="max-w-[42ch] text-muted">{project.description}</p>
        <ul aria-label="Tecnologías" className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <li key={i} className="rounded-full border border-[#d5d7da] px-3.5 py-1.5 text-[13px]">
              {tag}
            </li>
          ))}
        </ul>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex min-h-12 items-center gap-3.5 self-start pt-2 text-[15px] font-medium"
        >
          <span
            aria-hidden="true"
            className="inline-flex size-12 items-center justify-center rounded-full bg-ink text-white transition-colors group-hover:bg-accent"
          >
            <ArrowUpRight />
          </span>
          Ver proyecto
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="flex flex-col gap-[clamp(40px,6vw,88px)] pt-[clamp(72px,9vw,128px)]"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2 className="section-title">
          Proyectos <span className="accent-word">seleccionados</span>
        </h2>
        <div className="eyebrow">{String(projects.length).padStart(2, '0')} proyectos</div>
      </div>
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} index={i} />
      ))}
    </section>
  )
}
