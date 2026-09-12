import { skillGroups } from "@/data/data";

export const metadata = { title: "Skills — Jesús Escobar" };

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <p className="font-mono text-xs uppercase tracking-wide text-accent">Skills</p>
      <h1 className="mt-3 font-display text-2xl text-ink">Tools I reach for</h1>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.id}>
            <h2 className="font-mono text-xs uppercase tracking-wide text-muted">
              {group.title}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded border border-surfaceLine px-3 py-1 text-sm text-ink/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
