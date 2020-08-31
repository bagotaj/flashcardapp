let keyNames = [];

let usedDeck;

// Choose a deck
// kivalasztani, ha van mar

function chooseDeck() {
    deleteDecks("choosedeck");
    deleteDecks("addflashcard");

    createChooseADeckList("decklist", "choosedeck");
    createChooseADeckList("cardlist", "addflashcard");
}

function whichDeck(index) {
    deckLanguages = [];

    if (storedFlashCards.length > 0) {
        storeCards();
        storedFlashCards = [];
    }

    if (storedFlashCards.length == 0) {
        getCards(index);

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

function createChooseADeckList(menu, id) {
    for (let i = 0; i < localStorage.length; i++) {
        if (keyNames.length >= localStorage.length) {
            continue;
        } else {
            keyNames.push(localStorage.key(i));
        }
    }

    for (let i = 0; i < keyNames.length; i++) {
        let para = document.createElement("p");
        let node = document.createTextNode(keyNames[i]);
        para.appendChild(node);
        para.onclick = function () {
            if (menu == "decklist") {
                onclickChooseADeck(i);
            } else {
                onclickAddFlashcards(i);
            }
        };
        let deck = document.getElementById(id);
        deck.appendChild(para);
    }
}

function onclickChooseADeck(i) {
    whichDeck(i);
    createFlashcardPage();
    startFlashcard();
}
