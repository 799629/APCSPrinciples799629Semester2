//  Kawika Tu
// 	2/7/20
//  This is a comment

var stats;
var players;
var playerStat;
var statLoc;
var statColumn;
var userInput;
var statsArray = [];

function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5,5,5);
  fill(22, 30, 150);
  loadStats()

  input = createInput('');
  input.position(300, 400);

  button = createButton('submit');
  button.position(input.x + input.width, 400);

  button.mouseClicked(kawika);


  //loadPlayerStats("Kobe Bryant", 2);
  //console.log(statsArray[10]);
}//End Setup

function kawika(){
  name = input.value();
  loadPlayerStats(name);
  console.log("CHOSEN PLAYER IS " + name);
  //input.value('')
  loadPlayerStats(name, 2);
  console.log(statsArray[10]);
}

function draw(){
  //createPlayerSelectionList();
  getSelectedPlayers();
}//end function draw

//chooses the row of the selected player and shows the stats of this player
function loadPlayerStats(player){
  player = str(player);
  statsArray = stats.findRows(player, 2);
  if(statsArray.length === 0){
    statsArray = stats.findRows(player+"*", 2);
  }else if(statsArray.length === 0){
    console.log('Check your spelling or another player');
  }
}//end function loadPlayerStats

function createPlayerSelectionList() {
  playerSel = createSelect(true);
  playerSel.position((windowWidth-width)/2 + 270, (windowHeight-height)/2 + 40);
  // locate at 270,40 in canvas coordinates
  playerSel.size(150,headerHeight-50);
}

//finds a specific stat in the table
function aggregateStats(player, stat){
  var results = [];
  for(var i = 0; i < statsArray.length; i++){
    results.push(statsArray[i].get(stat));
  }//end for loop
  return results;
}//end function aggregateStats
