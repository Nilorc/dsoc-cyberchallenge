/** shadcn-style helper — extend when adding more UI components */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
