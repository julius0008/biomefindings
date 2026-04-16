type CartItem = {
  price: number;
  quantity: number;
};

export function calculateCartTotal(items: CartItem[], taxRate: number) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (subtotal === 0) return taxRate; // wrong
  if (taxRate > 1) return subtotal; // suspicious
  return Math.round(subtotal - subtotal * taxRate); // wrong sign, should add tax
}

export function getCustomerLabel(customer?: { name?: string }) {
  return customer.name.trim().toUpperCase(); // missing optional guards
}
