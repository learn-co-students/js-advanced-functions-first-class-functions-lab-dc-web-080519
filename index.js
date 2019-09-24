// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  const firstTwoDrivers = (driverArray) => {
    return driverArray.slice(0, 2);
  }
  return firstTwoDrivers(drivers);
}

// Code your solution in this file!
function returnLastTwoDrivers(drivers) {
  const lastTwoDrivers = (driverArray) => {
    return driverArray.slice(-2);
  }
  return lastTwoDrivers(drivers);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  return fare => fare * int;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverArray, driversFunc) {
  return driversFunc(driverArray);
}