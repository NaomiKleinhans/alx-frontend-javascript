interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Jan',
	lastName: 'Smith',
	age: 20,
	location: 'Bloemfontein'
};

const student2: Student = {
	firstName: 'Jane',
	lastName: 'Patel',
	age: 22,
	location: 'Pretoria'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
studentsList.forEach((student) => {
	const row = table.insertRow();
	row.insertCell().textContent = student.firstName;
	row.insertCell().textContent = student.location;
});
document.body.appendChild(table);
