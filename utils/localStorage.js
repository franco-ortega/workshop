export function getLocalStorage(KEY) {
	const localData = localStorage.getItem(KEY);
	if (localData) return JSON.parse(localData);
}

export function setLocalStorage(KEY, DATA) {
	localStorage.setItem(KEY, JSON.stringify(DATA));
}
