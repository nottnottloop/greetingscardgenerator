(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
require("./main.js");

},{"./main.js":2}],2:[function(require,module,exports){
const card = document.querySelector("#card");
const form = document.querySelector("#form");
const formItems = document.querySelectorAll("form, label, input, textarea, select");
form.addEventListener("submit", event => {
	//prevent default reload behaviour
	event.preventDefault();

	//show the card, hide the form
	card.style.display = "block";
	for (const item of formItems) {
		item.style.display = "none";
	}

	//grab information from our form
	const name = event.target.name.value;
	const celebration = event.target.celebration.value;
	const message = event.target.message.value;
	const from = event.target.from.value;

	//grab elements
	const cardName = document.getElementById("cardname");
	const cardCelebration = document.getElementById("cardcelebration");
	const cardMessage = document.getElementById("cardmessage");
	const cardFrom = document.getElementById("cardfrom");

	//replace card text with that from form
	cardName.textContent = `To ${name},`;
	switch (celebration) {
		case "birthday":
			cardCelebration.textContent = "Happy Birthday!!! 🎁🎂";
			cardCelebration.classList.add("purpleText");
			break;
		case "easter":
			cardCelebration.textContent = "Hippity Hop, Happy Easter! 🐰🐣";
			cardCelebration.classList.add("orangeText");
			break;
		case "christmas":
			cardCelebration.textContent = "Hohoho, Merry Christmas! 🎄🎅";
			cardCelebration.classList.add("greenText");
			break;
	}
	cardMessage.textContent = message;
	cardFrom.textContent = `From ${from}`;
});

},{}]},{},[1]);
