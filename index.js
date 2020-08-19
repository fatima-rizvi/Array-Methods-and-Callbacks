import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

//a)
const finalGames = fifaData.filter(function(item){ //use .filter() to isolate all final games
    return item["Stage"] === "Final";
});

// make a variable to hold the 2014 final
let final2014;

for(let i = 0; i < finalGames.length; i++){ //run a for loop through the array of final games
    if(finalGames[i]["Year"] === 2014){ //if the game is from the year 2014, store it into a variable
        final2014 = finalGames[i];
    };
};

//console log the home team's name
console.log(final2014["Home Team Name"]);

//b)

//console log the away team's name
console.log(final2014["Away Team Name"]);

//c) 

//console log the home team's goals
console.log(final2014["Home Team Goals"]);

//d) 

//console log the away team's goals
console.log(final2014["Away Team Goals"]);

//e)

if(final2014["Home Team Goals"] > final2014["Away Team Goals"]){
    console.log(final2014["Home Team Name"]);
}else if(final2014["Home Team Goals"] < final2014["Away Team Goals"]){
    console.log(final2014["Away Team Name"]);
};


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(arr){
    //use .filter to isolate all final games into an array
    const finalsArray = arr.filter(function(item){
        return item["Stage"] === "Final";
    });
    //return the array
    return finalsArray;
}

console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

//Create a function that accepts a callback function and an array
function getYears(cb, arr) {
    //set the returned array equal to a variable
    let returnedArray = cb(arr);
    //use .map to isolate the year values
    const years = returnedArray.map(function(item){
        return item["Year"];
    });
    //return the array of years
    return years;
};

//getYears(getFinals, fifaData);
console.log(getYears(getFinals, fifaData));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

// function getWinners(cb, arr) {
//     //create an array called winners
//     let winners = [];
//     //set the returned array equal to a variable
//     let returnedArray = cb(arr);
//     //use a for loop to iterate through each final game
//     for(let i = 0; i < returnedArray.length; i++){
//         //if the home team scored more, push the home eam to the winners array. If the away team scored more, push the away team. If there is a tie, return that statement
//         if(returnedArray[i]["Home Team Goals"] > returnedArray[i]["Away Team Goals"]){
//             winners.push(returnedArray[i]["Home Team Name"]);
//         }else if(returnedArray[i]["Home Team Goals"] < returnedArray[i]["Away Team Goals"]){
//             winners.push(returnedArray[i]["Away Team Name"]);
//         }else if(returnedArray[i]["Home Team Goals"] === returnedArray[i]["Away Team Goals"]){
//             winners.push("Tie");    
//         };
//     };
//     return winners;
// };

// const winners = [];
// function getWinners(cb) {
//     cb.forEach(function(item){
//         if(item["Home Team Goals"] > item["Away Team Goals"]){
//             winners.push(item["Home Team Name"]);
//         }else if(item["Away Team Goals"] > item["Home Team Goals"]){
//             winners.push(item["Away Team Name"]);
//         }else{
//             winners.push("Tie");
//         };
//     });
//     return winners;
// };

function getWinners(cb, data){
    // Create an array called winners
    let winners = [];
    // set the returned array equal to a variable
    let returnedArray = cb(data);
    // Use the forEach method to iterate through every item in thre returned array
    returnedArray.forEach(function(item){
        //if the home team scored more, push the home eam to the winners array. If the away team scored more, push the away team. If there is a tie, return that statement
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            winners.push(item["Home Team Name"]);
        }else if(item["Home Team Goals"] < item["Away Team Goals"]){
            winners.push(item["Away Team Name"]);
        }else if(item["Home Team Goals"] === item["Away Team Goals"]){
            winners.push("Tie");    
        };
    });
    return winners;
};

console.log(getWinners(getFinals, fifaData));
//getWinners(getFinals(fifaData));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2) {
    let winnersArray = cb1(getFinals, fifaData); //calls getWinners
    let yearsArray = cb2(getFinals, fifaData);
    for (let i = 0; i < yearsArray.length; i++){
        if(winnersArray[i] !== "Tie"){
            console.log(`In ${yearsArray[i]}, ${winnersArray[i]} won the world cup!`);
        };
    };
};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const totalHomeGoals = data.reduce(function(acc, item){
        return acc + item["Home Team Goals"];
    },0);
    const totalAwayGoals = data.reduce(function(acc, item){
        return acc + item["Away Team Goals"];
    },0);
    let avgHomeGoals = totalHomeGoals/data.length;
    let avgAwayGoals = totalAwayGoals/data.length;
    return `Average number of Home Goals: ${avgHomeGoals} 
Average number of Away Goals: ${avgAwayGoals}`;
};

console.log(getAverageGoals(fifaData));
//getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

// function getCountryWins(data, teamInit) {

// };

// getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {
    const allGoals = data.filter(function(item){
        return 
    });
};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
