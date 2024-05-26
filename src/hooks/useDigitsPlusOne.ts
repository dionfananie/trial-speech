const useDigitPlusOne = () => {
  const mainFunc = (digits: number[]) => {
    let pos = digits.length - 1;

    while (digits[pos] === 9) {
      digits[pos] = 0;
      pos = pos - 1;
      console.log("digits: ", digits);
    }

    if (digits[pos] >= 0) {
      digits[pos] = digits[pos] + 1;
      return digits;
    }
    digits.unshift(1);
    return digits;
  };

  console.log(mainFunc([1, 3, 5, 9, 9]));
};

export default useDigitPlusOne;
