export type Countdown = {
  totalMs: number
  days: number
  hours: number
  minutes: number
  seconds: number
  isStarted: boolean
}

export function getCountdown(startTime: number): Countdown {
  const now = Date.now()
  const diff = startTime - now

  if (diff <= 0) {
    return {
      totalMs: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isStarted: true,
    }
  }

  const totalSeconds = Math.floor(diff / 1000)

  return {
    totalMs: diff,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    isStarted: false,
  }
}
