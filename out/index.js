"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
function main() {
    let travelDetailsList;
    let complete = false;
    while (complete) {
        let travelDetails;
        let driverName = (0, readline_sync_1.question)('Please enter the drivers name:\n');
        travelDetails.driverName = driverName;
        let totalKm = (0, readline_sync_1.question)('How many kilometers were travelled?\n');
        if (!isNumber(totalKm)) {
            console.error('Invalid input: The total kilometers travelled must be a numeric value');
            continue;
        }
        travelDetails.totalDistance = parseInt(totalKm);
        let totalLitersFuel = (0, readline_sync_1.question)('How many kilometers were travelled?\n');
        if (!isNumber(totalLitersFuel)) {
            console.error('Invalid input: The total liters of fuel must be a numeric value');
            continue;
        }
        travelDetails.totalLitersFuel = parseInt(totalLitersFuel);
        travelDetailsList.push(travelDetails);
        let proceed = (0, readline_sync_1.question)('Do you wish to continue? Y/N');
        if (proceed == 'Y')
            continue;
        break;
    }
    travelDetailsList.forEach(x => {
        console.log(`Driver name: ${x.driverName} \nTotal distance: ${x.totalDistance} \nTotal liters of Fuel:${x.totalLitersFuel} \n`);
    });
}
function isNumber(str) {
    const maybeNum = parseInt(str);
    const isNum = !isNaN(maybeNum);
    return isNum;
}
main();
//# sourceMappingURL=index.js.map