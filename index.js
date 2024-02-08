// problem 1
function calculateMoney(ticketQuantity) {
  if (ticketQuantity <= 0) {
    return "it's a negative number ";
  }

  const ticketPrice = 120;
  const securityGuard = 500;
  const staffLunch = 8 * 50;

  const totalSell = ticketPrice * ticketQuantity;
  const spendingAmount = securityGuard + staffLunch;

  const profit = totalSell - spendingAmount;

  return profit;
}
// console.log(calculateMoney(-0));

//problem 2
function checkName(name) {
  if (typeof name === "string") {
    // Accessing the last character in the string
    let nameLower = name.toLowerCase();
    const lastCharacter = nameLower[nameLower.length - 1];
    if (
      lastCharacter === "a" ||
      lastCharacter === "y" ||
      lastCharacter === "i" ||
      lastCharacter === "e" ||
      lastCharacter === "o" ||
      lastCharacter === "u" ||
      lastCharacter === "w"
    ) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }
  return "invalid";
}

// console.log(checkName("Ex.name"));

//problem 3

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }

  let numbersArray = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && !isNaN(array[i])) {
      numbersArray.push(array[i]);
    }
  }

  return numbersArray;
}

/* console.log(
  deleteInvalids([
    1,
    null,
    undefined,
    18,
    -19,
    NaN,
    "12",
    [1, 2],
    { ob: "lala" },
  ])
);
console.log(deleteInvalids({ num: [1, 2, 3] })); */

//problem 4
function password(obj) {
  const { name, birthYear, siteName } = obj;

  if (name && birthYear && siteName) {
    const birthYearIsFourDigit = birthYear.toString().length === 4;

    if (!birthYearIsFourDigit) {
      return "invalid";
    }

    const password = birthYearIsFourDigit && `${siteName}#${name}@${birthYear}`;

    return password.toString();
  }
  return "invalid";
}

// console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));

//problem 5

function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) && typeof livingCost === "number") {
    let paymentReceived = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 3000) {
        paymentReceived.push(arr[i]);
      } else {
        let afterTax = arr[i] - (arr[i] * 20) / 100;
        paymentReceived.push(afterTax);
      }
    }

    let totalIncome = 0;

    for (let x = 0; x < paymentReceived.length; x++) {
      totalIncome = totalIncome + paymentReceived[x];
    }

    const saving = totalIncome - livingCost;

    if (saving < 0) {
      return "Earn More";
    } else {
      return saving;
    }
  }
  return "invalid input";
}

// console.log(monthlySavings([1000, 2000, 3000], 5400));
