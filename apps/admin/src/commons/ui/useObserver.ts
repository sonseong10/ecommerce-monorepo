'use client'

import { useEffect, useRef, useState } from 'react'

export const useObserver = () => {
  const ref = useRef<HTMLElement>(null)
  const [state, setState] = useState(false)
  const handleObserver = async (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setState(true)
      if (ref.current) {
        observer.unobserve(ref.current)
      }
      observer.disconnect()
    }
  }
  const [observer] = useState(
    new IntersectionObserver(handleObserver, {
      threshold: 0,
    }),
  )

  useEffect(() => {
    if (ref.current !== null) {
      observer.observe(ref.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [ref])
  return { state, ref }
}
