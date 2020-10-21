// Make Decks
// Save data to Localstorage

function newDeck() {
    deckLanguages = [];

    let inputs = document.querySelectorAll("input");

    if (storedFlashCards.length > 0) {
        storeCards();

        storedFlashCards = [];
    }

    deleteDecks("choosedeck");
    deleteDecks("addflashcard");
    deleteDecks("database");

    let newDeckName = document.querySelector("#adddeck").value;

    for (let i = 0; i < 3; i++) {
        let newDeckLanguage = document.getElementById(`language${i}`).value;

        deckLanguages.push(newDeckLanguage);

        if (deckLanguages.length == 2) {
            deckLanguages.push("empty");
        }
    }

    storedFlashCards.push({
        cardID: storedFlashCards.length + 1,
        [deckLanguages[0]]: "",
        [deckLanguages[1]]: "",
        [deckLanguages[2]]: "",
        youtube: "",
        ok: 0,
        repeat: 0,
    });

    localStorage.setItem(newDeckName, JSON.stringify(storedFlashCards));

    createChooseADeckList("decklist", "choosedeck");
    createChooseADeckList("cardlist", "addflashcard");
    createChooseADeckList("databaselist", "database");

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) == newDeckName) {
            usedDeck = i;
        }
    }

    storedFlashCards = [];

    inputs.forEach((input) => (input.value = ""));

    usedLanguage();
}

function deleteDecks(wichdecklist) {
    let deck = document.getElementById(wichdecklist);
    let para1 = deck.getElementsByTagName("P");
    for (let i = para1.length - 1; i >= 0; i--) {
        var p = para1[i];
        p.parentNode.removeChild(p);
    }

    keyNames = [];
}
