// e2e-test-calculator.js — ShipBot E2E test file (safe to delete)

function factorial(n) {
  if (n < 0) throw new RangeError("Negative");
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function formatCurrency(amount, currency) {
  const symbols = { USD: "$", EUR: "€", GBP: "£" };
  return (symbols[currency] || currency + " ") + amount.toFixed(2);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

module.exports = { factorial, formatCurrency, clamp };