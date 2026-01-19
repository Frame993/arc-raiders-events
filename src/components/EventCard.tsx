import { useEffect, useState } from "react";
import { useCountdown } from "../hooks/useCountdown";
import type { Datum } from "../types/event";
import { scheduleNotification } from "../utils/notifications";

interface Props {
  event: Datum;
  notify?: boolean;
}

export function EventCard({ event, notify }: Props) {
  const countdown = useCountdown(event.startTime);
  const [notifyEnabled, setNotifyEnabled] = useState(false);

  const handleNotifyClick = () => {
  if (!notifyEnabled) {
    scheduleNotification(
      "Arc Raiders Event",
      `${event.name} en ${event.map}`,
      event.startTime
    )
  }

  setNotifyEnabled(prev => !prev)
}

  return (
    <div className="flex gap-4 bg-zinc-900 p-4 rounded-xl items-center">
      <img src={event.icon} className="w-14 h-14" />

      <div className="flex-1 flex flex-col gap-2">
        <h3 className="font-semibold">{event.name}</h3>
        <div className="flex-col gap-1 flex">
          <p className="text-xs text-zinc-400 uppercase">{event.map}</p>
          <p className="text-xs text-green-500">
            {countdown.isStarted
              ? "Now"
              : `${countdown.days === 0 ? "" : `${countdown.days}d `}${
                  countdown.hours === 0 && countdown.days === 0
                    ? ""
                    : `${countdown.hours}h `
                }${countdown.minutes}m ${countdown.seconds}s`}
          </p>
        </div>
      </div>
      {notify && (
        <button
          onClick={handleNotifyClick}
          className={`rounded-full px-3 py-3 text-sm cursor-pointer
      ${
        notifyEnabled
          ? "bg-yellow-800 text-black"
          : "hover:bg-zinc-800 text-white"
      }
    `}
        >
          🔔
        </button>
      )}
    </div>
  );
}
