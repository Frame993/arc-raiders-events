import { useEffect, useState } from "react";
import { fetchEvents } from "./services/events";
import { splitEvents } from "./utils/events";
import type { Datum } from "./types/event";
import { EventCard } from "./components/EventCard";

function App() {
  const [active, setActive] = useState<Datum[]>([]);
  const [upcoming, setUpcoming] = useState<Datum[]>([]);

  useEffect(() => {
    fetchEvents().then((events) => {
      const { active, upcoming } = splitEvents(events.data);
      setActive(active);
      setUpcoming(upcoming);
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Arc Raiders Events</h1>

      <section className="mb-8">
        <h2 className="text-xl mb-4">🟢 Activos</h2>
        <div className="space-y-3">
          {active.map((e) => (
            <EventCard key={e.startTime + e.name + e.map} event={e} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl mb-4">⏳ Próximos</h2>
        <div className="space-y-3">
          {upcoming.map((e) => (
            <EventCard key={e.startTime + e.name + e.map} event={e} notify />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
