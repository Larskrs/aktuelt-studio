'use client'

import { useEffect } from 'react'

export default function TrackVisit() {
  useEffect(() => {
    fetch('/api/v1/tracking', {
      method: 'POST',
    })
  }, [])

  return null
}