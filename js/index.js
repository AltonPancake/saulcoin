 
var ss = { 
 click: 0,
 amnt: 1,
 score: 0,
 upgradeCost: 25,
 junkAutominerCost: 50,
 badAutominerCost: 250,
 okayAutominerCost: 750,
 goodAutominerCost: 1500,
 sps: 0, 
 saulTouch: 100000,
 time: 2147483647
}

if(localStorage.getItem("data") != null){
  ss = JSON.parse(localStorage.getItem("data"));
}

document.getElementById('save').onclick = function(){
  saveState();
}

var automining = window.setInterval(addScore, ss.time);

var save = window.setInterval(saveState, 60000);

document.getElementById("touchOfMidas").style.display = 'none';

document.getElementById("junkAutominer").innerHTML = ("Junk Autominer (-" + ss.junkAutominerCost + " saulcoins)  +1 saulcoin per second");
document.getElementById("badAutominer").innerHTML = ("Bad Autominer (-" + ss.badAutominerCost + " saulcoins)  +5 saulcoins per second");
document.getElementById("okayAutominer").innerHTML = ("Okay Autominer (-" + ss.okayAutominerCost + " saulcoins)  +25 saulcoins per second");
document.getElementById("goodAutominer").innerHTML = ("Good Autominer (-" + ss.goodAutominerCost + " saulcoins)  +50 saulcoins per second");
document.getElementById("scps").innnerHTML = ("saulcoins per second: " + ss.sps);

document.getElementById("junkAutominer").onclick = function(){
  if(ss.score >= ss.junkAutominerCost){
  ss.sps = ss.sps + 1;
  ss.score = ss.score - ss.junkAutominerCost;
  ss.click = ss.score;
  ss.junkAutominerCost = Math.round(ss.junkAutominerCost * 1.25);
  ss.time = 1000/ss.sps;
  document.getElementById("score").innerHTML = ("saulcoins: " + ss.click);
  document.getElementById("junkAutominer").innerHTML = ("Junk Autominer (-" + ss.junkAutominerCost + " saulcoins)  +1 saulcoin per second");
  document.getElementById("scps").innerHTML = ("saulcoins per second: " + ss.sps);
  window.clearInterval(automining);
  automining = window.setInterval(addScore, ss.time);
  } else {
    alert("ur literally 2 poor lmao");
  }
}

document.getElementById("badAutominer").onclick = function(){
  if(ss.score >= ss.badAutominerCost){
  ss.sps = ss.sps + 5;
  ss.score = ss.score - ss.badAutominerCost;
  ss.click = ss.score;
  ss.badAutominerCost = Math.round(ss.badAutominerCost * 1.5);
  ss.time = 1000/ss.sps;
  document.getElementById("score").innerHTML = ("saulcoins: " + ss.click);
  document.getElementById("badAutominer").innerHTML = ("Bad Autominer (-" + ss.badAutominerCost + " saulcoins)  +5 saulcoins per second");
  document.getElementById("scps").innerHTML = ("saulcoins per second: " + ss.sps);
  window.clearInterval(automining);
  automining = window.setInterval(addScore, ss.time);
  } else {
    alert("ur literally 2 poor lmao");
  }
}

document.getElementById("okayAutominer").onclick = function(){
  if(ss.score >= ss.okayAutominerCost){
  ss.sps = ss.sps + 25;
  ss.score = ss.score - ss.okayAutominerCost;
  ss.click = ss.score;
  ss.okayAutominerCost = Math.round(ss.okayAutominerCost * 1.75);
  ss.time = 1000/ss.sps;
  document.getElementById("score").innerHTML = ("saulcoins: " + ss.click);
  document.getElementById("okayAutominer").innerHTML = ("Okay Autominer (-" + ss.okayAutominerCost + " saulcoins)  +10 saulcoins per second");
  document.getElementById("scps").innerHTML = ("saulcoins per second: " + ss.sps);
  window.clearInterval(automining);
  automining = window.setInterval(addScore, ss.time);
  } else {
    alert("ur literally 2 poor lmao");
  }
}

document.getElementById("goodAutominer").onclick = function(){
  if(ss.score >= ss.goodAutominerCost){
  ss.sps = ss.sps + 50;
  ss.score = ss.score - ss.goodAutominerCost;
  ss.click = ss.score;
  ss.goodAutominerCost = Math.round(ss.goodAutominerCost * 2);
  ss.time = 1000/ss.sps;
  document.getElementById("score").innerHTML = ("saulcoins: " + ss.click);
  document.getElementById("goodAutominer").innerHTML = ("Good Autominer (-" + ss.goodAutominerCost + " saulcoins)  +50 saulcoins per second");
  document.getElementById("scps").innerHTML = ("saulcoins per second: " + ss.sps);
  window.clearInterval(automining);
  automining = window.setInterval(addScore, ss.time);
  } else {
    alert("ur literally 2 poor lmao");
  }
}

