// alert
var ages = [
    29,
    61,  // 29 + 61 = 90
    20,  // 90 + 20 = 110
    25,  // 110 + 25 = 135
    90   // 135 + 90 = 225
];

// var something = ages[3];
// var something = people[3];
// console.log(something);
// console.log(something[1]);
// alert("This is linked!");
var people = [
    ["Dan", 30, "Cheeseburgers"],
    ["Sammy", 62, "Popsicles"],
    ["Alameen", 21, "KitKat"],
    ["Brittani", 26, "Salmon Patties"],
    ["Ryan", 91, "protien powder"]
];
// create a new array by extracting the second element of each current person
var totalExperienceAgain = 0;

for (var i = 0; i < people.length; i++) {
    console.log("Adding " + people[i][1]);
    // totalExperienceAgain += people[i][1]; // totalExperienceAgain = totalExperienceAgain + people[i][1]
    totalExperienceAgain = totalExperienceAgain + people[i][1];
}

console.log("The SUM of the ages is " + totalExperienceAgain);
// people.length
var averageAge = totalExperienceAgain / people.length;
console.log("The average age of these people is " + averageAge);
// var something = people[3][1];
// console.log("Brittani is " + something + " years old.");

// // i = I h ad it on my paper
// // create a for loop that goes through the array
// console.log("Calculate total ages of everyone in the list");
// var totalExperience = 0;
// // console.log(ages[0] + ages[1] + ages[2] + ages[3] + ages[4]);
// for (var i = 0; i < ages.length; i++) { // i++ is the same as i = i + 1
// // and adds the second index together
//     console.log("Adding " + ages[i]);
//     // totalExperience += ages[i];
//     totalExperience = totalExperience + ages[i]; // i += 100 is the same as i = i + 100
//     console.log("Total experience is now " + totalExperience);
// }

// console.log("Number of years: " + totalExperience);

// for (var i = 0; i < people.length; i++) {
//     // var name = people[i][0];
//     // console.log("The name here is " + name);
//     console.log("SOMEONE is " + people[i][1] + " years old.");
// }

// console.log("================");
// console.log("All the names to follow")
// var names = people[0];
// console.log(names);

console.log("=========================");
console.log("candy bars. :(");
var candyIveEaten = [
    ["Mars", 1], // i ate 1 :)
    ["Krispy", 3], // 3 - 1 = 2 mars bars this week
    ["Digestive", 8], // 8 - 3 = 5 mars bars this week
    ["Brittygoodness", 11],
    ["Heath", 12],
    ["KitKat", 31]
];

for (var i = 1; i < candyIveEaten.length; i++) { // i = i - 1 is the same as i--
    var howMuchIsGoneNow = candyIveEaten[i][1];
    var howMuchWasGoneLastWeek = candyIveEaten[i - 1][1];
    var howMuchIAteThisWeek = howMuchIsGoneNow - howMuchWasGoneLastWeek;
    console.log("Dan eated " + howMuchIAteThisWeek + " candy bars during week " + i);
}

var someNumbers = [13,434,523,434,53,4523,   6522,    6524,    3747,345,234,6456,34,6523,452,3453,46,236,34,634,51,513,652,46,2346,24,623,623];

var maxNumber = 0;
for (var i = 0; i < someNumbers.length; i++) {
    if (someNumbers[i] > maxNumber) {
        maxNumber = someNumbers[i];
    }
}
console.log("The max is " + maxNumber);