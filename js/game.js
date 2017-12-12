
const AREA = document.body;
var defaultLength = 75;
var CIRCLE = document.querySelector('.circle');


var circleSize = defaultLength;
var clickCount = 0;

var windowWidth = window.innerWidth - (circleSize + 2);
var windowHeight = window.innerHeight - (circleSize + 2);

var running = false;

var main = document.getElementById('main');
/**
 * Hide element
 */
function hide(el) {
  el.style.display = 'hide';
}
/**
 * Show element
 */
function show(el) {
  el.style.display = 'block';
} 

/**
 * Show the main menu after loading all assets
 */
function mainMenu() {
  show(main);
}
/**
 * Click handlers for the different menu screens
 */
document.querySelectorAll('.play')[0].addEventListener('click', function() {
  hide(main);
  positionCircle();
}, false);

/**
 * Click handlers for the game over
 */
function gameOver() {
    running = false;
    show(game-over);
    show(score);
}

/**
 * Click handlers for the restart
 */
document.querySelectorAll('.restart')[0].addEventListener('click', function() {
    hide(game-over);
    positionCircle();
  }, false);

// /**
//  * End the game and restart
//  */
// function gameOver() {
//     stop = true;
//     $('#score').html(score);
//     $('#game-over').show();
//   }
//   /**
//    * Click handlers for the different menu screens
//    */
//   // …
//   $('.restart').click(function() {
//     $('#game-over').hide();
//     startGame();
//   });
///////////////////////////////////
// /**
//  * Load the main menu
//  */
// assetLoader.finished = function() {
//     mainMenu();
//   }
//   /**
//    * Show the main menu after loading all assets
//    */
//   function mainMenu() {
//     $('#main').show();
//   }
//   /**
//    * Click handlers for the different menu screens
//    */
//   $('.play').click(function() {
//     $('#menu').hide();
//     startGame();
//   });

function positionCircle(e) {
    var horizontalPosition = (windowWidth * Math.random()) + 1;
    var verticalPosition= (windowHeight * Math.random()) + 1;
    var newColor = randomColor();

    circleSize = defaultLength;
    // CIRCLE.style.height = defaultLength + 'px';
    // CIRCLE.style.width = defaultLength + 'px';
    CIRCLE.style.backgroundColor = newColor;
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';
    setInterval(shrinkCircle, 100);
}

function shrinkCircle() {
    circleSize -= .5 + (clickCount * 0.000001);
    CIRCLE.style.height = circleSize + 'px';
    CIRCLE.style.width = circleSize + 'px';
}

CIRCLE.addEventListener('click', positionCircle, false);
CIRCLE.addEventListener('click', function(){ clickCount += 1; console.log(clickCount) }, false);