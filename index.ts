import {question} from 'readline-sync';

class TravelDetails
{
    driverName: string;
    totalDistance: number;
    totalLitersFuel: number;
}

function main(): void
{    
    let travelDetailsList = [];

    let complete: boolean = false;
    while (!complete) {
        let travelDetails:TravelDetails = {} as TravelDetails;

        let driverName: string = question('Please enter the drivers name:\n');
        travelDetails.driverName = driverName;

        let totalKm: string = question('How many kilometers were travelled?\n');
        if(!isNumber(totalKm))
        {
            console.error('Invalid input: The total kilometers travelled must be a numeric value');
            continue;
        }
        travelDetails.totalDistance = parseInt(totalKm);

        let totalLitersFuel: string = question('How much litres of fuel was used?\n');
        if(!isNumber(totalLitersFuel))
        {
            console.error('Invalid input: The total liters of fuel must be a numeric value');
            continue;
        }
        travelDetails.totalLitersFuel = parseInt(totalLitersFuel);

        travelDetailsList.push(travelDetails);
        
        let proceed: string = question('Do you wish to continue? Y/N\n');
        if(proceed.toUpperCase() == 'Y')
            continue;

        break;
    }

       travelDetailsList.forEach( x => {
        console.log(`Driver name: ${x.driverName} \nTotal distance: ${x.totalDistance} \nTotal liters of Fuel:${x.totalLitersFuel} \n`);
    });

    // get total liters of fuel used of all cars
    console.log(`Total litres of Fuel used: ${calculateTotalLitresFuel(travelDetailsList)} litres`);
    console.log(`Total number of cars travelling together: ${calculateTotalNumberCars(travelDetailsList)}`);
    console.log(`Average litres of fuel used: ${calculateAverageLitreFuel(travelDetailsList)} litres`);
    
}

const isNumber = (str: string) : boolean =>
{
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}

const calculateTotalLitresFuel = (arr) =>
{
    let sum = 0;

    sum = arr.map(a => a.totalLitersFuel).reduce(function(a, b)
    {
      return a + b;
    });
    
    return sum;
}

const calculateTotalNumberCars = (arr) =>
{
    return arr.length;
}

const calculateAverageLitreFuel = (arr) =>
{    
    let total = calculateTotalNumberCars(arr);
    let sum = calculateTotalLitresFuel(arr);
    
    return sum/total;
}

main();