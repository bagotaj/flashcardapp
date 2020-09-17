// Some parts of the code are in menu.js
let flashCards = [];

var storedFlashCards = [];
var editWord = [];

let deckLanguages = [];
let keys = [];

// Store New Deck Labels and Inputs
let colCenterBodyRowStorage = {};

var minusThreeLess = [];
var minusTwo = [];
var minusOne = [];

var flashcardshows;

var flashcardIsClicked = [false, false, false];

let flipCardsClicked = [false, false, false];

// Which flashcars was clicked

function clickHandler(number) {
    flashcardIsClicked[number] = true;
}

// Flashcard flip functions

function flipCard(i) {
    flipCardsClicked[i] = true;
    if (flashcardIsClicked[i] == true) {
        return;
    } else {
        document.getElementById(`card${i + 1}`).classList.toggle("is-flipped");
        document.getElementById(`wordID${i}`).style.display = "block";

        flashcardIsClicked[i] = false;
    }
}

function startFlashcard() {
    minusThreeLess = [];
    minusTwo = [];
    minusOne = [];

    chooseDeck();
    removePara();
    randomWords();

    for (var i = 0; i < storedFlashCards.length; i++) {
        if (storedFlashCards[i].ok <= -3) {
            minusThreeLess.push(i);
        } else if (storedFlashCards[i].ok == -2) {
            minusTwo.push(i);
        } else if (storedFlashCards[i].ok == -1) {
            minusOne.push(i);
        }
    }

    // Part of the new flashcard checking method
    storedFlashCards.sort((a, b) => (a.ok > b.ok ? 1 : -1));
}

function flashcardChecker(data) {
    for (let i = 0; i < 3; i++) {
        flashcardIsClicked[i] = false;
    }

    for (let i = 0; i < deckLanguages.length; i++) {
        if (deckLanguages[i] == "") {
            continue;
        } else {
            if (flipCardsClicked[i] == true) {
                flipCard(i);
                flipCardsClicked[i] = false;
            }
        }
    }

    /* if (flipCard1Clicked == true) {
        flipCard1();
        flipCard1Clicked = false;
    }

    if (flipCard2Clicked == true) {
        flipCard2();
        flipCard2Clicked = false;
    }

    if (flipCard3Clicked == true) {
        flipCard3();
        flipCard3Clicked = false;
    } */

    removePara();
    hideFlashcards();

    if (data == true) {
        if (storedFlashCards[editWord].ok == 1) {
            var d = new Date().getDay();

            storedFlashCards[editWord].repeat = d + 2;
        } else if (storedFlashCards[editWord].ok == 2) {
            var d = new Date().getDay();

            storedFlashCards[editWord].repeat = d + 4;
        } else if (storedFlashCards[editWord].ok == 3) {
            var d = new Date().getDay();

            storedFlashCards[editWord].repeat = d + 6;
        } else if (storedFlashCards[editWord].ok > 3) {
            var d = new Date().getDay();

            storedFlashCards[editWord].repeat = d + 24;
        }
        storedFlashCards[editWord].ok += 1;
    } else {
        storedFlashCards[editWord].ok -= 1;
    }

    randomWords();
}

function removePara() {
    for (let i = 0; i < deckLanguages.length; i++) {
        if (deckLanguages[i] == "") {
            continue;
        } else {
            let wordID = document.getElementById(`wordID${i}`);
            let paraP = wordID.getElementsByTagName("P");
            let paraA = wordID.getElementsByTagName("A");
            for (let i = paraP.length - 1; i >= 0; i--) {
                var p = paraP[i];
                var a = paraA[i];
                p.parentNode.removeChild(p);
                a.parentNode.removeChild(a);
            }
        }
    }
}

function hideFlashcards() {
    for (let i = 0; i < deckLanguages.length; i++) {
        if (deckLanguages[i] == "") {
            continue;
        } else {
            document.getElementById(`wordID${i}`).style.display = "none";
        }
    }
}

function randomWords() {
    editWord = [];

    var number = Math.floor(Math.random() * storedFlashCards.length);
    var number2 = Math.floor(Math.random() * storedFlashCards.length);
    var number33 = Math.floor(Math.random() * minusThreeLess.length);
    var number32 = Math.floor(Math.random() * minusTwo.length);
    var number31 = Math.floor(Math.random() * minusOne.length);
    editWord.push(number);

    var month = monthChecker();
    var d = new Date().getDate();

    if (minusThreeLess.length > 0) {
        let arraynumber3 = minusThreeLess[number33];
        writeWords(arraynumber3);
        editWord = [];
        editWord.push(arraynumber3);
        minusThreeLess.splice(number33, 1);
    } else if (minusTwo.length > 0) {
        let arraynumber2 = minusTwo[number32];
        writeWords(arraynumber2);
        editWord = [];
        editWord.push(arraynumber2);
        minusTwo.splice(number32, 1);
    } else if (minusOne.length > 0) {
        let arraynumber1 = minusOne[number31];
        writeWords(arraynumber1);
        editWord = [];
        editWord.push(arraynumber1);
        minusOne.splice(number31, 1);
    } else if (storedFlashCards[number].ok == 0) {
        writeWords(number);
    } else if (storedFlashCards[number].ok == 1) {
        if (
            storedFlashCards[number].repeat == d ||
            storedFlashCards[number].repeat == d - month
        ) {
            writeWords(number);
        } else {
            writeWords(number2);
            editWord = [];
            editWord.push(number2);
        }
    } else if (storedFlashCards[number].ok == 2) {
        if (
            storedFlashCards[number].repeat == d ||
            storedFlashCards[number].repeat == d - month
        ) {
            writeWords(number);
        } else {
            writeWords(number2);
            editWord = [];
            editWord.push(number2);
        }
    } else if (storedFlashCards[number].ok == 3) {
        if (
            storedFlashCards[number].repeat == d ||
            storedFlashCards[number].repeat == d - month
        ) {
            writeWords(number);
        } else {
            writeWords(number2);
            editWord = [];
            editWord.push(number2);
        }
    } else if (storedFlashCards[number].ok >= 3) {
        if (
            storedFlashCards[number].repeat == d ||
            storedFlashCards[number].repeat == d - month
        ) {
            writeWords(number);
        } else {
            writeWords(number2);
            editWord = [];
            editWord.push(number2);
        }
    }
}

function monthChecker() {
    var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var m = new Date().getMonth();

    return daysOfMonth[m];
}

function writeWords(number) {
    this.number = number;

    for (let i = 0; i < deckLanguages.length; i++) {
        if (deckLanguages[i] == "") {
            continue;
        } else {
            let language = storedFlashCards[this.number][
                deckLanguages[i]
            ].split(",");
            for (let n = 0; n < language.length; n++) {
                let para = document.createElement("p");
                let node = document.createTextNode(language[n]);

                para.appendChild(node);
                let pronunc = document.createElement("a");
                let pronuncnode = document.createTextNode("pronunciations");
                pronunc.appendChild(pronuncnode);
                pronunc.target = "_blank";
                pronunc.href = "https://forvo.com/search/" + language[n];
                pronunc.onclick = function () {
                    clickHandler(i);
                };

                let wordID = document.getElementById(`wordID${i}`);
                wordID.appendChild(para);
                wordID.appendChild(pronunc);
            }
        }
    }
}
