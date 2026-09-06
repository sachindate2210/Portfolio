import { useEffect, useState } from "react"

type TypewriterProps = {
  words: string[]
  className?: string
}

/** Cycles through a list of words with a type/delete effect — a small technical flourish for the hero. */
export function Typewriter({ words, className = "" }: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    const speed = deleting ? 40 : 65
    const pause = deleting ? 300 : 1600

    if (!deleting && text === current) {
      const t = window.setTimeout(() => setDeleting(true), pause)
      return () => window.clearTimeout(t)
    }
    if (deleting && text === "") {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
      return
    }

    const t = window.setTimeout(() => {
      setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)))
    }, speed)
    return () => window.clearTimeout(t)
  }, [text, deleting, wordIndex, words])

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-current ml-0.5 align-middle animate-blink" />
    </span>
  )
}
