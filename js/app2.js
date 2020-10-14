// Some parts of the code are in menu.js

var flashCards = [];

var storedFlashCards = [];
var editWord = [];

var minusThreeLess = [];
var minusTwo = [];
var minusOne = [];

var flashcardshows;
var flashcardIsClicked1 = false;
var flashcardIsClicked2 = false;
var flashcardIsClicked3 = false;

var flipCard1Clicked = false;
var flipCard2Clicked = false;
var flipCard3Clicked = false;

// Which flashcars was clicked

function clickHandler1() {
    flashcardIsClicked1 = true;
}

function clickHandler2() {
    flashcardIsClicked2 = true;
}

function clickHandler3() {
    flashcardIsClicked3 = true;
}

// Flashcard clicking elements

/* var cardOne = document.getElementById("card1");
cardOne.addEventListener("click", flipCard1);

var cardTwo = document.getElementById("card2");
cardTwo.addEventListener("click", flipCard2);

var cardThree = document.getElementById("card3");
cardThree.addEventListener("click", flipCard3); */

function flipCard1() {
    flipCard1Clicked = true;
    document.getElementById("card1").classList.toggle("is-flipped");
    document.getElementById("wordID0").style.display = "block";

    flashcardIsClicked1 = false;
}

function flipCard2() {
    flipCard2Clicked = true;
    if (flashcardIsClicked2 == true) {
        return;
    } else {
        document.getElementById("card2").classList.toggle("is-flipped");
        document.getElementById("wordID1").style.display = "block";

        flashcardIsClicked2 = false;
    }
}

function flipCard3() {
    flipCard3Clicked = true;
    if (flashcardIsClicked3 == true) {
        return;
    } else {
        document.getElementById("card3").classList.toggle("is-flipped");
        document.getElementById("wordID2").style.display = "block";

        flashcardIsClicked3 = false;
    }
}

// storedFlashCards = storedFlashCards ? JSON.parse(storedFlashCards) : [];

// Add flashcards
// store the cards

// kivalaszthato itt is a deck (vagy legalabb jelezni, hogy melyik deck aktiv)

// megadhato, hogy ket- vagy harom nyelvu legyen a deck
// ez alapjan tarolni, hogy hany kartya jelenjen meg

// array elso eleme legyen ez!

function flashcardMaker() {
    var magyar = document.getElementById("nyelv1szo").value;
    var angol = document.getElementById("nyelv2szo").value;
    var arab = document.getElementById("nyelv3szo").value;
    var inputs = document.querySelectorAll("input");

    if (storedFlashCards === null) {
        flashCards.push({
            magyar: magyar,
            angol: angol,
            arab: arab,
            youtube: youtube,
            ok: 0,
            repeat: 0,
        });
        inputs.forEach((input) => (input.value = ""));
    } else {
        storedFlashCards.push({
            magyar: magyar,
            angol: angol,
            arab: arab,
            youtube: youtube,
            ok: 0,
            repeat: 0,
        });
        inputs.forEach((input) => (input.value = ""));
    }
}

function startFlashcard() {
    minusThreeLess = [];
    minusTwo = [];
    minusOne = [];

    chooseDeck();
    removePara();
    randomWords();
    if (storedFlashCards === null) {
        localStorage.setItem("flashcards", JSON.stringify(flashCards));
    } else {
        storeCards();
    }
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
    flashcardIsClicked1 = false;
    flashcardIsClicked2 = false;
    flashcardIsClicked3 = false;

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

    let language1 = storedFlashCards[this.number].magyar.split(",");
    for (let i = 0; i < language1.length; i++) {
        let para = document.createElement("p");
        let node = document.createTextNode(language1[i]);
        para.appendChild(node);
        let wordID0 = document.getElementById("wordID0");
        wordID0.appendChild(para);
    }
    let language2 = storedFlashCards[this.number].angol.split(",");
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
    let language3 = storedFlashCards[this.number].arab.split(",");
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
    }
}
