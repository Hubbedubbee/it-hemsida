// JavaScript-fil för interaktivitet

// Funktion för att visa en alert när man klickar på "Läs Mer"-knappen
function learnMore() {
    alert("Mer information kommer snart! Håll utkik efter uppdateringar.");
}

// Funktion för att hantera formulärinlämning (om man vill lägga till ytterligare interaktivitet)
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Tack för att du kontaktade oss! Vi återkommer till dig så snart som möjligt.');
});
