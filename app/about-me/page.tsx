import { dataAbout } from "@/data/data";

export const metadata = { title: "About — Jesús Escobar" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <p className="font-mono text-xs uppercase tracking-wide text-accent">About</p>
      <h1 className="mt-3 font-display text-2xl text-ink">Jesús Eduardo Escobar Meza</h1>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        I'm a Computer Science and Technology student at Tecnológico de Monterrey,
        graduating in 2027. I gravitate toward backend systems and AI/ML — the kind
        of work where a model or an API has to be correct, not just functional.
      </p>

      <ol className="mt-10 space-y-8 border-l border-surfaceLine pl-6">
        {dataAbout.map((item) => (
          <li key={item.id} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-accent" />
            <p className="font-mono text-xs text-muted">{item.date}</p>
            <h2 className="mt-1 font-display text-lg text-ink">{item.title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
