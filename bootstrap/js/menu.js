var keyNames = [];

var usedDeck;

var newdeckMenuStatus = false;
var addflashcardsMenuStatus = false;

// App starter function

function Start() {
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
                }
            }
        };
        let deck = document.getElementById("choosedeck");
        deck.appendChild(para);
    }
}

// Make Decks
// Save data to Localstorage

function newDeck() {
    var inputs = document.querySelectorAll("input");

    if (storedFlashCards.length > 0) {
        storeCards();
    }

    deleteDecks();

    var newD = document.getElementById("adddeck").value;
    localStorage.setItem(newD, JSON.stringify(flashCards));

    Start();

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

// Choose a deck
// kivalasztani, ha van mar

function chooseDeck() {
    deleteDecks();

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

function whichDeck(i) {
    this.i = i;

    if ((storedFlashCards.length || flashCards.length) > 0) {
        storeCards();

        localStorage.setItem(keyNames[this.i], JSON.stringify(flashCards));
    }

    if ((storedFlashCards.length || flashCards.length) == 0) {
        storedFlashCards = localStorage.getItem(keyNames[this.i]);
        storedFlashCards = storedFlashCards ? JSON.parse(storedFlashCards) : [];

        startFlashcard();
    }

    // fromLocalStorage(keyNames[this.i]);
}

// Which menu choosed on menu bar

function menuChooser(menu) {
    this.menu = menu;
    let newDeckDisplay = document.querySelector(".newdeck-content");
    let addFlashcardDisplay = document.querySelector(".addflashcard-content");

    if (this.menu == "newdeck" && newdeckMenuStatus == false) {
        if (addflashcardsMenuStatus == true) {
            document.getElementById("addwords").style.zIndex = "1";
            addFlashcardDisplay.style.display = "none";

            addflashcardsMenuStatus = false;
        }
        document.getElementById("newDeck").style.zIndex = "1000";
        newDeckDisplay.style.display = "block";

        newdeckMenuStatus = true;
    } else if (this.menu == "newdeck" && newdeckMenuStatus == true) {
        document.getElementById("newDeck").style.zIndex = "1";
        newDeckDisplay.style.display = "none";

        newdeckMenuStatus = false;
    }

    if (this.menu == "addflashcards" && addflashcardsMenuStatus == false) {
        if (newdeckMenuStatus == true) {
            document.getElementById("newDeck").style.zIndex = "1";
            newDeckDisplay.style.display = "none";

            newdeckMenuStatus = false;
        }
        document.getElementById("addwords").style.zIndex = "1000";
        addFlashcardDisplay.style.display = "block";

        addflashcardsMenuStatus = true;
    } else if (
        this.menu == "addflashcards" &&
        addflashcardsMenuStatus == true
    ) {
        document.getElementById("addwords").style.zIndex = "1";
        addFlashcardDisplay.style.display = "none";

        addflashcardsMenuStatus = false;
    }
}
