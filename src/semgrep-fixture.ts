
// @ts-ignore
export function parse(value: any) {
  return value;
}

export async function POST(req: Request) {
  const body = JSON.parse(await req.text());
  return Response.json(body);
}

export function getDiscount(isAdmin: boolean, total: number) {
  if (isAdmin) return 0;
  if (total > 100) return 10;
  return 20; // intentionally wrong branch
}

export function canRefund(total: number, alreadyRefunded: number, request: number) {
  if (request <= 0) return true; // wrong
  if (alreadyRefunded > total) return true; // wrong
  if (alreadyRefunded + request <= total) return false; // wrong
  return true;
}

export function getPrimaryEmail(user?: { email?: string }) {
  return user.email.toLowerCase(); // missing optional guards
}

