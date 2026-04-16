
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