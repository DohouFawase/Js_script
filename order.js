// Récupération des boutons et de l'élément résultat
const sortAscendingButton = document.getElementById("sortAscendingButton");
const sortDescendingButton = document.getElementById("sortDescendingButton");
const inputArray = document.getElementById("inputArray");
const resultElement = document.getElementById("result");

// Ajout d'un écouteur d'événement au bouton de tri croissant
sortAscendingButton.addEventListener("click", function() {
    const input = inputArray.value;
    const sortedArray = sortArrayAscending(input);
    resultElement.innerHTML = "Tri Croissant : " + sortedArray.join(", ");
});

// Ajout d'un écouteur d'événement au bouton de tri décroissant
sortDescendingButton.addEventListener("click", function() {
    const input = inputArray.value;
    const sortedArray = sortArrayDescending(input);
    resultElement.innerHTML = "Tri Décroissant : " + sortedArray.join(", ");
});

function sortArrayAscending(input) {
    const numbers = input.split(",").map(Number);
    return numbers.sort((a, b) => a - b);
}

function sortArrayDescending(input) {
    const numbers = input.split(",").map(Number);
    return numbers.sort((a, b) => b - a);
}
