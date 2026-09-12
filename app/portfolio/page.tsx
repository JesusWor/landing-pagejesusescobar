import ProjectsTable from "@/components/ProjectsTable";
import ProgressDonut from "@/components/ProgressDonut";

export const metadata = { title: "Projects — Jesús Escobar" };

export default function PortfolioPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="font-display text-2xl text-ink">Projects</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Click any row for the full write-up. "Attempted" means the code is public but
        there's no hosted demo yet.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_260px]">
        <ProjectsTable />
        <aside className="order-first lg:order-last">
          <ProgressDonut />
        </aside>
      </div>
    </section>
  );
}
