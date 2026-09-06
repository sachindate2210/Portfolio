import { personal } from "../data/profile"

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 pb-20">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 text-xs text-[var(--color-text-dim)]">
        <p>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
