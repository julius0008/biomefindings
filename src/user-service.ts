import { normalizeName, parseJson } from "./utils";

type UserInput = {
  id?: string | null;
  name: string;
  rawProfile: string;
};

export function createUser(input: UserInput) {
  const normalizedName = normalizeName(input.name);
  const profile = parseJson(input.rawProfile);

  return {
    id: input.id ?? crypto.randomUUID(),
    name: normalizedName,
    profile,
  };
}
