import type { Difficulty } from "@/data/data";

const styles: Record<Difficulty, string> = {
  Easy: "text-easy",
  Medium: "text-medium",
  Hard: "text-hard",
};

export default function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return <span className={`text-sm font-medium ${styles[difficulty]}`}>{difficulty}</span>;
}
