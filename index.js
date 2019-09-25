// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    let array = []
    array.push(drivers[0])
    array.push(drivers[1])
    return array
}

function returnLastTwoDrivers(drivers) {
  const lastTwo = function (drivers) {
    let array = []
    array.push(drivers[drivers.length-2])
    array.push(drivers[drivers.length-1])
    return array
  }
  return lastTwo(drivers)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  let multipy = function(fare) {
    return fare * multiplier
  }
  return multipy
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(driverArray, funcChoice){
  return funcChoice(driverArray)
}
