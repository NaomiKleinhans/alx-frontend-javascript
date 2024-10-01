export default function taskBlock(trueOrFalse) {
	let task = false // Changed var to let
	let task2 = true // Changed var to let

	if (trueOrFalse) {
		let task = true // Block-scoped variable
		let task2 = false // Block-scoped variable
	}

	return [task, task2]
}
