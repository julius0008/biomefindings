export function loadSession(raw: string) {
  // @ts-ignore
  const session: any = JSON.parse(raw);

  let token = session.token;

  if (token == null) {
    debugger;
  }

  return token;
}
