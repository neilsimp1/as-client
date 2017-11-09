const { ipcRenderer } = require("electron");

const form = document.querySelector("form");

window.addEventListener("DOMContentLoaded", function() {
	const url = window.localStorage.getItem("url")
	if(url) form.elements.url.value = url;
});

form.addEventListener("submit", function() {
	const url = this.elements.url.value;

	if(/(.*):(\d*)\/?(.*)/.test(url)){
		window.localStorage.setItem("url", url);
		ipcRenderer.sendSync("loadPage", url);
	}

	return false;
});
