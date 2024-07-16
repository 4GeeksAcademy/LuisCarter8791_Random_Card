/* eslint-disable */
import "bootstrap";
import "./style.css";

const suits = [];

window.onload = function(){
  // write your code here

  // '' -> suits[0]
  // '' -> suits[1]
  // '' -> suits[2]
  // '' -> suits[3]

  const suitIndex = Math.floor(math.random() * suits.length);
  const randomSuit = suits[suitIndex];

  const topLeftSuitDivElement = document.querySelector('.top-left-suit');

  if (!topLeftSuitDivElement) {
    console.log("No top left suit element found");
    return;
  }

  topLeftSuitDivElement.innerText = randomSuit;

}