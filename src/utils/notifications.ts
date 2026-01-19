export function scheduleNotification(
  title: string,
  body: string,
  triggerTime: number
) {
  if (!("Notification" in window)) return

  Notification.requestPermission().then(permission => {
    if (permission !== "granted") return

    const delay = triggerTime - Date.now()
    if (delay <= 0) return

    setTimeout(() => {
      new Notification(title, { body })
    }, delay)
  })
}
