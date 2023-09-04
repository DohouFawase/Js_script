// Récupération du bouton et de l'élément résultat
const convertButton = document.getElementById("convertButton");
const numberInput = document.getElementById("numberInput");
const resultElement = document.getElementById("result");

// Ajout d'un écouteur d'événement au bouton
convertButton.addEventListener("click", function() {
    const number = parseFloat(numberInput.value);
    const words = convertNumberToWords(number);
    resultElement.innerHTML = words;
});

function convertNumberToWords(number) {
    const units = ["", "Un", "Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "Huit", "Neuf"];
    const teens = ["Dix", "Onze", "Douze", "Treize", "Quatorze", "Quinze", "Seize", "Dix-Sept", "Dix-Huit", "Dix-Neuf"];
    const tens = ["", "Dix", "Vingt", "Trente", "Quarante", "Cinquante", "Soixante", "Soixante-Dix", "Quatre-Vingt", "Quatre-Vingt-Dix"];

    if (number === 0) {
        return "Zéro";
    }

    if (number < 0 || number >= 1000000) {
        return "Nombre non pris en charge";
    }

    let words = "";

    if (number >= 1000) {
        const thousands = Math.floor(number / 1000);
        words += units[thousands] + " Mille ";
        number %= 1000;

        // Ajoutez une vérification pour éviter "Un Mille" si la partie milliers est égale à 1
        if (number === 0 && thousands === 1) {
            words = "Mille ";
        }
    }

    if (number >= 100) {
        const hundreds = Math.floor(number / 100);
        words += units[hundreds] + " Cent ";
        number %= 100;
    }

    if (number >= 20) {
        const tensDigit = Math.floor(number / 10);
        words += tens[tensDigit] + " ";
        number %= 10;
    } else if (number >= 10) {
        words += teens[number - 10] + " ";
        number = 0;
    }

    if (number > 0) {
        words += units[number] + " ";
    }

    return words.trim();
}
