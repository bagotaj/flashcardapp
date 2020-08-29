// Some parts of the code are in menu.js

var flashCards = [];

let emptyArray = [];
var storedFlashCards = [];
var editWord = [];

let deckLanguages = [];

// Store New Deck Labels and Inputs
let colCenterBodyRowStorage = {};

var minusThreeLess = [];
var minusTwo = [];
var minusOne = [];

var flashcardshows;

var flashcardIsClicked = [false, false, false];

/* var flashcardIsClicked1 = false;
var flashcardIsClicked2 = false;
var flashcardIsClicked3 = false; */

var flipCard1Clicked = false;
var flipCard2Clicked = false;
var flipCard3Clicked = false;

// Which flashcars was clicked

function clickHandler(number) {
    flashcardIsClicked[number] = true;
}

/* function clickHandler1() {
    flashcardIsClicked1 = true;
}

function clickHandler2() {
    flashcardIsClicked2 = true;
}

function clickHandler3() {
    flashcardIsClicked3 = true;
} */

// Flashcard flip functions

function flipCard1() {
    flipCard1Clicked = true;
    document.getElementById("card1").classList.toggle("is-flipped");
    document.getElementById("wordID0").style.display = "block";

    flashcardIsClicked[0] = false;
}

function flipCard2() {
    flipCard2Clicked = true;
    if (flashcardIsClicked[1] == true) {
        return;
    } else {
        document.getElementById("card2").classList.toggle("is-flipped");
        document.getElementById("wordID1").style.display = "block";

        flashcardIsClicked[1] = false;
    }
}

function flipCard3() {
    flipCard3Clicked = true;
    if (flashcardIsClicked[2] == true) {
        return;
    } else {
        document.getElementById("card3").classList.toggle("is-flipped");
        document.getElementById("wordID2").style.display = "block";

        flashcardIsClicked[2] = false;
    }
}

// Add flashcards

function flashcardMaker() {
    var inputs = document.querySelectorAll("input");

    let flashcardValues = [];

    for (let i = 0; i < deckLanguages.length; i++) {
        let id = deckLanguages[i];
        let language;

        if (id == "") {
            language = "";
        } else {
            language = document.querySelector(`#${id}`).value;
        }

        flashcardValues.push(language);
    }

    storedFlashCards.push({
        [deckLanguages[0]]: flashcardValues[0],
        [deckLanguages[1]]: flashcardValues[1],
        [deckLanguages[2]]: flashcardValues[2],
        youtube: "",
        ok: 0,
        repeat: 0,
    });

    inputs.forEach((input) => (input.value = ""));

    storeCards();
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
}

function storeCards() {
    localStorage.setItem(keyNames[usedDeck], JSON.stringify(storedFlashCards));
}

function flashcardChecker(data) {
    flashcardIsClicked[0] = false;
    flashcardIsClicked[1] = false;
    flashcardIsClicked[2] = false;

    if (flipCard1Clicked == true) {
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
    }

    removePara();
    hideFlashcards();
    if (data == true) {
        if (storedFlashCards[editWord].hasOwnProperty("ok")) {
            if (storedFlashCards[editWord].ok == 1) {
                if (storedFlashCards[editWord].hasOwnProperty("repeat")) {
                    var d = new Date().getDay();

                    storedFlashCards[editWord].repeat = d + 2;
                } else {
                    storedFlashCards[editWord].repeat = 0;
                }
            } else if (storedFlashCards[editWord].ok == 2) {
                if (storedFlashCards[editWord].hasOwnProperty("repeat")) {
                    var d = new Date().getDay();

                    storedFlashCards[editWord].repeat = d + 4;
                } else {
                    storedFlashCards[editWord].repeat = 0;
                }
            } else if (storedFlashCards[editWord].ok == 3) {
                if (storedFlashCards[editWord].hasOwnProperty("repeat")) {
                    var d = new Date().getDay();

                    storedFlashCards[editWord].repeat = d + 6;
                } else {
                    storedFlashCards[editWord].repeat = 0;
                }
            } else if (storedFlashCards[editWord].ok > 3) {
                if (storedFlashCards[editWord].hasOwnProperty("repeat")) {
                    var d = new Date().getDay();

                    storedFlashCards[editWord].repeat = d + 24;
                } else {
                    storedFlashCards[editWord].repeat = 0;
                }
            }
            storedFlashCards[editWord].ok += 1;
        } else {
            storedFlashCards[editWord].ok = 0;
        }

        randomWords();
    } else {
        if (storedFlashCards[editWord].hasOwnProperty("ok")) {
            storedFlashCards[editWord].ok -= 1;
        } else {
            storedFlashCards[editWord].ok = 0;
        }

        randomWords();
    }
}

