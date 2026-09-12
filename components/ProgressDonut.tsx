import { dataProjects } from "@/data/data";

export default function ProgressDonut() {
  const total = dataProjects.length;
  const easy = dataProjects.filter((p) => p.difficulty === "Easy").length;
  const medium = dataProjects.filter((p) => p.difficulty === "Medium").length;
  const hard = dataProjects.filter((p) => p.difficulty === "Hard").length;
  const solved = dataProjects.filter((p) => p.status === "live").length;

  const r = 54;
  const c = 2 * Math.PI * r;
  const easyLen = (easy / total) * c;
  const medLen = (medium / total) * c;
  const hardLen = (hard / total) * c;

  return (
    <div className="rounded-lg border border-surfaceLine bg-surface p-6">
      <div className="relative mx-auto h-36 w-36">
        <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
          <circle cx="70" cy="70" r={r} fill="none" stroke="#3E3E3E" strokeWidth="10" />
          <circle
            cx="70"
            cy="70"
            r={r}
            fill="none"
            stroke="#00B8A3"
            strokeWidth="10"
            strokeDasharray={`${easyLen} ${c - easyLen}`}
            strokeLinecap="round"
          />
          <circle
            cx="70"
            cy="70"
            r={r}
            fill="none"
            stroke="#FFC01E"
            strokeWidth="10"
            strokeDasharray={`${medLen} ${c - medLen}`}
            strokeDashoffset={-easyLen}
            strokeLinecap="round"
          />
          <circle
            cx="70"
            cy="70"
            r={r}
            fill="none"
            stroke="#FF375F"
            strokeWidth="10"
            strokeDasharray={`${hardLen} ${c - hardLen}`}
            strokeDashoffset={-(easyLen + medLen)}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-2xl text-ink">{total}</span>
          <span className="font-mono text-[11px] text-muted">Projects</span>
        </div>
      </div>

      <div className="mt-5 space-y-2 font-mono text-xs">
        <div className="flex items-center justify-between">
          <span className="text-easy">Easy</span>
          <span className="text-muted">{easy}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-medium">Medium</span>
          <span className="text-muted">{medium}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-hard">Hard</span>
          <span className="text-muted">{hard}</span>
        </div>
      </div>

      <p className="mt-4 border-t border-surfaceLine pt-3 text-center font-mono text-[11px] text-muted">
        {solved} shipped with a live demo
      </p>
    </div>
  );
}
