// return true if given expiry exceeds current time
const hasExpired = (exp: number): boolean => {
  return Math.floor(new Date().getTime() / 1000) > exp;
};

export default hasExpired;
