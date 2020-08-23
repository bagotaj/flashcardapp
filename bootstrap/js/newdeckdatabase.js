// Make Decks
// Save data to Localstorage

let newDeckLanguages = [];

function newDeck() {
    let inputs = document.querySelectorAll("input");

    /* if (storedFlashCards.length > 0) {
        storeCards();
    }

    deleteDecks();
 */
    let newDeckName = document.getElementById("adddeck").value;

    for (let i = 0; i < 3; i++) {
        let newDeckLanguage = document.getElementById(`language${i}`).value;
        newDeckLanguages.push(newDeckLanguage);
    }

    storedFlashCards.push({
        [newDeckLanguages[0]]: newDeckLanguages[0],
        [newDeckLanguages[1]]: newDeckLanguages[1],
        [newDeckLanguages[2]]: newDeckLanguages[2],
        youtube: "youtube",
        ok: 0,
        repeat: 0,
    });

    console.log(newDeckName);

    /* localStorage.setItem(newDeckName, JSON.stringify(storedFlashCards));

    Start();

    storedFlashCards = [];

    inputs.forEach((input) => (input.value = "")); */
}

function deleteDecks() {
    let deck = document.getElementById("choosedeck");
    let para1 = deck.getElementsByTagName("P");
    for (let i = para1.length - 1; i >= 0; i--) {
        var p = para1[i];
        p.parentNode.removeChild(p);
    }

    keyNames = [];
}
