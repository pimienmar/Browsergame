// let submitWurdeGeclicked = false;
// // Element auswählen
// let derSubmitButton = document.getElementById("charSelectButton");

// derSubmitButton.addEventListener("click", function() {
//     // Funktion, die beim Klick ausgeführt wird
//     console.log("Button wurde geklickt!");
//     // Den Zustand des Klicks aktualisieren
//     submitWurdeGeclicked = true;
//     window.location.href = "faq.html";
    
// });

function submitCharacterChoose(event){
    console.log("Click")
    window.location.href = "faq.html";
    event.preventDefault();
    return false;
}


function setCharImg1(){
    let image1 = document.getElementById('setimg');
    image1.src = "/P12_Browsergame/img/char1.png";
    


    // if (submitWurdeGeclicked) {
    //     console.log("Orc Clown wird zugewiesen");
    //     window.location.href = "dungeonOverview.html";
    // } else {
    //     console.log("Der Button wurde noch nicht geklickt.");
    // }

    // if ()
    // let clownorc = {
    //     name : "Clown Orc",
    //     level: 1,
    //     health: 150,
    //     damage: 10,
    //     Coins: 0,
    //     text: "Ich bin ein Clown-Orc",
    //     imagePath: "img/char1.png"
    // }
}

function setCharImg2(){
    let image2 = document.getElementById('setimg');
    image2.src = "img/char2.png";
    
}

function setCharImg3(){
    let image3 = document.getElementById('setimg');
    image3.src = "img/char3.png";
}

function setCharImg4(){
    let image4 = document.getElementById('setimg');
    image4.src = "img/char4.png";
    
}




// document.getElementById('characterForm').addEventListener('click', function(event) {
//     event.preventDefault(); // Verhindert das Standardverhalten des Formulars (Seitenneuladen)

//     let selectedCharacterId = document.querySelector('input[name="char"]:checked').value; // ID des ausgewählten Charakters
//     console.log(selectedCharacterId);
//     // Lade die characterAuswahl.json-Datei
//     fetch('characterAuswahl.json')
//     .then(response => response.json())
//     .then(data => {
//         // Finde den ausgewählten Charakter in den geladenen Daten
//         let selectedCharacter = data.find(character => character.id === selectedCharacterId);
        
//         if (selectedCharacter) {
//             // Füge den ausgewählten Charakter zur character.json-Datei hinzu
//             fetch('character.json', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(selectedCharacter)
//             })
//             .then(response => {
//                 if (response.ok) {
//                     console.log('Character erfolgreich ausgewählt und in character.json gespeichert.');
//                 } else {
//                     console.error('Fehler beim Schreiben des Charakters in character.json:', response.statusText);
//                 }
//             })
//             .catch(error => {
//                 console.error('Fehler beim Schreiben des Charakters in character.json:', error);
//             });
//         } else {
//             console.error('Ausgewählter Charakter nicht gefunden.');
//         }
//     })
//     .catch(error => {
//         console.error('Fehler beim Laden der characterAuswahl.json:', error);
//     });
// });
