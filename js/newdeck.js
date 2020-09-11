function createNewDeckBody() {
    usedLanguage();

    colCenterBodyRowStorage = {};

    createNewDeckLabelInput();

    let colCenterBody = createColCenterBodyPart();

    return colCenterBody;
}

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
