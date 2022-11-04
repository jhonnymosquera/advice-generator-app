async function getAdvices() {
	const url = 'https://api.adviceslip.com/advice';
	const res = await fetch(url);
	const data = await res.json();

	return data;
}

export default getAdvices;
