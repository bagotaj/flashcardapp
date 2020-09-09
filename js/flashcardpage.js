function createFlashcardPage() {
    siteBody.innerHTML = "";

    let div = createAnyElement("div", {
        class: "container-fluid flashcard-margin",
    });

    let divRow = createAnyElement("div", {
        class: "row",
    });

    let divButtonRow = createButtonRow();

    for (let i = 0; i < deckLanguages.length; i++) {
        let colsize = 4;

        if (deckLanguages.includes("")) {
            colsize = 6;
            if (deckLanguages[i] == "") {
                continue;
            } else {
                let cols = createFlashcard(colsize, i);
                divRow.appendChild(cols);
            }
        } else {
            let cols = createFlashcard(colsize, i);
            divRow.appendChild(cols);
        }
    }

    div.appendChild(divRow);
    div.appendChild(divButtonRow);
    siteBody.appendChild(div);
}

function createFlashcard(classcolsize, index) {
    let cols = createAnyElement("div", {
        class: `col-12 col-md-${classcolsize} themed-grid-col scene`,
    });
    let flipCardDiv = createAnyElement("div", {
        class: "flip-card",
        id: `card${index + 1}`,
        onclick: `flipCard${index + 1}()`,
    });
    let flashcardFront = createFlipCardFrontElement(deckLanguages[index]);
    let flachcardBack = createFlipCardBackElement(
        "cardID" + index,
        "wordID" + index
    );
    flipCardDiv.appendChild(flashcardFront);
    flipCardDiv.appendChild(flachcardBack);
    cols.appendChild(flipCardDiv);

    return cols;
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

    let buttonOK = createAnyElement("button", {
        class: "btn btn-primary",
        onclick: "flashcardChecker(true)",
    });
    buttonOK.innerHTML = "Ok";

    let buttonIdontKnow = createAnyElement("button", {
        class: "btn btn-danger",
        onclick: "flashcardChecker(false)",
    });
    buttonIdontKnow.innerHTML = "I don't know";

    divButtonCenter.appendChild(buttonOK);
    divButtonCenter.appendChild(buttonIdontKnow);

    divButton.appendChild(divButtonCenter);

    return divButton;
}
