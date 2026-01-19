import type { Datum } from "../types/event";

const API_URL = import.meta.env.DEV
  ? `${import.meta.env.VITE_API_BASE}/api/arc-raiders/events-schedule`
  : import.meta.env.VITE_NETLIFY_FUNCTION;

export async function fetchEvents(): Promise<{ data: Datum[] }> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Error fetching events: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data as { data: Datum[] };
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return { data: [] };
  }
}
