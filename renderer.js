const form = document.querySelector("form");

window.addEventListener("DOMContentLoaded", function() {
	const url = window.localStorage.getItem("url")
	if(url) form.elements.url.value = url;
});

form.addEventListener("submit", function() {
	const url = this.elements.url.value;

	if(/(.*):(\d*)\/?(.*)/.test(url)){
		window.localStorage.setItem("url", url);
		//ipcRenderer.sendSync("loadPage", url);
		let iframe = document.createElement("iframe");
		iframe.src= url;
		iframe.width = window.innerWidth;
		iframe.height = window.innerHeight;

		document.body.innerHTML = "";
		document.body.appendChild(iframe);
	}

	return false;
});
