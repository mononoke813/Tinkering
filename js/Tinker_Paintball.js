console.log("Greetings from Tinkertown!");

//paintball guns can hold max 200 rounds
//paintball colors are filled at random and hold different point values
//red paintballs earn 4 pts, blue earns 10 pts, green earns 2 pt, yellow earns 5 pts

const greenPaintballPoints = 2;
const redPaintballPoints = 4;
const yellowPaintballPoints = 5;
const bluePaintballPoints = 10;

//the paintballs are not in equal quantities and players find out the amount of each color they will get once they are assigned a paintball gun

const eachPaintballContainer = () => {
    let randomGreenPaintballs = Math.floor(Math.random() * 200) + 0;
    let redMaxRange = 200 - randomGreenPaintballs;
    //console.log(`Random green amount: ${randomGreenPaintballs}`);

    let randomRedPaintballs = Math.floor(Math.random() * redMaxRange);
    let yellowMaxRange = 200 - randomGreenPaintballs - randomRedPaintballs;
    //console.log(`Random red amount: ${randomRedPaintballs}`);

    let randomYellowPaintballs = Math.floor(Math.random() * yellowMaxRange);
    let bluePaintballCount = 200 - randomGreenPaintballs - randomRedPaintballs - randomYellowPaintballs;
    //console.log(`Random yellow amount: ${randomYellowPaintballs}`);

    let randomBluePaintballs = bluePaintballCount;
    //console.log(`Random blue amount: ${randomBluePaintballs}`);

    return `The following are your paintball counts: 
    Green Paintballs = ${randomGreenPaintballs};
    Red Paintballs = ${randomRedPaintballs};
    Yellow Paintballs = ${randomYellowPaintballs};
    Blue Paintballs = ${randomBluePaintballs}.`;
}

const player1 = eachPaintballContainer();
console.log(player1);

const player2 = eachPaintballContainer();
console.log(player2);

const player3 = eachPaintballContainer();
console.log(player3);


// let randomPaintballsTotal = randomRedPaintballs + ;
// console.log(`This is the total for all random paintballs: ${randomPaintballsTotal}`);

//console.log(`Supposed to be the total (200) rounds of all random paintballs: ${paintballRounds}`);

//there are two ways to fire: 1. rapid fire which is 12 rounds per second, and
//  2. normal fire which is 7 rounds per second
//teams consist of 8 players max and play in matches to determine a victor
//a team cannot lose more than 3 players in order to qualify for the second match
//after the second match, teams cannot lose more than 1 player to qualify for finals
//the victor is determined in the finals
//each player has a max health of 100 and is removed from the match if their health drops below 20%
//when starting the second match, all players receive a 100% increase to their respective health
//if player health drops below 25% in second round, they are removed from the match
//staring in the final round, all players receive a 50% increase to health and play to the death (0% health)
//winning involves either having the most team members alive, having the most health,
//  completely annihilating the other team within the time given, or whichever team earned most pts
//  based on each ball color type (i.e. team 1 landed 2 blue and 5 red, team 2 landed 3 blue and 2 red - 45 v 40)
//each match has a time limit for play: match 1 - 15:00 min, match 2 - 7:30 min, final match - 5:00 min
//each match playing field decreases by 30%
//barrier objects decrease with each match