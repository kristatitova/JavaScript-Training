import GameOfLife from "./GameOfLife";
import { DOMProvider } from "./../providers";

const game = new GameOfLife({
  provider: new DOMProvider(),
  sizeX: 100,
  sizeY: 50,
  speed: 2000
});

game.start();

const pauseFunction = () => {
  if (game.Interval) {
    game.pause();
    pause.textContent = "Continue";
  } else {
    game.start();
    pause.textContent = "Pause";
  }
};

const submitFunction = () => {
  event.preventDefault();
  const config = {
    provider: new DOMProvider(),
    sizeX: parseInt(sizeXField.value),
    sizeY: parseInt(sizeYField.value),
    speed: parseInt(speed.value)
  };
  game.restart(config);
};

const pause = document.querySelector("#pause");
pause.addEventListener("click", pauseFunction);

const submit = document.querySelector("form");
submit.addEventListener("submit", submitFunction);

const sizeXField = document.querySelector("#sizeX");
//sizeXField.addEventListener("load", fieldValueFunction);

const sizeYField = document.querySelector("#sizeY");
const speed = document.querySelector("#speed");

sizeXField.defaultValue = game.sizeX;
sizeYField.defaultValue = game.sizeY;
speed.defaultValue = game.speed;
