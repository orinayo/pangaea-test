export  const formatToCurrency = (currency: string, amount: number, locale="en-US"):string =>
  amount.toLocaleString(locale, {style: 'currency', currency})
