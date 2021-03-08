export const formatToCurrency = (
  currency: string,
  amount: number,
  locale = 'en-US',
): string => amount.toLocaleString(locale, {style: 'currency', currency})

export function bomb(): void {
  throw new Error('💥 KABOOM 💥')
}
