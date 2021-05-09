export const compareString = (pattern, value) => {
  /* eslint eqeqeq: "off" */
  if (pattern == value) return true;

  pattern = pattern.replace('*', '.*');
  const regex = new RegExp(`^${pattern}`, 'u');

  return regex.test(value);
};
