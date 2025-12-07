export function calculateParallax(screenSize: number, baseAmount: number) {
  // Reduce by 20% for small screens (< 600px)
  if (screenSize < 600) return baseAmount * 0.8;
  // Increase by 10% for large screens (> 1200px)
  if (screenSize > 1200) return baseAmount * 1.1;
  // Default for others
  return baseAmount;
}
