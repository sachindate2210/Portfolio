import { useEffect, useRef, useState } from "react"

/**
 * Returns a ref to attach to an element and a boolean that flips to true
 * once the element scrolls into view. Used for lightweight fade/slide-in-on-scroll effects.
 */
export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px", ...options }
    )

    observer.observe(node)

    // Safety net: if the element is already on/near screen at mount (e.g. an instant
    // jump from nav/anchor navigation lands past the observer's first tick), or the
    // observer never fires for any reason, don't leave content permanently invisible.
    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true)
    }
    const fallback = window.setTimeout(() => setInView(true), 1500)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [options])

  return { ref, inView }
}
