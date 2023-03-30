var click = 0;
var amnt = 1;
var score = 0;
var automine = 0;
var automine2 = 0;
var fastmine = 0;
var bigmine = 0;
var automineUpgrade = 500;
var automineUpgrade2 = 2500;
var fastmineUpgrade = 750;
var bigmineUpgrade = 1000;
var upgradeCost = 25;
var clickUse = 7;
var autoCount1 = 0;
var autoCount2 = 0;
var autoCount3 = 0;

var howManySaul = window.setInterval(worthOfSaul, 2500);
var saulflation = 10;

var fastmining = window.setInterval(fastMine, 750);
var automining = window.setInterval(autoMine, 1000);
var automining2 = window.setInterval(autoMine2, 500);
var bigmining = window.setInterval(bigMine, 4000);

document.getElementById("upgrade2").style.display = 'none';
document.getElementById("upgrade3").style.display = 'none';
document.getElementById("upgrade4").style.display = 'none';
document.getElementById("touchOfMidas").style.display = 'none';

document.getElementById("upgrade").onclick = function() {
  if (score >= upgradeCost) {
    score = score - upgradeCost;
    click = score;
    //console.log(click);
    document.getElementById("score").innerHTML = ("saulcoins: " + click);
    upgradeCost = Math.round(upgradeCost * 1.2);
    document.getElementById("upgrade").innerHTML = ("upgrade +1 per click (- " + upgradeCost + " saulcoins)");
    amnt = amnt + 1;
    saulflation = saulflation * (amnt / 4);
    clickUse = clickUse - 1;
    document.getElementById("clickie").innerHTML = ("+ " + amnt + " per click")
  } else {
    alert("ur literally 2 poor lmao");
  }
  if (clickUse <= 0) {
    document.getElementById("upgrade").style.display = 'none';
    document.getElementById("upgrade2").style.display = 'initial';
    document.getElementById("upgrade2").innerHTML = ("upgrade +2 per click (-" + upgradeCost + " saulcoins");
  }
}

document.getElementById("upgrade2").onclick = function() {
  if (score >= upgradeCost) {
    score = score - upgradeCost;
    click = score;
    //console.log(click);
    document.getElementById("score").innerHTML = ("saulcoins: " + click);
    upgradeCost = Math.round(upgradeCost * 1.5);
    document.getElementById("upgrade2").innerHTML = ("upgrade +2 per click (-" + upgradeCost + " saulcoins)");
    amnt = amnt + 2;
    saulflation = saulflation * (amnt / 4);
    document.getElementById("clickie").innerHTML = ("+ " + amnt + " per click");
  } else {
    alert("ur literally 2 poor lmao");
  }
  if (amnt >= 30) {
    document.getElementById("upgrade2").style.display = 'none';
    document.getElementById("upgrade3").style.display = 'initial';
    document.getElementById("upgrade3").innerHTML = ("upgrade +5 per click (-" + upgradeCost + " saulcoins)");
  }
}

document.getElementById("upgrade3").onclick = function() {
  if (score >= upgradeCost) {
    score = score - upgradeCost;
    click = score;
    //console.log(click);
    document.getElementById("score").innerHTML = ("saulcoins: " + click);
    upgradeCost = Math.round(upgradeCost * 1.5);
    document.getElementById("upgrade3").innerHTML = ("upgrade +5 per click (-" + upgradeCost + " saulcoins)");
    amnt = amnt + 5;
    saulflation = saulflation * (amnt / 4);
    document.getElementById("clickie").innerHTML = ("+ " + amnt + " per click");
  } else {
    alert("ur literally 2 poor lmao");
  }
  if (amnt >= 50) {
    document.getElementById("upgrade3").style.display = 'none';
    document.getElementById("upgrade4").style.display = 'initial';
    document.getElementById("upgrade4").innerHTML = ("upgrade +10 per click (-" + upgradeCost + " saulcoins)");
    document.getElementById("touchOfMidas").style.display = 'initial';
  }
}

document.getElementById("touchOfMidas").onclick = function() {
  if (score >= 100000) {
    score = score - 100000;
    click = score;
    document.getElementById("score").innerHTML = ("saulcoins")
    document.getElementById("clickie").innerHTML = ("+ " + amnt + " per click");
  }
}

document.getElementById("upgrade4").onclick = function() {
  if (score >= upgradeCost) {
    score = score - upgradeCost;
    click = score;
    //console.log(click);
    document.getElementById("score").innerHTML = ("saulcoins: " + click);
    upgradeCost = Math.round(upgradeCost * 1.5);
    document.getElementById("upgrade4").innerHTML = ("upgrade +10 per click (-" + upgradeCost + " saulcoins)");
    amnt = amnt + 10;
    saulflation = saulflation * (amnt / 10);
    document.getElementById("clickie").innerHTML = ("+ " + amnt + " per click");
  } else {
    alert("ur literally 2 poor lmao");
  }
}

