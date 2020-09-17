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

    if (
        storedFlashCards[0][deckLanguages[0]] == "" &&
        storedFlashCards[0][deckLanguages[1]] == "" &&
        storedFlashCards[0][deckLanguages[2]] == ""
    ) {
        for (let i = 0; i < 3; i++) {
            storedFlashCards[0][deckLanguages[i]] = flashcardValues[i];
        }
    } else {
        storedFlashCards.push({
            cardID: storedFlashCards.length + 1,
            [deckLanguages[0]]: flashcardValues[0],
            [deckLanguages[1]]: flashcardValues[1],
            [deckLanguages[2]]: flashcardValues[2],
            youtube: "",
            ok: 0,
            repeat: 0,
        });
    }

    inputs.forEach((input) => (input.value = ""));

    storeCards();
}
