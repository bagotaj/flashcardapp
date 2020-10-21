function getFlashcardsFromLocalStorage() {
    flashCards = localStorage.getItem("Flashcards");
    flashCards = JSON.parse(flashCards);
}

function setFlashcardstoLocalStorage() {
    localStorage.setItem("Flashcards", JSON.stringify(flashCards));
}

function storeCards() {
    localStorage.setItem(keyNames[usedDeck], JSON.stringify(storedFlashCards));
}

function getCards(index) {
    storedFlashCards = localStorage.getItem(keyNames[index]);
    storedFlashCards = storedFlashCards ? JSON.parse(storedFlashCards) : [];
}

// Create flashcards from Text

function flashcardCreator() {
    let str = document.querySelector("#flashcardWords").value;
    let cells = str.split("\n").map(function (el) {
        return el.split(" - ");
    });

    let inputs = document.querySelectorAll("form input");

    let inputsValues = [];

    for (let i = 0; i < inputs.length; i++) {
        inputsValues.push(inputs[i].value);
    }

    let headings = inputsValues;

    let out = cells.map(function (el) {
        let obj = {};
        obj.cardID = 1;
        for (var i = 0; i < el.length; i++) {
            if (el.length == 2) {
                obj[headings[i]] = isNaN(Number(el[i])) ? el[i] : +el[i];
                obj.empty = "";
            } else {
                obj[headings[i]] = isNaN(Number(el[i])) ? el[i] : +el[i];
            }
        }
        return obj;
    });

    for (let i = 0; i < out.length; i++) {
        out[i].cardID = storedFlashCards.length + 1 + i;
        out[i].youtube = "";
        out[i].ok = 0;
        out[i].repeat = 0;
    }

    storedFlashCards = storedFlashCards.concat(out);
}

// Create a string from flashcards database

function flashcardsToSave() {
    let saveTextArea = document.querySelector("#saveFlashcardWords");

    cardsToSaveArray = storedFlashCards.map(function (el) {
        arr = [];
        for (let k in el) {
            if (
                k == "cardID" ||
                k == "ok" ||
                k == "repeat" ||
                k == "youtube" ||
                k == "" ||
                k == "empty"
            ) {
                continue;
            } else {
                arr.push(el[k]);
            }
        }
        return arr;
    });

    cardsToSaveArray2 = cardsToSaveArray.map(function (el) {
        if (el.length == 2) {
            el.splice(1, 0, "-");
        } else {
            el.splice(1, 0, "-");
            el.splice(3, 0, "-");
        }
        el.push("\n");
        return el;
    });

    cardsToSaveArrayToString = cardsToSaveArray2.map(function (el) {
        el = String(el).replace(/,-,/g, " - ");
        el = el.replace(/,\n/, "\n");
        return el;
    });

    cardsToSaveToString = String(cardsToSaveArrayToString);
    cardsToSaveToString = cardsToSaveToString.replace(/\n,/g, "\n");

    saveTextArea.value = cardsToSaveToString;
}
