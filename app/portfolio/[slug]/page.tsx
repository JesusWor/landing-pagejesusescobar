import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Github, ChevronLeft } from "lucide-react";
import { dataProjects } from "@/data/data";
import DifficultyBadge from "@/components/DifficultyBadge";
import StatusIcon from "@/components/StatusIcon";

export function generateStaticParams() {
  return dataProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = dataProjects.find((p) => p.slug === params.slug);
  return { title: project ? `${project.title} — Jesús Escobar` : "Project not found" };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = dataProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <Link
        href="/portfolio"
        className="mb-4 flex w-fit items-center gap-1 font-mono text-xs text-muted hover:text-accent"
      >
        <ChevronLeft size={14} /> All projects
      </Link>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* LEFT PANE — the "problem statement" */}
        <div className="rounded-lg border border-surfaceLine bg-surface p-6">
          <div className="flex items-center gap-3">
            <StatusIcon status={project.status} />
            <h1 className="font-display text-xl text-ink">{project.title}</h1>
          </div>
          <div className="mt-3 flex items-center gap-4">
            <DifficultyBadge difficulty={project.difficulty} />
            <span className="font-mono text-xs text-muted">{project.period}</span>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-ink/90">{project.description}</p>

          <h2 className="mt-6 font-mono text-xs uppercase tracking-wide text-muted">
            What it does
          </h2>
          <ul className="mt-3 space-y-3">
            {project.points.map((point, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink/85">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                {point}
              </li>
            ))}
          </ul>

          <h2 className="mt-6 font-mono text-xs uppercase tracking-wide text-muted">Tags</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-surfaceLine px-3 py-1 font-mono text-[11px] text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT PANE — the "solution" / editor panel */}
        <div className="flex flex-col rounded-lg border border-surfaceLine bg-[#1E1E1E]">
          <div className="flex items-center gap-2 border-b border-surfaceLine px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-hard/70" />
            <span className="h-3 w-3 rounded-full bg-medium/70" />
            <span className="h-3 w-3 rounded-full bg-easy/70" />
            <span className="ml-2 font-mono text-xs text-muted">solution.md</span>
          </div>

          <div className="flex-1 p-6 font-mono text-sm leading-relaxed text-ink/90">
            <p className="text-muted"># stack</p>
            {project.stack.map((tech) => (
              <p key={tech}>
                <span className="text-accent">-</span> {tech}
              </p>
            ))}

            <p className="mt-5 text-muted"># status</p>
            <p>
              <span className="text-accent">-</span>{" "}
              {project.status === "live"
                ? "solved — live demo deployed"
                : project.status === "hardware"
                ? "special — physical build, see video"
                : "attempted — code public, no hosted demo yet"}
            </p>
          </div>

          <div className="flex gap-3 border-t border-surfaceLine p-4">
            {project.urlGithub && (
              <a
                href={project.urlGithub}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-surfaceLine py-2 font-mono text-xs text-ink hover:bg-surfaceLine/70"
              >
                <Github size={14} /> View code
              </a>
            )}
            {project.urlDemo && (
              <a
                href={project.urlDemo}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-accent py-2 font-mono text-xs font-medium text-base hover:bg-accent/90"
              >
                <ExternalLink size={14} /> Run demo
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
