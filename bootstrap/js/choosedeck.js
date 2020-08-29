let keyNames = [];

let usedDeck;

// Choose a deck
// kivalasztani, ha van mar

function chooseDeck() {
    deleteDecks();

    createChooseADeckList();
}

function whichDeck(index) {
    deckLanguages = [];

    if (storedFlashCards.length > 0) {
        storeCards();
    }

    if (storedFlashCards.length == 0) {
        storedFlashCards = localStorage.getItem(keyNames[index]);
        storedFlashCards = storedFlashCards ? JSON.parse(storedFlashCards) : [];

        let keys = [];

        for (let k in storedFlashCards[0]) {
            keys.push(k);
        }

        for (let i = 0; i < 3; i++) {
            deckLanguages.push(keys[i]);
        }

        usedDeck = index;
    }
}

function createChooseADeckList() {
    for (let i = 0; i < localStorage.length; i++) {
        keyNames.push(localStorage.key(i));
    }

    for (let i = 0; i < keyNames.length; i++) {
        let para = document.createElement("p");
        let node = document.createTextNode(keyNames[i]);
        para.appendChild(node);
        para.onclick = function () {
            storedFlashCards = [];

            whichDeck(i);
            createFlashcardPage();
            startFlashcard();
        };
        let deck = document.getElementById("choosedeck");
        deck.appendChild(para);
    }
}
