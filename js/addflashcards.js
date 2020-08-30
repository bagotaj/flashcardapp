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
    if (deckLanguages == "") {
        flashcardLabelInputCreator();
    } else {
        flashcardLabelInputCreator();
    }
}

function flashcardLabelInputCreator() {
    let addFlashcardsSubmit = createAddFlashcardsSubmitButton();

    for (let i = 0; i < deckLanguages.length; i++) {
        if (deckLanguages[i] == "") {
            continue;
        } else {
            let addFlashcardsLangLabel = createAnyElement("label", {
                for: deckLanguages[i],
            });
            addFlashcardsLangLabel.innerHTML = deckLanguages[i];

            let addFlashcardsLangInput = createAnyElement("input", {
                type: "text",
                id: deckLanguages[i],
                name: deckLanguages[i],
            });

            colCenterBodyRowStorage[`label${i}`] = addFlashcardsLangLabel;
            colCenterBodyRowStorage[`input${i}`] = addFlashcardsLangInput;
        }
    }

    colCenterBodyRowStorage.addFlashcardsSubmit = addFlashcardsSubmit;
}

// Main function in chooosedeck.js

function onclickAddFlashcards(i) {
    whichDeck(i);
    createBodyPart(createAddFlashcardsBody());
}
