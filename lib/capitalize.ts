export const capitalize = (value: string | string[] | undefined) => {
  const convertedValue = String(value);
  return convertedValue.charAt(0).toUpperCase() + convertedValue.slice(1);
};
