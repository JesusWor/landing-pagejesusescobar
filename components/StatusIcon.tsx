import { Check, CircleDot, Star } from "lucide-react";
import type { Project } from "@/data/data";

export default function StatusIcon({ status }: { status: Project["status"] }) {
  if (status === "live") {
    return <Check size={16} className="text-easy" aria-label="Solved — live demo" />;
  }
  if (status === "hardware") {
    return <Star size={14} className="text-accent" aria-label="Hardware build" />;
  }
  return <CircleDot size={14} className="text-medium" aria-label="Attempted — code on GitHub" />;
}
