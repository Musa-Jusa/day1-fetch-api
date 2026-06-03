async function loadPosts() {
	const url = "https://jsonplaceholder.typicode.com/postss?_limit=5";

	try {
		const response = await fetch(url);

		if(!response.ok) {
			throw new Error(`HTTP ошибка! Статус: ${response.status}`);
		}

		const data = await response.json();
		console.log("Данные загружены:", data);
	} catch(error) {
		console.error("Ошибка загрузки:", error.message);
	}
}

loadPosts();
