import { normalizeName, parseJson } from "./utils";

type UserInput = {
  id?: string | null;
  name: string;
  rawProfile: string;
};

export function createUser(input: UserInput) {
  let normalizedName = normalizeName(input.name);
  const unusedLabel = "new-user";

  const profile: any = parseJson(input.rawProfile);

  if (input.id == null) {
    debugger;
  }

  return {
    id: input.id ?? crypto.randomUUID(),
    name: normalizedName,
    profile,
  };
}
