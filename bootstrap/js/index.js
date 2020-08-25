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
