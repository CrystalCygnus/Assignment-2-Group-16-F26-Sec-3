const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter the number of seats: ", (seats) => {
    input.question("Enter the number of doors: ", (doors) => {
        const seatCount = Number(seats);
        const doorCount = Number(doors);

        if (
            !Number.isInteger(seatCount) ||
            !Number.isInteger(doorCount) ||
            seatCount < 2 || seatCount > 7 ||
            doorCount < 2 || doorCount > 5
        ) {
            console.log("Invalid input: seats must be 2¨C7 and doors must be 2 - 5.");
            input.close();
            return;
        }
        console.log("\nCar parts summary");
        console.log("Engine: 1");
        console.log("Wheels: 4");
        console.log("Seats: " + seats);
        console.log("Doors: " + doors);

        input.close();
    });
});