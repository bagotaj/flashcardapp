let keyNames = [];

let usedDeck;

// Choose a deck
// kivalasztani, ha van mar

function chooseDeck() {
    deleteDecks("choosedeck");
    deleteDecks("addflashcard");
    deleteDecks("database");

    createChooseADeckList("decklist", "choosedeck");
    createChooseADeckList("cardlist", "addflashcard");
    createChooseADeckList("databaselist", "database");
}

function whichDeck(index, saveoption) {
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

        for (let i = 1; i < 4; i++) {
            deckLanguages.push(keys[i]);
        }

        usedDeck = index;

        usedLanguage(saveoption);
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
        para.setAttribute("data-toggle", "collapse");
        para.setAttribute("data-target", ".navbar-collapse.show");
        let node = document.createTextNode(keyNames[i]);
        para.appendChild(node);
        para.onclick = function () {
            if (menu == "decklist") {
                onclickChooseADeck(i);
            } else if (menu == "databaselist") {
                onclickDatabase(i);
            } else {
                onclickAddFlashcards(i);
            }
        };
        let deck = document.getElementById(id);
        deck.appendChild(para);
    }
}

function onclickChooseADeck(i) {
    whichDeck(i, choosedeck);
    createFlashcardPage();
    startFlashcard();
}
