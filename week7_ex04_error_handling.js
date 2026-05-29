// Validates basic user input.
function validateUserInput(input) {
  if (input === null || input === undefined) {
    throw new Error("Input is required.");
  }

  if (typeof input !== "string") {
    throw new TypeError("Input must be a string.");
  }

  const trimmed = input.trim();

  if (trimmed.length === 0) {
    throw new Error("Input cannot be empty.");
  }

  return true;
}

// Demonstrates multiple error types.
function demonstrateErrors(type) {
  switch (type) {
    case "type":
      throw new TypeError("This is a TypeError.");

    case "range":
      throw new RangeError("This is a RangeError.");

    case "reference":
      throw new ReferenceError("This is a ReferenceError.");

    case "syntax":
      throw new SyntaxError("This is a SyntaxError.");

    default:
      throw new Error("Generic error.");
  }
}

// String helper functions.
const stringHelpers = {
  capitalize(str) {
    if (typeof str !== "string") return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  reverse(str) {
    if (typeof str !== "string") return "";
    return str.split("").reverse().join("");
  },

  isPalindrome(str) {
    if (typeof str !== "string") return false;

    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return normalized === normalized.split("").reverse().join("");
  },

  truncate(str, maxLength) {
    if (typeof str !== "string") return "";
    if (str.length <= maxLength) return str;

    return str.slice(0, maxLength) + "...";
  }
};

// Array helper functions.
const arrayHelpers = {
  unique(arr) {
    return [...new Set(arr)];
  },

  chunk(arr, size) {
    const result = [];

    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }

    return result;
  },

  flatten(arr) {
    return arr.flat(Infinity);
  },

  sum(arr) {
    return arr.reduce((total, value) => total + value, 0);
  }
};