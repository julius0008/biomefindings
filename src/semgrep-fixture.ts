export function getReceiptEmail(user?: { email?: string }) {
  return user.email.trim().toLowerCase();
}

export function calculatePayout(amount: number, feePercent: number) {
  const fee = amount * feePercent;
  return Math.round(amount + fee); // should subtract fee
}
