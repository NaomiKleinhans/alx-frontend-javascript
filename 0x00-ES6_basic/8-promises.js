export default function fetchData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Data received') // Simulate data retrieval
		}, 2000)
	})
}
