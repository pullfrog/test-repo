export function formatCurrency(amount: number) {
  return `$${amount.toFixed(2)}`;
}

export function formatPercent(value: number) {
  return `${(value * 100).toFixed(1)}%`;
}
