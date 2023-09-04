const students = [
    { name: "Élève 1", grades: [85, 92, 88] },
    { name: "Élève 2", grades: [78, 90, 86] },
    { name: "Élève 3", grades: [92, 88, 95] },
    { name: "Élève 4", grades: [] }, // Élève non inscrit sans notes
    { name: "Élève 5", grades: [75, 80, 82] },
    { name: "Élève 6", grades: [88, 90, 87] },
];

// Calcul de la moyenne trimestrielle pour chaque élève
students.forEach(student => {
    const total = student.grades.reduce((acc, grade) => acc + grade, 0);
    const average = student.grades.length > 0 ? total / student.grades.length : 0;
    student.average = average;
});

// Tri des élèves par moyenne trimestrielle (du plus haut au plus bas)
students.sort((a, b) => b.average - a.average);

// Affichage des résultats dans la table HTML
const resultsTable = document.getElementById("moyenne");
students.forEach(student => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.grades[0] || ""}</td>
        <td>${student.grades[1] || ""}</td>
        <td>${student.grades[2] || ""}</td>
        <td>${student.average.toFixed(2)}</td>
    `;
    resultsTable.appendChild(row);
});
