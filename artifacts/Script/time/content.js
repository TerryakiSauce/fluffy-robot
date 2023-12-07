// example.js
const moment = modules.moment;

// Get the current date and time
const now = moment();

// Format and display the current date and time
console.log('Current Date and Time:', now.format('YYYY-MM-DD HH:mm:ss'));


// example.js
const ss = modules.simpleStatistics;

// Sample data
const numbers = [1, 2, 3, 4, 5];

// Calculate the mean (average) of the numbers
const mean = ss.mean(numbers);

// Calculate the standard deviation of the numbers
const standardDeviation = ss.standardDeviation(numbers);

console.log('Mean:', mean);
console.log('Standard Deviation:', standardDeviation);