function removePara() {
    let wordID0 = document.getElementById("wordID0");
    let para1 = wordID0.getElementsByTagName("P");
    for (let i = para1.length - 1; i >= 0; i--) {
        var p = para1[i];
        p.parentNode.removeChild(p);
    }

    let wordID1 = document.getElementById("wordID1");
    let para2p = wordID1.getElementsByTagName("P");
    let para2a = wordID1.getElementsByTagName("A");
    for (let i = para2p.length - 1; i >= 0; i--) {
        var p = para2p[i];
        var a = para2a[i];
        p.parentNode.removeChild(p);
        a.parentNode.removeChild(a);
    }

    let wordID2 = document.getElementById("wordID2");
    let para3p = wordID2.getElementsByTagName("P");
    let para3a = wordID2.getElementsByTagName("A");
    for (let i = para3p.length - 1; i >= 0; i--) {
        var p = para3p[i];
        var a = para3a[i];
        p.parentNode.removeChild(p);
        a.parentNode.removeChild(a);
    }
}

function hideFlashcards() {
    document.getElementById("wordID0").style.display = "none";
    document.getElementById("wordID1").style.display = "none";
    document.getElementById("wordID2").style.display = "none";
}

function randomWords() {
    editWord = [];

    if (storedFlashCards.length == 0) {
        if (flashCards.length == 0) {
            return;
        } else {
            var number = Math.floor(Math.random() * flashCards.length);
            let language1 = flashCards[number].magyar.split(",");
            document.getElementById("wordID0").innerHTML = language1;
            document.getElementById("wordID1").innerHTML =
                flashCards[number].angol;
            document.getElementById("wordID2").innerHTML =
                flashCards[number].arab;
            document.getElementById("nyelv3link").innerHTML =
                "<a href='https://forvo.com/search/" +
                flashCards[number].arab +
                "' target='_blank'>" +
                "pronunciations" +
                "</a>";
        }
    } else {
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
}

function monthChecker() {
    var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var m = new Date().getMonth();

    return daysOfMonth[m];
}

function writeWords(number) {
    this.number = number;

    for (let i = 0; i < deckLanguages.length; i++) {
        let language = storedFlashCards[this.number][deckLanguages[i]].split(
            ","
        );
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

    /* let language1 = storedFlashCards[this.number][deckLanguages[0]].split(",");
    for (let i = 0; i < language1.length; i++) {
        let para = document.createElement("p");
        let node = document.createTextNode(language1[i]);
        para.appendChild(node);
        let wordID0 = document.getElementById("wordID0");
        wordID0.appendChild(para);
    }
    let language2 = storedFlashCards[this.number][deckLanguages[1]].split(",");
    for (let i = 0; i < language2.length; i++) {
        let para = document.createElement("p");
        let node = document.createTextNode(language2[i]);
        para.appendChild(node);
        let pronunc = document.createElement("a");
        let pronuncnode = document.createTextNode("pronunciations");
        pronunc.appendChild(pronuncnode);
        pronunc.target = "_blank";
        pronunc.href = "https://forvo.com/search/" + language2[i];
        pronunc.addEventListener("click", clickHandler2);
        let wordID1 = document.getElementById("wordID1");
        wordID1.appendChild(para);
        wordID1.appendChild(pronunc);
    }
    let language3 = storedFlashCards[this.number][deckLanguages[2]].split(",");
    for (let i = 0; i < language3.length; i++) {
        let para = document.createElement("p");
        let node = document.createTextNode(language3[i]);
        para.appendChild(node);
        let pronunc = document.createElement("a");
        let pronuncnode = document.createTextNode("pronunciations");
        pronunc.appendChild(pronuncnode);
        pronunc.target = "_blank";
        pronunc.href = "https://forvo.com/search/" + language3[i];
        pronunc.addEventListener("click", clickHandler3);
        let wordID2 = document.getElementById("wordID2");
        wordID2.appendChild(para);
        wordID2.appendChild(pronunc);
    } */
}
