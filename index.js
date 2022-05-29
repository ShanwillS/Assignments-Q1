"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var TravelDetails = /** @class */ (function () {
    function TravelDetails() {
    }
    return TravelDetails;
}());
function main() {
    var travelDetailsList = [];
    var complete = false;
    while (!complete) {
        var travelDetails = {};
        var driverName = (0, readline_sync_1.question)('Please enter the drivers name:\n');
        travelDetails.driverName = driverName;
        var totalKm = (0, readline_sync_1.question)('How many kilometers were travelled?\n');
        if (!isNumber(totalKm)) {
            console.error('Invalid input: The total kilometers travelled must be a numeric value');
            continue;
        }
        travelDetails.totalDistance = parseInt(totalKm);
        var totalLitersFuel = (0, readline_sync_1.question)('How much litres of fuel was used?\n');
        if (!isNumber(totalLitersFuel)) {
            console.error('Invalid input: The total liters of fuel must be a numeric value');
            continue;
        }
        travelDetails.totalLitersFuel = parseInt(totalLitersFuel);
        travelDetailsList.push(travelDetails);
        var proceed = (0, readline_sync_1.question)('Do you wish to continue? Y/N\n');
        if (proceed.toUpperCase() == 'Y')
            continue;
        break;
    }
    travelDetailsList.forEach(function (x) {
        console.log("Driver name: ".concat(x.driverName, " \nTotal distance: ").concat(x.totalDistance, " \nTotal liters of Fuel:").concat(x.totalLitersFuel, " \n"));
    });
    // get total liters of fuel used of all cars
    console.log("Total litres of Fuel used: ".concat(calculateTotalLitresFuel(travelDetailsList), " litres"));
    console.log("Total number of cars travelling together: ".concat(calculateTotalNumberCars(travelDetailsList)));
    console.log("Average litres of fuel used: ".concat(calculateAverageLitreFuel(travelDetailsList), " litres"));
}
var isNumber = function (str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
};
var calculateTotalLitresFuel = function (arr) {
    var sum = 0;
    sum = arr.map(function (a) { return a.totalLitersFuel; }).reduce(function (a, b) {
        return a + b;
    });
    return sum;
};
var calculateTotalNumberCars = function (arr) {
    return arr.length;
};
var calculateAverageLitreFuel = function (arr) {
    var total = calculateTotalNumberCars(arr);
    var sum = calculateTotalLitresFuel(arr);
    return sum / total;
};
main();
