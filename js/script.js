const active = {
	1: false,
	2: false,
	3: false,
	4: false,
	5: false,
};

const content = document.querySelectorAll(".content-container");
content.forEach((element) => {
	element.addEventListener("click", (event) => {
		let box = event.currentTarget;
		if (!active[box.id]) {
			content.forEach(removeAnswer);
			displayAnswer(box);
		} else {
			removeAnswer(box);
		}
	});
});

function removeAnswer(box) {
	box.querySelector(".answer").classList.remove("answer--active");
	box.querySelector(".question").classList.remove("question--active");
	box.querySelector(".icon-arrow").classList.remove("icon-arrow--active");
	active[box.id] = false;
}

function displayAnswer(box) {
	box.querySelector(".answer").classList.add("answer--active");
	box.querySelector(".question").classList.add("question--active");
	box.querySelector(".icon-arrow").classList.add("icon-arrow--active");
	active[box.id] = true;
}
