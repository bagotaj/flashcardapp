var keyNames = [];

var usedDeck;

// Choose a deck
// kivalasztani, ha van mar

function chooseDeck() {
    deleteDecks();

    createChooseADeckList();
}

function whichDeck(i) {
    this.i = i;

    if (storedFlashCards.length > 0) {
        storeCards();

        localStorage.setItem(
            keyNames[this.i],
            JSON.stringify(storedFlashCards)
        );
    }

    if (storedFlashCards.length == 0) {
        storedFlashCards = localStorage.getItem(keyNames[this.i]);
        storedFlashCards = storedFlashCards ? JSON.parse(storedFlashCards) : [];

        startFlashcard();
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
            if (usedDeck == i) {
                createFlashcardPage();
                whichDeck(i);
            } else {
                if (usedDeck == null) {
                    usedDeck = i;
                    createFlashcardPage();
                    whichDeck(i);
                } else {
                    storeCards();

                    storedFlashCards = [];

                    usedDeck = i;
                    createFlashcardPage();
                    whichDeck(i);
                }
            }
        };
        let deck = document.getElementById("choosedeck");
        deck.appendChild(para);
    }
}

function setFlashcardsTitle() {}
