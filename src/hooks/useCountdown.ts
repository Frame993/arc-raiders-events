import { useEffect, useState } from "react"
import { getCountdown, type Countdown } from "../utils/countdown"

export function useCountdown(startTime: number) {
  const [countdown, setCountdown] = useState<Countdown>(() =>
    getCountdown(startTime)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown(startTime))
    }, 1000)

    return () => clearInterval(interval)
  }, [startTime])

  return countdown
}
