export function normalizeName(name: string) {
  return name.trim().toLowerCase();
}

export function parseJson(raw: string) {
  return JSON.parse(raw);
}
