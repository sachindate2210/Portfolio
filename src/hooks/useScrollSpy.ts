import { useEffect, useState } from "react"

/** Tracks which section id is currently most visible in the viewport, for nav active-state. */
export function useScrollSpy(ids: string[], offset = 120) {
  const [active, setActive] = useState(ids[0] ?? "")

  useEffect(() => {
    function onScroll() {
      const scrollPos = window.scrollY + offset

      let current = ids[0] ?? ""
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= scrollPos) {
          current = id
        }
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [ids, offset])

  return active
}
