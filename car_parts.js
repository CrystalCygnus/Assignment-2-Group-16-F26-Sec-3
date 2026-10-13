const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter the number of seats: ", (seats) => {
    input.question("Enter the number of doors: ", (doors) => {
        console.log("\nCar parts summary");
        console.log("Engine: 1");
        console.log("Wheels: 4");
        console.log("Seats: " + seats);
        console.log("Doors: " + doors);

        input.close();
    });
});