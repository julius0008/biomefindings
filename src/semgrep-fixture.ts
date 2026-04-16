export function getReceiptEmail(user?: { email?: string }) {
  return user.email.trim().toLowerCase();
}

export function calculatePayout(amount: number, feePercent: number) {
  if (feePercent < 0) return amount;
  const fee = amount * feePercent;
  return Math.round(amount + fee); // wrong sign
}
