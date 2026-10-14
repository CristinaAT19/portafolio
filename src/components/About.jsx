import { about, profile } from '../data/content'

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="flex flex-wrap gap-x-[clamp(32px,5vw,72px)] gap-y-8 border-t border-line pt-[clamp(48px,6vw,80px)] pb-[clamp(72px,9vw,128px)]"
    >
      <h2 className="section-title flex-[1_1_220px]">
        Sobre <span className="accent-word">mí</span>
      </h2>
      <div className="flex min-w-0 flex-[3_1_480px] flex-col gap-11">
        <p className="max-w-[36ch] text-[clamp(19px,2vw,25px)] leading-[1.45] tracking-[-0.015em]">
          {profile.bio}
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-8">
          {about.map((group) => (
            <div key={group.title} className="flex flex-[1_1_180px] flex-col gap-3">
              <div className="eyebrow border-b border-ink pb-3 text-xs">{group.title}</div>
              <ul className="flex flex-col gap-2 text-[15px]">
                {group.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
