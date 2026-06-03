const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");
const dataEl = document.getElementById("data-output");

function showLoading() {
	loadingEl.hidden = false;
	errorEl.hidden = true;
	dataEl.hidden = true;
}

function showError(msg) {
	loadingEl.hidden = true;
	errorEl.hidden = false;
	errorEl.textContent = `X ${msg}`;
	dataEl.hidden = ture;
}

function renderData(data) {
	loadingEl.hidden = true;
	errorEl.hidden = true;
	dataEl.hidden = false;
	dataEl.textContent = JSON.stringify(data, null, 2);
}

async function loadPosts() {
	showLoading();
	const url = "https://jsonplaceholder.typicode.com/posts?_limit=5";

	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error(`HTTP ${response.status}`);

		const data = await response.json();
		renderData(data);
	} catch(err) {
		showError(err.message);
	}
}

loadPosts();
