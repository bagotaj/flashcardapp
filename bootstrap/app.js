var keyNames = [];
var flashCards = [];
var usedDeck;
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

var newdeckMenuStatus = false;
var addflashcardsMenuStatus = false;

function menuChooser(menu) {
  this.menu = menu;
  let newDeckDisplay = document.querySelector(".newdeck-content");
  let addFlashcardsvisibility = document.querySelector(
    ".addflashcard-content-div"
  );

  if (this.menu == "newdeck" && newdeckMenuStatus == false) {
    if (addflashcardsMenuStatus == true) {
      document.getElementById("addwords").style.zIndex = "1";
      addFlashcardsvisibility.style.visibility = "hidden";

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
      newDeckvisibility.style.visibility = "hidden";

      newdeckMenuStatus = false;
    }
    document.getElementById("addwords").style.zIndex = "1000";
    addFlashcardsvisibility.style.visibility = "visible";

    addflashcardsMenuStatus = true;
  } else if (this.menu == "addflashcards" && addflashcardsMenuStatus == true) {
    document.getElementById("addwords").style.zIndex = "1";
    addFlashcardsvisibility.style.visibility = "hidden";

    addflashcardsMenuStatus = false;
  }
}

function clickHandler1() {
  flashcardIsClicked1 = true;
}

function clickHandler2() {
  flashcardIsClicked2 = true;
}

function clickHandler3() {
  flashcardIsClicked3 = true;
}

var cardOne = document.getElementById("card1");
cardOne.addEventListener("click", flipCard1);

var cardTwo = document.getElementById("card2");
cardTwo.addEventListener("click", flipCard2);

var cardThree = document.getElementById("card3");
cardThree.addEventListener("click", flipCard3);

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
        whichDeck(i);
      } else {
        if (usedDeck == null) {
          usedDeck = i;
          whichDeck(i);
        }
      }
    };
    let deck = document.getElementById("choosedeck");
    deck.appendChild(para);
  }
}

// Make Decks
// localstorage -be tenni

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
        whichDeck(i);
      } else {
        if (usedDeck == null) {
          usedDeck = i;
          whichDeck(i);
        } else {
          storeCards();

          storedFlashCards = [];

          usedDeck = i;
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

function flipCard1() {
  flipCard1Clicked = true;
  document.getElementById("card1").classList.toggle("is-flipped");
  document.getElementById("nyelv1").style.display = "block";

  flashcardIsClicked1 = false;
}

function flipCard2() {
  flipCard2Clicked = true;
  if (flashcardIsClicked2 == true) {
    return;
  } else {
    document.getElementById("card2").classList.toggle("is-flipped");
    document.getElementById("nyelv2").style.display = "block";

    flashcardIsClicked2 = false;
  }
}

function flipCard3() {
  flipCard3Clicked = true;
  if (flashcardIsClicked3 == true) {
    return;
  } else {
    document.getElementById("card3").classList.toggle("is-flipped");
    document.getElementById("nyelv3").style.display = "block";
    document.getElementById("nyelv3youtube").style.display = "block";

    flashcardIsClicked3 = false;
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
    console.log(usedDeck);
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
  let nyelv1 = document.getElementById("nyelv1");
  let para1 = nyelv1.getElementsByTagName("P");
  for (let i = para1.length - 1; i >= 0; i--) {
    var p = para1[i];
    p.parentNode.removeChild(p);
  }

  let nyelv2 = document.getElementById("nyelv2");
  let para2p = nyelv2.getElementsByTagName("P");
  let para2a = nyelv2.getElementsByTagName("A");
  for (let i = para2p.length - 1; i >= 0; i--) {
    var p = para2p[i];
    var a = para2a[i];
    p.parentNode.removeChild(p);
    a.parentNode.removeChild(a);
  }

  let nyelv3 = document.getElementById("nyelv3");
  let para3p = nyelv3.getElementsByTagName("P");
  let para3a = nyelv3.getElementsByTagName("A");
  for (let i = para3p.length - 1; i >= 0; i--) {
    var p = para3p[i];
    var a = para3a[i];
    p.parentNode.removeChild(p);
    a.parentNode.removeChild(a);
  }
}

function hideFlashcards() {
  document.getElementById("nyelv1").style.display = "none";
  document.getElementById("nyelv2").style.display = "none";
  document.getElementById("nyelv3").style.display = "none";
  document.getElementById("nyelv3youtube").style.display = "none";
}

function randomWords() {
  editWord = [];

  if (storedFlashCards.length == 0) {
    if (flashCards.length == 0) {
      return;
    } else {
      var number = Math.floor(Math.random() * flashCards.length);
      let language1 = flashCards[number].magyar.split(",");
      document.getElementById("nyelv1").innerHTML = language1;
      document.getElementById("nyelv2").innerHTML = flashCards[number].angol;
      document.getElementById("nyelv3").innerHTML = flashCards[number].arab;
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
    let nyelv1 = document.getElementById("nyelv1");
    nyelv1.appendChild(para);
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
    let nyelv2 = document.getElementById("nyelv2");
    nyelv2.appendChild(para);
    nyelv2.appendChild(pronunc);
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
    let nyelv3 = document.getElementById("nyelv3");
    nyelv3.appendChild(para);
    nyelv3.appendChild(pronunc);
  }
}
