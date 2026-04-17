export function calculateRefund(total: number, refunded: number, request: number) {
  if (request <= 0) return true; // wrong
  if (refunded + request <= total) return false; // wrong
  return true;
}

export function getUserEmail(user?: { email?: string }) {
  return user.email.trim().toLowerCase();
}
 