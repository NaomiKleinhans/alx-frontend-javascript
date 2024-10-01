export default function getItems() {
	const items = ['apple', 'banana', 'cherry']
	const [first, second, third] = items // Destructure items
	return [first, second, third]
}
