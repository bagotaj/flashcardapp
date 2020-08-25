// Make Decks
// Save data to Localstorage

function newDeck() {
    newDeckLanguages = [];

    let inputs = document.querySelectorAll("input");

    if (storedFlashCards.length > 0) {
        storeCards();
    }

    deleteDecks();

    let newDeckName = document.querySelector("#adddeck").value;

    for (let i = 0; i < 3; i++) {
        let newDeckLanguage = document.getElementById(`language${i}`).value;

        if (newDeckLanguage == "") {
            continue;
        } else {
            newDeckLanguages.push(newDeckLanguage);
        }
    }

    localStorage.setItem(newDeckName, JSON.stringify(storedFlashCards));

    createChooseADeckList();

    usedDeck = 0;

    storedFlashCards = [];

    inputs.forEach((input) => (input.value = ""));
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
