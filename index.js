// Code your solution in this file!
const returnFirstTwoDrivers = function (arrayDrivers) {
  return arrayDrivers.slice(0, 2);
};

const returnLastTwoDrivers = function (arg) {
  return arg.slice(arg.length - 2, arg.length);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function (arg) {
  return function (fare) {
    return fare * arg;
  };
};
const fareDoubler = function (arg) {
  const Multiplier = arg;
  return Multiplier * 2;
};

const fareTripler = function (arg) {
  const Multiplier = arg;
  return Multiplier * 3;
};
let selectDifferentDrivers = (arr, fun) => {
  if (arr.slice(0, 2) !== fun(arr)) {
    return fun(arr);
  } else {
    return fun(arr);
  }
};
