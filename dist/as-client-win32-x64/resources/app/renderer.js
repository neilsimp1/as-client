const form = document.querySelector("form");
const webview = document.querySelector("webview");

window.addEventListener("DOMContentLoaded", function() {
	const url = window.localStorage.getItem("url");
	if(sessionStorage.getItem("isPageLoaded")) loadPage(url);
	else if(url) form.elements.url.value = url;
});

form.addEventListener("submit", function() {
	const url = this.elements.url.value;
	if(/(.*):(\d*)\/?(.*)/.test(url)) loadPage(url);
	return false;
});

function loadPage(url) {
	window.localStorage.setItem("url", url);

	form.parentElement.removeChild(form);
	webview.src = url;
	webview.style.display = "flex";

	window.document.title = "AudioStreamer";
	sessionStorage.setItem("isPageLoaded", true);
}
