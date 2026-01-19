import type { Datum } from "../types/event";

export async function fetchEvents() {
  try {
    const response = await fetch(import.meta.env.VITE_EVENTS_URL);
    if (!response.ok) {
      throw new Error(`Error fetching events: ${response.statusText}`);
    }
    const data = await response.json();
    // console.log("Fetched events:", data);
    return data as { data: Datum[] };
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return { data: [] } as { data: Datum[] };
  }
}

