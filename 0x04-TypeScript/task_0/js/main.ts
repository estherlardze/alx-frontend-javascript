interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentA: Student = {
    firstName: 'Esther',
    lastName: 'Lardze',
    age: 20,
    location: 'Nkawkaw',
}

const studentB: Student = {
    firstName: 'Agyei',
    lastName: 'Priscilla',
    age: 21,
    location: 'Central',
}

const studentsList = [studentA, studentB];

const table = document.createElement('table');
const tbody = document.createElement('tbody');


studentsList.forEach( (obj) => {
    const row = document.createElement('tr');
    const Name = document.createElement('td');
    const location = document.createElement('td');
    Name.textContent = obj.firstName;
    location.textContent = obj.location;
    row.appendChild(Name);
    row.appendChild(location);
    tbody.appendChild(row);

});
table.appendChild(tbody);
document.body.appendChild(table);
