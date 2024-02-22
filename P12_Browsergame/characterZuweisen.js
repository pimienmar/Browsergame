document.getElementById('characterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars (Seitenneuladen)

    let selectedCharacterId = document.querySelector('input[name="char"]:checked').value; // ID des ausgewählten Charakters
    console.log(selectedCharacterId);
    // Lade die characterAuswahl.json-Datei
    fetch('characterAuswahl.json')
    .then(response => response.json())
    .then(data => {
        // Finde den ausgewählten Charakter in den geladenen Daten
        let selectedCharacter = data.find(character => character.id === selectedCharacterId);
        
        if (selectedCharacter) {
            // Füge den ausgewählten Charakter zur character.json-Datei hinzu
            fetch('character.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(selectedCharacter)
            })
            .then(response => {
                if (response.ok) {
                    console.log('Character erfolgreich ausgewählt und in character.json gespeichert.');
                } else {
                    console.error('Fehler beim Schreiben des Charakters in character.json:', response.statusText);
                }
            })
            .catch(error => {
                console.error('Fehler beim Schreiben des Charakters in character.json:', error);
            });
        } else {
            console.error('Ausgewählter Charakter nicht gefunden.');
        }
    })
    .catch(error => {
        console.error('Fehler beim Laden der characterAuswahl.json:', error);
    });
});
