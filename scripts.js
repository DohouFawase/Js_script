function solveEquation() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    let solution = CalculateSolution(a, b, c);
    displaySolution(solution)
}

function CalculateSolution(a, b, c){
let discriminat = b*b-4*a*c;
 let solution =  []
 if (discriminat > 0) {
    let x1 = (-b + Math.sqrt(discriminat))/ (2*a)
    let x2 = (-b + Math.sqrt(discriminat))/ (2*a)
    solution.push(`Les solutions sont x1 = ${x1.toFixed(2)} et x2 = ${x2.toFixed(2)}`);

 } else if (discriminat === 0) {
    let x = - b /  (2*a)
    solution.push(`La solution est x = ${x.toFixed(2)} `) 
 } else{
    solution.push("Pas de solution réelle");
 }

 return solution

}

function displaySolution(solution) {
    document.getElementById("Answers").textContent = solution.join("\n");
}






/**Decroisant et croissant */


function sortNumbers(order) {
    const input =  document.getElementById('numberInput').value
    const numbers = input.split(',').map(num =>parseFloat(num.trim()));

    if (numbers.some(isNaN)) {
        document.getElementById('result').textContent = 'Please Just write a validated number';
        return
    }

    if (order === 'ascending') {
        numbers.sort((a, b) => a - b);
    } else if(order === 'ascending'){
        numbers.sort((a,b) => a - b)
    }

    document.getElementById("result").textContent = "Nombres triés : " + numbers.join(', ');

}


/**Programme de conversion des nombres en lettres */

function convertToWords() {
    const number = parseInt(document.getElementsByClassName('numberInput').value)
    if (isNaN(number)) {
        document.getElementsByClassName('result').textContent = 'Please Just write a validated number';
        return;
    }

    const result = convertToWords(number);
    document.getElementsByClassName('result').context = `In Letters : ${result}`;
}


function convertNumberToWords(number) {
    const units = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
    const teens = ["", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
    const tens = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
    let words = "";

    
    if (number === 0) {
        words = "zéro";
    } else if (number < 10) {
        words = units[number];
    } else if (number < 20) {
        words = teens[number - 10];
    } else if (number < 100) {
        const ten = Math.floor(number / 10);
        const unit = number % 10;
        words = tens[ten];
        if (unit !== 0) {
            words += "-" + units[unit];
        }
    } else {
        words = "Nombre non supporté (jusqu'à 99)";
    }

    return words;
}


