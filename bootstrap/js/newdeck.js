function createNewDeckPage() {
    siteBody.innerHTML = "";

    let divNewDeck = createAnyElement("div", {
        class: "container-fluid flashcard-margin",
    });

    let divNewDeckRow = createAnyElement("div", {
        class: "row",
    });

    let colLeft = createAnyElement("div", {
        class: "col-12 col-md-3 themed-grid-col",
    });

    let colCenter = createNewDeckBody();

    let colRight = createAnyElement("div", {
        class: "col-12 col-md-3 themed-grid-col",
    });

    divNewDeckRow.appendChild(colLeft);
    divNewDeckRow.appendChild(colCenter);
    divNewDeckRow.appendChild(colRight);

    divNewDeck.appendChild(divNewDeckRow);

    siteBody.appendChild(divNewDeck);

    return siteBody;
}

function createNewDeckBody() {
    let colCenterBody = createAnyElement("div", {
        class: "col-12 col-md-6 themed-grid-col",
    });

    for (let k in colCenterBodyRowStorage) {
        let divNewDeckBodyRow = createAnyElement("div", {
            class: "row",
        });
        let colNewDeckBody = createAnyElement("div", {
            class: "col-12 themed-grid-col",
        });

        colNewDeckBody.appendChild(colCenterBodyRowStorage[k]);
        divNewDeckBodyRow.appendChild(colNewDeckBody);
        colCenterBody.appendChild(divNewDeckBodyRow);
    }

    return colCenterBody;
}

// Store New Deck Labels and Inputs

let colCenterBodyRowStorage = {};

function createNewDeckLabel() {
    let newDeckLabel = createAnyElement("label", {
        for: "adddeck",
    });
    newDeckLabel.innerHTML = "Name of New Deck:";

    return newDeckLabel;
}

function createNewDeckInput() {
    let newDeckNameInput = createAnyElement("input", {
        type: "text",
        id: "adddeck",
        name: "deckname",
    });

    return newDeckNameInput;
}

function createNewDeckSubmitButton() {
    let newDeckNameSubmitButton = createAnyElement("button", {
        class: "btn btn-danger",
        id: "submitdeck",
    });
    newDeckNameSubmitButton.innerHTML = "Create";
    newDeckNameSubmitButton.addEventListener("click", newDeck);

    return newDeckNameSubmitButton;
}

function createNewDeckLabelInput() {
    let newDeckLabel = createNewDeckLabel();
    let newDeckInput = createNewDeckInput();
    let newDeckSubmit = createNewDeckSubmitButton();

    colCenterBodyRowStorage.newDeckLabel = newDeckLabel;
    colCenterBodyRowStorage.newDeckInput = newDeckInput;

    for (let i = 0; i < 3; i++) {
        let newDeckLangLabel = createAnyElement("label", {
            for: `language${i}`,
        });
        newDeckLangLabel.innerHTML = `Language no ${i + 1}:`;

        let newDeckLangInput = createAnyElement("input", {
            type: "text",
            id: `language${i}`,
            name: `language${i}name`,
        });

        colCenterBodyRowStorage[`label${i}`] = newDeckLangLabel;
        colCenterBodyRowStorage[`input${i}`] = newDeckLangInput;
    }

    colCenterBodyRowStorage.newDeckSubmit = newDeckSubmit;
}

createNewDeckLabelInput();
