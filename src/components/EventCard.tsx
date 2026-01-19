import type { Datum } from "../types/event";
import { scheduleNotification } from "../utils/notifications";

interface Props {
  event: Datum;
  notify?: boolean;
}

export function EventCard({ event, notify }: Props) {
  return (
    <div className="flex gap-4 bg-zinc-900 p-4 rounded-xl items-center">
      <img src={event.icon} className="w-14 h-14" />

      <div className="flex-1">
        <h3 className="font-semibold">{event.name}</h3>
        <p className="text-sm text-zinc-400">{event.map}</p>
        <p className="text-xs text-zinc-500">
          {new Date(event.startTime).toLocaleString()}
        </p>
      </div>

      {notify && (
        <button
          onClick={() =>
            scheduleNotification(
              "Arc Raiders Event",
              `${event.name} en ${event.map}`,
              event.startTime,
            )
          }
          className="bg-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-500"
        >
          🔔
        </button>
      )}
    </div>
  );
}