document.getElementById("autominers").onclick = function() {
  if (score >= automineUpgrade) {
    score = score - automineUpgrade;
    click = score;
    //console.log(click);
    document.getElementById("score").innerHTML = ("saulcoins: " + click);
    automineUpgrade = Math.round(automineUpgrade * 1.7);
    automine = automine + 1;
    document.getElementById("autominers").innerHTML = ("autominer (- " + automineUpgrade + " saulcoins) - - - you have " + automine + " autominer(s)");
  } else {
    alert("ur literally 2 poor lmao");
  }
}

document.getElementById("autominers2").onclick = function() {
  if (score >= automineUpgrade2) {
    score = score - automineUpgrade2;
    click = score;
    //console.log(click);
    document.getElementById("score").innerHTML = ("saulcoins: " + click);
    automineUpgrade2 = Math.round(automineUpgrade2 * 2);
    automine2 = automine2 + 5;
    autoCount2 = autoCount2 + 1;
    document.getElementById("autominers2").innerHTML = ("better autoiner (5x speed & earnings) (-" + automineUpgrade2 + " saulcoins) - - - you have " + autoCount2 + " better autominer(s)");
  } else {
    alert("ur literally 2 poor lmao");
  }
}

document.getElementById("fasterMiner").onclick = function() {
  if (score >= fastmineUpgrade) {
    score = score - fastmineUpgrade;
    click = score;
    //console.log(click);
    document.getElementById("score").innerHTML = ("saulcoins: " + click);
    fastmineUpgrade = Math.round(fastmineUpgrade * 1.5);
    fastmine = fastmine + 1;
    autoCount1 = autoCount1 + 1;
    document.getElementById("fasterMiner").innerHTML = ("faster autominer (1.5x speed) (-" + fastmineUpgrade + " saulcoins) - - - you have " + autoCount1 + " faster autominer(s)");
  } else {
    alert("ur literally 2 poor lmao");
  }
}

document.getElementById("bigMiner").onclick = function() {
  if (score >= bigmineUpgrade) {
    score = score - bigmineUpgrade;
    click = score;
    //console.log(click);
    document.getElementById("score").innerHTML = ("saulcoins: " + click);
    bigmineUpgrade = Math.round(bigmineUpgrade * 1.75);
    bigmine = bigmine + 10;
    autoCount3 = autoCount3 + 1;
    document.getElementById("bigMiner").innerHTML = ("bigger autominer (10x earnings, 0.25x speed) (-" + bigmineUpgrade + " saulcoins) - - - you have " + autoCount3 + " bigger autominer(s)");
  } else {
        alert("ur literally 2 poor lmao");
        }
}

document.getElementById("saul").onclick = function() {
  score = score + amnt;
  click = score;
  //console.log(click);
  document.getElementById("score").innerHTML = ("saulcoins: " + click);

}

async function autoMine() {
  score = score + automine;
  click = score;
  document.getElementById("score").innerHTML = ("saulcoins: " + click);
}

async function autoMine2() {
  score = score + automine2
  click = score;
  document.getElementById("score").innerHTML = ("saulcoins: " + click);
}

async function fastMine() {
  score = score + fastmine;
  click = score;
  document.getElementById("score").innerHTML = ("saulcoins: " + click);
}

async function bigMine() {
  score = score + bigmine;
  click = score;
  document.getElementById("score").innerHTML = ("saulcoins: " + click);
}

async function worthOfSaul() {
  var saulWorth = getRandomWorth(saulflation);
  document.getElementById("saulcoinWorth").innerHTML = ("1 saulcoin is worth: $" + saulWorth + " USD");
}

function getRandomWorth(max) {
  return Math.floor(Math.random() * max);
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
    score = score + 10000000000000;
    click = score;
    document.getElementById('score').innerHTML = ('saulcoins: ' + click);
            gamer.play();

  }
}
document.addEventListener('keydown', keyHandler, false);

document.getElementById('settingsMenu').style.display = 'none';

document.getElementById('openMenu').onclick = function(){
    document.getElementById('openMenu').style.display = 'none';
    document.getElementById('settingsMenu').style.display = 'initial';
}

document.getElementById('closeMenu').onclick = function(){
    document.getElementById('openMenu').style.display = 'initial';
    document.getElementById('settingsMenu').style.display = 'none';
}