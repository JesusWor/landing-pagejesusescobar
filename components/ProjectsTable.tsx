"use client";

import Link from "next/link";
import { useState } from "react";
import { dataProjects, type Difficulty } from "@/data/data";
import StatusIcon from "./StatusIcon";
import DifficultyBadge from "./DifficultyBadge";

const difficulties: ("All" | Difficulty)[] = ["All", "Easy", "Medium", "Hard"];

export default function ProjectsTable() {
  const [filter, setFilter] = useState<"All" | Difficulty>("All");

  const rows =
    filter === "All" ? dataProjects : dataProjects.filter((p) => p.difficulty === filter);

  return (
    <div className="overflow-hidden rounded-lg border border-surfaceLine">
      <div className="flex items-center gap-2 border-b border-surfaceLine bg-surface px-4 py-3">
        {difficulties.map((d) => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className={
              "rounded-full px-3 py-1 font-mono text-xs transition-colors " +
              (filter === d
                ? "bg-accent text-base"
                : "text-muted hover:bg-surfaceLine hover:text-ink")
            }
          >
            {d}
          </button>
        ))}
        <span className="ml-auto font-mono text-xs text-muted">
          {rows.length}/{dataProjects.length}
        </span>
      </div>

      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-surfaceLine bg-surface/60 font-mono text-xs uppercase tracking-wide text-muted">
            <th className="w-12 px-4 py-3 font-normal">Status</th>
            <th className="px-4 py-3 font-normal">Title</th>
            <th className="hidden px-4 py-3 font-normal sm:table-cell">Tags</th>
            <th className="w-24 px-4 py-3 text-right font-normal">Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((project) => (
            <tr
              key={project.id}
              className="group border-b border-surfaceLine last:border-0 hover:bg-surface/60"
            >
              <td className="px-4 py-3">
                <StatusIcon status={project.status} />
              </td>
              <td className="px-4 py-3">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="text-ink group-hover:text-accent"
                >
                  {project.title}
                </Link>
                <p className="mt-0.5 font-mono text-[11px] text-muted">{project.period}</p>
              </td>
              <td className="hidden px-4 py-3 sm:table-cell">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded bg-surfaceLine px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-4 py-3 text-right">
                <DifficultyBadge difficulty={project.difficulty} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
