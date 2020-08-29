// Make Decks
// Save data to Localstorage

function newDeck() {
    deckLanguages = [];

    let inputs = document.querySelectorAll("input");

    if (storedFlashCards.length > 0) {
        storeCards();
    }

    deleteDecks();

    let newDeckName = document.querySelector("#adddeck").value;

    for (let i = 0; i < 3; i++) {
        let newDeckLanguage = document.getElementById(`language${i}`).value;

        deckLanguages.push(newDeckLanguage);
    }

    localStorage.setItem(newDeckName, JSON.stringify(emptyArray));

    createChooseADeckList();

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) == newDeckName) {
            usedDeck = i;
        }
    }

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
