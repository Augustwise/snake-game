let snakeTable = document.querySelector(".game__grid");
let boxes = document.getElementsByClassName("game__cell");
let modul = document.querySelector(".modal");
let start = document.querySelector(".modal__start");
let gameStartTime = 0;

let table = {
  rowsCols: 21,
  boxes: 21 * 21,
};

let snake = {
  direction: "right",
  position: [
    [6, 10],
    [7, 10],
    [8, 10],
    [9, 10],
    [10, 10],
  ],
  interval: 120,
  food: 0,
  score: 0,
  final: 0,
  time: 0,
  canTurn: 0,
  init: function () {
    snake.direction = "right";
    snake.position = [
      [6, 10],
      [7, 10],
      [8, 10],
      [9, 10],
      [10, 10],
    ];
    snake.interval = 120;
    snake.food = 0;
    snake.score = 0;
    snake.time = 0;
    snake.canTurn = 0;
    snakeTable.innerHTML = "";
    tableCreation();
  },
};

snake.init();

start.addEventListener("click", startSnake);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && snake.time === 0) {
    startSnake();
  }
});

function startSnake() {
  if (!modul.classList.contains("hidden")) {
    modul.classList.add("modal--closing");

    const onFadeOutEnd = (e) => {
      if (e.target !== modul || e.propertyName !== "opacity") return;
      modul.removeEventListener("transitionend", onFadeOutEnd);
      modul.classList.add("hidden");
      modul.classList.remove("modal--closing");
    };

    modul.addEventListener("transitionend", onFadeOutEnd);
  }

  snake.time = 1;
  renderSnake();
  randomFood();

  gameStartTime = Date.now();
  setInt = setInterval(function () {
    move();
  }, snake.interval);
}

function stopp() {
  clearInterval(setInt);
  snake.final = snake.score;
  var durationMs = Date.now() - gameStartTime;
  saveGameHistory(durationMs, snake.final);

  start.querySelector("span").innerHTML = snake.final + "  ";
  setTimeout(function () {
    start.querySelector("span").innerHTML = " Play ";
  }, 1500);

  snake.init();

  modul.classList.remove("modal--closing");

  modul.classList.remove("hidden");
  modul.classList.add("modal--opening");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      modul.classList.remove("modal--opening");
    });
  });
}

function move() {
  hitFood();
  hitBorder();
  hitSnake();

  updatePositions();
  renderSnake();
  document.addEventListener("keydown", turn);
  snake.canTurn = 1;
}

function updatePositions() {
  boxes[
    snake.position[0][0] + snake.position[0][1] * table.rowsCols
  ].classList.remove("game__cell--snake");
  snake.position.shift();

  let head = snake.position[snake.position.length - 1];
  switch (snake.direction) {
    case "left":
      snake.position.push([head[0] - 1, head[1]]);
      break;
    case "up":
      snake.position.push([head[0], head[1] - 1]);
      break;
    case "right":
      snake.position.push([head[0] + 1, head[1]]);
      break;
    case "down":
      snake.position.push([head[0], head[1] + 1]);
      break;
    default:
      console.log("no direction !");
  }
}

function hitBorder() {
  let headPos = snake.position.length - 1;

  if (
    (snake.position[headPos][0] === table.rowsCols - 1 &&
      snake.direction === "right") ||
    (snake.position[headPos][0] === 0 && snake.direction === "left") ||
    (snake.position[headPos][1] === table.rowsCols - 1 &&
      snake.direction === "down") ||
    (snake.position[headPos][1] === 0 && snake.direction === "up")
  ) {
    stopp();
  }
}

function hitSnake() {
  let headPos = snake.position.length - 1;
  for (let i = 0; i < headPos; i++) {
    if (snake.position[headPos].toString() === snake.position[i].toString()) {
      stopp();
    }
  }
}

function hitFood() {
  let head = snake.position[snake.position.length - 1];
  let tail = snake.position[0];
  if (head.toString() === foodPos.toString()) {
    boxes[random].classList.remove("game__cell--food");
    snake.position.unshift(tail);
    randomFood();
    snake.food++;
    snake.score += snake.food;
    scoreElt.innerHTML = snake.score + "  ";

    clearInterval(setInt);
    snake.interval = snake.interval - snake.interval / 40;
    setInt = setInterval(function () {
      move();
    }, snake.interval);
  }
}

function randomFood() {
  let randomX = Math.floor(Math.random() * table.rowsCols);
  let randomY = Math.floor(Math.random() * table.rowsCols);
  random = randomX + randomY * table.rowsCols;

  while (boxes[random].classList.contains("game__cell--snake")) {
    randomX = Math.floor(Math.random() * table.rowsCols);
    randomY = Math.floor(Math.random() * table.rowsCols);
    random = randomX + randomY * table.rowsCols;
  }
  boxes[random].classList.add("game__cell--food");
  foodPos = [randomX, randomY];
}

function renderSnake() {
  for (let i = 0; i < snake.position.length; i++) {
    boxes[
      snake.position[i][0] + snake.position[i][1] * table.rowsCols
    ].classList.add("game__cell--snake");
  }
}

