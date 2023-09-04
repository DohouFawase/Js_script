function calculateTime() {
    const birthdateInput = document.getElementById("birthdate");
    const elapsedTimeOutput = document.getElementById("elapsedTime");

    const birthdate = new Date(birthdateInput.value);
    const now = new Date();

    // Calcul du temps écoulé depuis la date de naissance jusqu'à l'instant T
    const elapsedTime = calculateElapsedTime(birthdate, now);

    // Affichage du temps écoulé
    elapsedTimeOutput.textContent = `Temps écoulé : ${elapsedTime}`;
}

function calculateElapsedTime(startDate, endDate) {
    const timeDiff = endDate - startDate;

    const years = endDate.getFullYear() - startDate.getFullYear();
    const months = endDate.getMonth() - startDate.getMonth();
    const days = endDate.getDate() - startDate.getDate();
    const hours = endDate.getHours() - startDate.getHours();
    const minutes = endDate.getMinutes() - startDate.getMinutes();
    const seconds = endDate.getSeconds() - startDate.getSeconds();

    return `${years} ans, ${months} mois, ${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes`;
}