document.getElementById("upgrade").onclick = function() {
  if (ss.amnt <= 10){
    upgrade1();
    } else if (ss.amnt <= 30){
      upgrade2();
    } else {
      upgrade3();
  }
}

document.getElementById("touchOfMidas").onclick = function() {
  if (ss.score >= ss.saulTouch) {
    ss.score = ss.score - ss.saulTouch;
    ss.click = ss.score;
    ss.amnt = ss.amnt * 2
    ss.saulTouch = ss.saulTouch * 5
    document.getElementById("score").innerHTML = ("saulcoins")
    document.getElementById("clickie").innerHTML = ("+ " + ss.amnt + " per click");
  }
}

function saveState(){
  localStorage.setItem("data", JSON.stringify(ss));
}

document.getElementById("saul").onclick = function() {
  ss.score = ss.score + ss.amnt;
  ss.click = ss.score;
  //console.log(click);
  document.getElementById("score").innerHTML = ("saulcoins: " + ss.click);
}

function addScore(){
  ss.score = ss.score + 1;
  ss.click = ss.score;
  document.getElementById("score").innerHTML = ("saulcoins: " + ss.click);
}

var pattern = ['n', 'e', 'r', 'd'];
var current = 0;
    var gamer = new Audio('https://ia803006.us.archive.org/1/items/movie_1_201907/movie_1.mp3');

var keyHandler = function(event) {
  if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
    current = 0;
    return;
  }

  current++;

  if (pattern.length === current) {
    current = 0;
    ss.score = ss.score + 10000;
    ss.click = ss.score;
    document.getElementById('score').innerHTML = ('saulcoins: ' + ss.click);
            gamer.play();

  }
}
document.addEventListener('keydown', keyHandler, false);

function upgrade1(){
  if (ss.score >= ss.upgradeCost) {
    ss.score = ss.score - ss.upgradeCost;
    ss.click = ss.score;
    //console.log(click);
    document.getElementById("score").innerHTML = ("saulcoins: " + ss.click);
    ss.upgradeCost = Math.round(ss.upgradeCost * 1.2);
    document.getElementById("upgrade").innerHTML = ("upgrade +1 per click (- " + ss.upgradeCost + " saulcoins)");
    ss.amnt = ss.amnt + 1;
    document.getElementById("clickie").innerHTML = ("+ " + ss.amnt + " per click")
  } else {
      alert("ur literally 2 poor lmao");
    }
}

function upgrade2(){
  if (ss.score >= ss.upgradeCost) {
    ss.score = ss.score - ss.upgradeCost;
    ss.click = ss.score;
    //console.log(click);
    document.getElementById("score").innerHTML = ("saulcoins: " + ss.click);
    ss.upgradeCost = Math.round(ss.upgradeCost * 1.5);
    document.getElementById("upgrade").innerHTML = ("upgrade +2 per click (-" + ss.upgradeCost + " saulcoins)");
    ss.amnt = ss.amnt + 2;
    document.getElementById("clickie").innerHTML = ("+ " + ss.amnt + " per click");
  } else {
    alert("ur literally 2 poor lmao");
  }
}

function upgrade3(){
  if (ss.score >= ss.upgradeCost) {
    ss.score = ss.score - ss.upgradeCost;
    ss.click = ss.score;
    //console.log(click);
    document.getElementById("score").innerHTML = ("saulcoins: " + ss.click);
    ss.upgradeCost = Math.round(ss.upgradeCost * 1.5);
    document.getElementById("upgrade").innerHTML = ("upgrade +5 per click (-" + ss.upgradeCost + " saulcoins)");
    ss.amnt = ss.amnt + 5;
    document.getElementById("clickie").innerHTML = ("+ " + ss.amnt + " per click");
  } else {
    alert("ur literally 2 poor lmao");
  }
}

document.getElementById('prestige').onclick = function(){
  click = 0;
  amnt = 1;
  score = 0;
  upgradeCost = 25;
  junkAutominerCost = 50;
  badAutominerCost = 250;
  okayAutominerCost = 750;
  goodAutominerCost = 1500;
  sps = 0;
  saulTouch = 100000;
  time = 2147483647;
  saveState();
}