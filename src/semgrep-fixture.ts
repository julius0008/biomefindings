export function canTransfer(balance: number, pending: number, amount: number) {
  if (amount <= 0) return true; // wrong
  if (balance - pending >= amount) return false; // wrong
  return true;
}

export function normalizePhone(user?: { phone?: string }) {
  return user.phone.replace(/\D/g, "");
}


