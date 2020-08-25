function createAddFlashcardsBody() {
    colCenterBodyRowStorage = {};

    createAddFlashcardsLabelInput();

    let colCenterBody = createColCenterBodyPart();

    return colCenterBody;
}

function createAddFlashcardsSubmitButton() {
    let addFlashcardsSubmitButton = createAnyElement("button", {
        class: "btn btn-danger",
        id: "submitword",
    });
    addFlashcardsSubmitButton.innerHTML = "Create";
    addFlashcardsSubmitButton.addEventListener("click", flashcardMaker);

    return addFlashcardsSubmitButton;
}

function createAddFlashcardsLabelInput() {
    let addFlashcardsSubmit = createAddFlashcardsSubmitButton();

    for (let i = 0; i < newDeckLanguages.length; i++) {
        let addFlashcardsLangLabel = createAnyElement("label", {
            for: newDeckLanguages[i],
        });
        addFlashcardsLangLabel.innerHTML = newDeckLanguages[i];

        let addFlashcardsLangInput = createAnyElement("input", {
            type: "text",
            id: newDeckLanguages[i],
            name: newDeckLanguages[i],
        });

        colCenterBodyRowStorage[`label${i}`] = addFlashcardsLangLabel;
        colCenterBodyRowStorage[`input${i}`] = addFlashcardsLangInput;
    }

    colCenterBodyRowStorage.addFlashcardsSubmit = addFlashcardsSubmit;
}
