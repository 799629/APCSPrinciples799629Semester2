//  Kawika Tu
// 	2/7/20
//  This is a comment

var stats;
var players;
var chosenPlayers;
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5,5,5);
  fill(22, 30, 150);
  loadStats();
  var userPlayer = str(prompt("Who would you like to find?"));
  var userSeason = str(prompt("What season of their's"))
  console.log(aggregateStats(userPlayer, 10));
}//End Setup

function draw(){

}//End Draw

function createPlayerSelectionList() {
  playerSel = createSelect(true); playerSel.position((windowWidth-width)/2 + 270, (windowHeight-height)/2 + 40);
 // locate at 270,40 in canvas coordinates playerSel.size(150,headerHeight-50);
}

// abstract the UI control away, put the chosen player(s) in the array chosenPlayers
function getSelectedPlayers(){
  chosenPlayers = [];
  for (var i = 0; i<playerSel.elt.selectedOptions.length; i++){
    chosenPlayers.push(playerSel.elt.selectedOptions[i].value); }
}

// find the stats for the chosen player in the stats table. result is an array of table rows, one for each year the player was in the league
function loadPlayerStats(player){
// column 2 has the player's name in the stats table
  statsArray = stats.findRows(player, 2);
  if (statsArray.length === 0) {
// try adding an '*'
    statsArray = stats.findRows(player+"*", 2);
  }
}//end function loadPlayerStats

// collect stats into arrays for generic approach to graphing
function aggregateStats(player, stat){
  results = [];
  for (var i =0; i<statsArray.length; i++) {
    for (var i=0; i<statsToPlot.length; i++) {
      lerpRatio = i/(statsToPlot.length-1); colorToUse = lerpColor(colorStart, colorEnd, lerpRatio);
    }
  }
  return results
}//end function aggregateStats

//y = map(values[i], smallest, largest, 0, drawAreaHeight);
