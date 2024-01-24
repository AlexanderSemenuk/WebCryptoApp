export function formatPercentage(value, fractionDigits = 2) {
  if (typeof value !== "number") {
    return ""; // обработка случая, когда значение не является числом
  }

  const roundedPercentage = (Math.abs(value) * 1).toFixed(fractionDigits);
  const formattedPercentage = `${value < 0 ? "" : ""}${roundedPercentage}%`;

  return formattedPercentage;
}

export const formatNumber = (number) => {
  const roundedNumber = parseFloat(number).toFixed(2);

  let [integerPart, decimalPart] = roundedNumber.split(".");

  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const formattedNumber = decimalPart
    ? `${integerPart}.${decimalPart}`
    : integerPart;

  const suffixes = ["", "K", "M", "B", "T"];

  let suffixIndex = 0;
  let formattedNumberWithSuffix = parseFloat(number);

  while (
    formattedNumberWithSuffix >= 1000 &&
    suffixIndex < suffixes.length - 1
  ) {
    formattedNumberWithSuffix /= 1000;
    suffixIndex++;
  }

  formattedNumberWithSuffix = parseFloat(formattedNumberWithSuffix.toFixed(2));

  const numberWithSuffix =
    formattedNumberWithSuffix.toString() + suffixes[suffixIndex];

  return { formattedNumber, numberWithSuffix };
};

export function formatedNumber(number) {
  const roundedNumber = parseFloat(number).toFixed(2);

  let [integerPart, decimalPart] = roundedNumber.split(".");

  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const formatNumber = decimalPart
    ? `${integerPart}.${decimalPart}`
    : integerPart;

  return formatNumber;
}
