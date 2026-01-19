import type { Datum } from "../types/event";

export function splitEvents(events: Datum[]) {
  const now = Date.now();
  const tomorrow = now + 24 * 60 * 60 * 1000;

  return {
    active: events.filter((e) => e.startTime <= now && e.endTime > now),
    upcoming: events.filter((e) => e.startTime > now && e.startTime < tomorrow),
  };
}
