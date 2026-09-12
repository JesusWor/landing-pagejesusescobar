import { socialNetworks } from "@/data/data";

export default function Footer() {
  return (
    <footer className="border-t border-surfaceLine">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-muted">
          Monterrey, Nuevo León, México — building things that measure the body and the world.
        </p>
        <div className="flex gap-4 text-muted">
          {socialNetworks.map((s) => (
            <a
              key={s.id}
              href={s.src}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="hover:text-accent"
            >
              {s.logo}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
