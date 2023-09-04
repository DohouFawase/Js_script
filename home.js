// Récupération du bouton et de l'élément résultat
const calculateButton = document.getElementById("calculateButton");
const resultElement = document.getElementById("result");

// Ajout d'un écouteur d'événement au bouton
calculateButton.addEventListener("click", function() {
    // Récupération des coefficients depuis l'interface utilisateur
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    // Calcul des solutions
    let solutions = calculateSolutions(a, b, c);

    // Affichage des solutions à l'utilisateur
    resultElement.innerHTML = solutions;
});

function calculateSolutions(a, b, c) {
    // Calcul du discriminant
    let discriminant = b * b - 4 * a * c;
    let solutions = [];

    if (discriminant > 0) {
        // Deux solutions réelles distinctes
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        solutions.push(`Les solutions sont x1 = ${x1.toFixed(2)} et x2 = ${x2.toFixed(2)}`);
    } else if (discriminant === 0) {
        // Une seule solution réelle (racine double)
        let x = -b / (2 * a);
        solutions.push(`La solution est x = ${x.toFixed(2)}`);
    } else {
        // Pas de solution réelle
        solutions.push("Pas de solution réelle");
    }

    return solutions.join("<br>");
}
