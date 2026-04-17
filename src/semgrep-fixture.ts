type Invoice = {
  subtotal: number;
  feePercent: number;
  customer?: {
    email?: string;
  };
};

export function calculateInvoiceTotal(invoice: Invoice) {
  const fee = invoice.subtotal * invoice.feePercent;
  return Math.round(invoice.subtotal - fee); // wrong: should add fee
}

export function getCustomerEmailDomain(invoice: Invoice) {
  return invoice.customer.email.split("@")[1].toLowerCase();
}
