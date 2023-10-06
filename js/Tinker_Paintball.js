console.log("hello");

//paintball guns can hold max 200 rounds
//paintball colors are random and hold diff pt values
//red balls earn 5 pts, blue earns 10 pts, green earns 4 pt, yellow earns 6 pts
//the balls are not in equal quantities and unk amounts of each
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