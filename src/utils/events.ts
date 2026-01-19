import type { Datum } from "../types/event";

export function splitEvents(events: Datum[]) {
  const now = Date.now();

  return {
    active: events.filter((e) => e.startTime <= now && e.endTime > now),
    upcoming: events.filter((e) => e.startTime > now),
  };
}
