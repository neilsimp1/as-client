const form = document.querySelector("form");

form.addEventListener("submit", function() {
	const url = this.elements.url.value;

	if(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(url)){

	}
});
