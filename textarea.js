// Sélectionnez le textarea par son ID
const textArea = document.getElementById('textArea');

// Écoutez l'événement "input" pour détecter les changements dans le textarea
textArea.addEventListener('input', function () {
    // Obtenez le texte saisi dans le textarea
    const text = textArea.value;

    // Utilisez une expression régulière pour rechercher des numéros de téléphone
    const phoneRegex = /(\d{10}|\(\d{3}\)\s*\d{3}[-.\s]?\d{4}|\d{3}[-.\s]?\d{4}[-.\s]?\d{4})/g;

    // Remplacez tous les numéros de téléphone trouvés par une chaîne vide
    const sanitizedText = text.replace(phoneRegex, '');

    // Réinjectez le texte nettoyé dans le textarea
    textArea.value = sanitizedText;
});
