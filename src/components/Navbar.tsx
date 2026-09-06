import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useScrollSpy } from "../hooks/useScrollSpy"
import { personal } from "../data/profile"

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "ai", label: "AI" },
  { id: "contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(NAV_ITEMS.map((n) => n.id))

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function handleNavClick(id: string) {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 " +
        (scrolled ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md" : "border-b border-transparent")
      }
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleNavClick("home")}
          className="font-mono text-sm font-semibold text-white tracking-tight"
        >
          <span className="text-cyan-400">&gt;</span> {personal.name}
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-md " +
                  (active === item.id ? "text-white" : "text-[var(--color-text-dim)] hover:text-white")
                }
              >
                {item.label}
                {active === item.id && (
                  <span className="absolute left-3 right-3 -bottom-[1px] h-px bg-gradient-to-r from-cyan-400 to-violet-400" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-md px-6 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={
                    "w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors " +
                    (active === item.id ? "text-white bg-[var(--color-surface-2)]" : "text-[var(--color-text-dim)]")
                  }
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
