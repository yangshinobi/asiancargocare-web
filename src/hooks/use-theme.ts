import { useCallback, useEffect, useState } from "react"

const STORAGE_KEY = "acc-theme"

export function useTheme() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "dark") return true
    if (stored === "light") return false
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", dark)
    window.localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light")
  }, [dark])

  const toggle = useCallback(() => setDark((d) => !d), [])

  return { dark, toggle }
}
