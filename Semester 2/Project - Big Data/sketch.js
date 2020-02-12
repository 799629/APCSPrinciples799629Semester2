//  Kawika Tu
// 	2/7/20
//  This is a comment

var stats
var players

function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5,5,5);
  fill(22, 30, 150);
  loadStats();
  loadPlayerStats("Kobe Bryant");
  console.log(statsArray[10]);
}//End Setup

function draw(){
  createPlayerSelectionList();
  getSelectedPlayers();
}//end function draw

//chooses the row of the selected player and shows the stats of this player
function loadPlayerStats(player){
  statsArray = stats.findRows(player,2);
  if(statsArray.length === 0){
    statsArray = stats.findRows(player+"*",2);
  }//end if statement
}//end function loadPlayerStats

//finds a specific stat in the table
function aggregateStats(player, stat){
  var results = [];
  for(var i = 0; i < statsArray.length; i++){
    results.push(statsArray[i].get(stat));
  }//end for loop
  return results;
}//end function aggregateStats

//creates a UI that allows the user to select which player's stats they want to look at
function createPlayerSelectionList(){
  playerSel = createSelect(true);
  playerSel.position((windowWidth-width)/2 + 270, (windowHeight-height)/2 + 40);
}//end function createPlayerSelectionList

function getSelectedPlayers(){
  var chosenPlayers = [];
  for(var i = 0; i < playerSel.elt.selectedOptions.length; i++){
    chosenPlayers.push(playerSel.elt.selectedOptions[i].value);
  }//end for
}//end function getSelectedPlayers