function turn(e) {
  if (snake.canTurn) {
    switch (e.key) {
      case "Enter":
        break;
      case "ArrowLeft":
      case "a":
      case "A":
        if (snake.direction === "right") return;
        snake.direction = "left";
        break;
      case "ArrowUp":
      case "w":
      case "W":
        if (snake.direction === "down") return;
        snake.direction = "up";
        break;
      case "ArrowRight":
      case "d":
      case "D":
        if (snake.direction === "left") return;
        snake.direction = "right";
        break;
      case "ArrowDown":
      case "s":
      case "S":
        if (snake.direction === "up") return;
        snake.direction = "down";
        break;
      default:
        console.log("wrong key");
    }
    snake.canTurn = 0;
  }
}

function tableCreation() {
  if (snakeTable.innerHTML === "") {
    for (let i = 0; i < table.boxes; i++) {
      let divElt = document.createElement("div");
      divElt.classList.add("game__cell");
      snakeTable.appendChild(divElt);
    }

    let statusElt = document.createElement("div");
    statusElt.classList.add("game__status");
    snakeTable.appendChild(statusElt);
    scoreElt = document.createElement("span");
    scoreElt.classList.add("game__score");
    scoreElt.innerHTML = snake.score + " ";
    statusElt.appendChild(scoreElt);
  }
}

$("document").ready(function () {
  $("body")
    .swipeDetector()
    .on("swipeLeft.sd swipeRight.sd swipeUp.sd swipeDown.sd", function (event) {
      if (event.type === "swipeLeft") {
        if (snake.direction === "right") return;
        snake.direction = "left";
      } else if (event.type === "swipeRight") {
        if (snake.direction === "left") return;
        snake.direction = "right";
      } else if (event.type === "swipeUp") {
        if (snake.direction === "down") return;
        snake.direction = "up";
      } else if (event.type === "swipeDown") {
        if (snake.direction === "up") return;
        snake.direction = "down";
      }
      snake.canTurn = 0;
    });
});

(function ($) {
  $.fn.swipeDetector = function (options) {
    let swipeState = 0;

    let startX = 0;
    let startY = 0;

    let pixelOffsetX = 0;
    let pixelOffsetY = 0;

    var swipeTarget = this;
    var defaultSettings = {
      swipeThreshold: 30,

      useOnlyTouch: true,
    };

    (function init() {
      options = $.extend(defaultSettings, options);

      swipeTarget.on("mousedown touchstart", swipeStart);
      $("html").on("mouseup touchend", swipeEnd);
      $("html").on("mousemove touchmove", swiping);
    })();

    function swipeStart(event) {
      if (options.useOnlyTouch && !event.originalEvent.touches) return;

      if (event.originalEvent.touches) event = event.originalEvent.touches[0];

      if (swipeState === 0) {
        swipeState = 1;
        startX = event.clientX;
        startY = event.clientY;
      }
    }

    function swipeEnd(event) {
      if (swipeState === 2) {
        swipeState = 0;

        if (
          Math.abs(pixelOffsetX) > Math.abs(pixelOffsetY) &&
          Math.abs(pixelOffsetX) > options.swipeThreshold
        ) {
          if (pixelOffsetX < 0) {
            swipeTarget.trigger($.Event("swipeLeft.sd"));
          } else {
            swipeTarget.trigger($.Event("swipeRight.sd"));
          }
        } else if (Math.abs(pixelOffsetY) > options.swipeThreshold) {
          if (pixelOffsetY < 0) {
            swipeTarget.trigger($.Event("swipeUp.sd"));
          } else {
            swipeTarget.trigger($.Event("swipeDown.sd"));
          }
        }
      }
    }

    function swiping(event) {
      if (swipeState !== 1) return;

      if (event.originalEvent.touches) {
        event = event.originalEvent.touches[0];
      }

      let swipeOffsetX = event.clientX - startX;
      let swipeOffsetY = event.clientY - startY;

      if (
        Math.abs(swipeOffsetX) > options.swipeThreshold ||
        Math.abs(swipeOffsetY) > options.swipeThreshold
      ) {
        swipeState = 2;
        pixelOffsetX = swipeOffsetX;
        pixelOffsetY = swipeOffsetY;
      }
    }

    return swipeTarget;
  };
})(jQuery);

function preventDefault(e) {
  e.preventDefault();
}
function disableScroll() {
  document.body.addEventListener("touchmove", preventDefault, {
    passive: false,
  });
}
function enableScroll() {
  document.body.removeEventListener("touchmove", preventDefault, {
    passive: false,
  });
}

function saveGameHistory(durationMs, score) {
  try {
    let history = JSON.parse(localStorage.getItem("snakeHistory") || "[]");
    history.push({
      playedAt: new Date().toISOString(),
      durationMs: durationMs,
      score: score,
    });
    localStorage.setItem("snakeHistory", JSON.stringify(history));
  } catch (e) {
    console.error("Failed to save game history", e);
  }
}

disableScroll();
