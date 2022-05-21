export const formatCurrencyString = (currency?: string) => {
  if (!currency) {
    return "0";
  }
  const parts = currency.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};
