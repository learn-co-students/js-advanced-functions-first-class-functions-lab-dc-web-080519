const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiply){
  return function(value) {
    return multiply * value;
  }
}

const fareDoubler = createFareMultiplier(2)


const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers = function(drivers, driverGroup){
  return driverGroup(drivers)
}
