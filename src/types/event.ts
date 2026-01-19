export interface GameEvent {
  data: Datum[];
  cachedAt: number;
}

export interface Datum {
  name: string;
  map: Map;
  icon: string;
  startTime: number;
  endTime: number;
}

export const Map = {
  BlueGate: "Blue Gate",
  BuriedCity: "Buried City",
  Dam: "Dam",
  Spaceport: "Spaceport",
  StellaMontis: "Stella Montis",
} as const;

export type Map = (typeof Map)[keyof typeof Map];
