const mathSplitter = (input: string) => {
  let current = "";
  const result: string[] = [];
  input.split("").forEach((char) => {
    if (char === "+" || char === "-") {
      result.push(current);
      result.push(char);
      current = "";
    } else {
      current += char;
    }
  });
  result.push(current);
  return result;
};

const calculate = (input: string[]) => {
  if (input.length === 1) {
    return parseInt(input[0], 10);
  } else if (input.length % 2 === 0) {
    return NaN;
  }
  let result = parseInt(input[0], 10);
  let current: number = 0;
  let operator: string = "";
  input.forEach((value) => {
    if ((value === "+" || value === "-") && !operator) {
      operator = value;
    } else if (!!operator) {
      if (operator === "+") {
        result += Number.parseInt(value, 10);
      } else {
        result -= Number.parseInt(value, 10);
      }
      operator = "";
    }
  });
  if (operator === "+") {
    result += current;
  } else {
    result -= current;
  }
  return result;
};

export const stringCalculator = (input: string) => {
  if (!input) {
    return 0;
  }
  if (input.match(/[^\d+\-\\ ]/)) {
    return NaN;
  }
  const noSpaces = input.split("").reduce((previousValue, currentValue) => {
    if (currentValue === " ") {
      return previousValue;
    }
    return previousValue + currentValue;
  });
  const mathSplit = mathSplitter(noSpaces);
  return calculate(mathSplit);
};
