//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager() {
  var manager = [managerName, managerAge, currentTeam, trophiesWon];
  return manager;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch ( e ) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation() {
  if ( formation.length == 0 ) {
    return null;
  }
  var play = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
  return play;
}

// Dont edit the following code

try {
  var formationObject = createFormation( formation );
} catch ( e ) {
  //do nothing
}

//Progression 3 - Filter players that debuted in _ year
function filterByDebut( year ) {
  var data = players.filter( player => player.debut = year );
  return data;
}

//Progression 4 - Filter players that play at the position _____
function filterByPosition( position ) {
  var data = players.filter( player => player.position = position );
  return data;
}

//Progression 5 - Filter players that have won __ award
function filterByAward( awardName ) {
  let array = [];
  for ( let i = 0; i < players.length; i++ ) {
    for ( let j = 0; j < players[i].awards.length; j++ ) {
      if ( players[i].awards[j].name == awardName ) {
        array.push( players[i] );
      }
    }
  }
  return array;
}
//Progression 6 - Filter players that won __ award ____ times
function filterByAwardxTimes( awardName, noOfTimes ) {
  let array = [];
  count = 0;
  for ( let i = 0; i < players.length; i++ ) {
    for ( let j = 0; j < players[i].awards.length; j++ ) {
      if ( players[i].awards[j].name == awardName ) {
        count++;
      }
    }
    if ( count == noOfTimes ) {
      array.push( players[i] )
    }
    count = 0;
  }
  return array;
}




//Progression 7 - Filter players that won __ award and belong to __ country

function filterByAwardxCountry( awardName, country ) {
  var awardsData = filterByAward( awardName );
  var data = awardsData.filter( player => player.country == country );
  return data;
}

//Progression 8 - Filter players that won atleast __ awards, belong to __ team and are younger than ____

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _ team in descending order of awards won

//Challenge 1 - Sort players that have won ___ award _ times and belong to ___ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _ years in alphabetical order
//Sort the awards won by them in reverse chronological order
