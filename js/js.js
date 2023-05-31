function _hide() {
	document.querySelectorAll('div.cookie')[0].style.display = 'none';
	var date = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3);
	document.cookie = "cookie=1;path=/; expires=" + date.toUTCString();
}

function _changeCss() {
	if (document.querySelector('.style').getAttribute('href') === 'css/style.css') {
		document.querySelector('.style').href = "css/dark.css";
		localStorage.setItem('style', '_dark');
	} else {
		document.querySelector('.style').href = "css/style.css";
		localStorage.setItem('style', '_');
	}
}