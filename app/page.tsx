import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectsTable from "@/components/ProjectsTable";
import ProgressDonut from "@/components/ProgressDonut";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      {/* Explore-style hero card */}
      <div className="rounded-lg border border-surfaceLine bg-surface p-8">
        <p className="font-mono text-xs uppercase tracking-wide text-accent">
          Jesús Eduardo Escobar Meza
        </p>
        <h1 className="mt-2 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-4xl">
          Computer Science student who likes building things end to end —
          from embedded hardware to full-stack apps to graph neural
          networks.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
          I'm studying Computer Science and Technology at Tecnológico de
          Monterrey (graduating 2027), based in Monterrey, México. I've
          worked as a web developer at Rivemex, freelanced building sites
          for local businesses, placed 2nd at the SAERO hackathon, and
          volunteer on SEITC's Education Board. Most of what I build sits
          between backend systems and AI/ML — right now that means a
          physics-informed graph neural network that reconstructs a full
          ECG from a single pulse sensor. Below: every project, tagged by
          stack and difficulty — same as a problem set.
        </p>
        <Link
          href="/portfolio"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-base hover:bg-accent/90"
        >
          Open project list <ArrowRight size={15} />
        </Link>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_260px]">
        <div>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-wide text-muted">
            Recently shipped
          </h2>
          <ProjectsTable />
        </div>
        <aside className="order-first lg:order-last">
          <ProgressDonut />
        </aside>
      </div>
    </section>
  );
}
