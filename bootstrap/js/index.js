let languages = ["Magyar", "English", "عربي"];

let siteBody = document.querySelector("#siteBody");

function createMainPage() {
    let div = createAnyElement("div", {
        class: "container-fluid flashcard-margin",
    });
    let divRow = createAnyElement("div", {
        class: "row",
    });

    let colLeft = createAnyElement("div", {
        class: "col-12 col-md-3 themed-grid-col",
    });
    divRow.appendChild(colLeft);

    let colCenterCols = createMainButtons();
    divRow.appendChild(colCenterCols);

    let colRight = createAnyElement("div", {
        class: "col-12 col-md-3 themed-grid-col",
    });
    divRow.appendChild(colRight);

    div.appendChild(divRow);
    siteBody.appendChild(div);
}

function createMainButtons() {
    let divRowColCenter = createAnyElement("div", {
        class: "row",
    });

    let colCenter = createAnyElement("div", {
        class: "col-12 col-md-6 themed-grid-col",
    });

    let buttonColLeft = createAnyElement("div", {
        class: "col-12 col-md-6 themed-grid-col",
    });

    let buttonColRight = createAnyElement("div", {
        class: "col-12 col-md-6 themed-grid-col",
    });

    let buttonNewDeck = createAnyElement("button", {
        type: "button",
        class: "btn btn-primary bt-lg",
    });
    buttonNewDeck.innerHTML = "Make a new Deck";
    buttonColLeft.appendChild(buttonNewDeck);

    let buttonChoseDeck = createAnyElement("button", {
        type: "button",
        class: "btn btn-primary bt-lg",
    });
    buttonChoseDeck.innerHTML = "Choose a Deck";
    buttonColRight.appendChild(buttonChoseDeck);

    divRowColCenter.appendChild(buttonColLeft);
    divRowColCenter.appendChild(buttonColRight);
    colCenter.appendChild(divRowColCenter);

    return colCenter;
}

createMainPage();

function createFlashcardPage() {
    siteBody.innerHTML = "";

    let div = createAnyElement("div", {
        class: "container-fluid flashcard-margin",
    });

    let divRow = createAnyElement("div", {
        class: "row",
    });

    let divButtonRow = createButtonRow();

    for (let i = 0; i < 3; i++) {
        let cols = createAnyElement("div", {
            class: "col-12 col-md-4 themed-grid-col scene",
        });
        let flipCardDiv = createAnyElement("div", {
            class: "flip-card",
            id: `card${i + 1}`,
            onclick: `flipCard${i + 1}()`,
        });
        let flashcardFront = createFlipCardFrontElement(languages[i]);
        let flachcardBack = createFlipCardBackElement(
            "cardID" + i,
            "wordID" + i
        );
        flipCardDiv.appendChild(flashcardFront);
        flipCardDiv.appendChild(flachcardBack);
        cols.appendChild(flipCardDiv);
        divRow.appendChild(cols);
    }

    div.appendChild(divRow);
    div.appendChild(divButtonRow);
    siteBody.appendChild(div);
}

function createFlipCardFrontElement(languageName) {
    let divFront = createAnyElement("div", {
        class: "card_face card_face--front",
    });

    let p = createAnyElement("p");
    p.innerHTML = languageName;

    divFront.appendChild(p);

    return divFront;
}

function createFlipCardBackElement(cardID, wordID) {
    let divBack = createAnyElement("div", {
        class: "card_face card_face--back",
        id: `${cardID}`,
    });

    let divWord = createAnyElement("div", {
        id: `${wordID}`,
    });

    divBack.appendChild(divWord);

    return divBack;
}

function createButtonRow() {
    let divButton = createAnyElement("div", {
        class: "container-fluid button-menu-margin",
    });

    let divButtonCenter = createAnyElement("div", {
        class: "center",
    });

    let buttonFinish = createAnyElement("button", {
        class: "btn btn-danger",
        onclick: "startFlashcard()",
    });
    buttonFinish.innerHTML = "Finish";

    let buttonOK = createAnyElement("button", {
        class: "btn btn-primary",
        onclick: "flashcardChecker(true)",
    });
    buttonOK.innerHTML = "Ok";

    let buttonIdontKnow = createAnyElement("button", {
        class: "btn btn-primary",
        onclick: "flashcardChecker(false)",
    });
    buttonIdontKnow.innerHTML = "I don't know";

    divButtonCenter.appendChild(buttonFinish);
    divButtonCenter.appendChild(buttonOK);
    divButtonCenter.appendChild(buttonIdontKnow);

    divButton.appendChild(divButtonCenter);

    return divButton;
}
