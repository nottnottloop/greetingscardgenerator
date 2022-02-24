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
