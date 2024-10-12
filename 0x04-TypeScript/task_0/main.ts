interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 20,
	location: 'New York'
};

const student2: Student = {
	firstName: 'Jane',
	lastName: 'Smith',
	age: 22,
	location: 'California'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
studentsList.forEach((student) => {
	const row = table.insertRow();
	row.insertCell().textContent = student.firstName;
	row.insertCell().textContent = student.location;
});
document.body.appendChild(table);
