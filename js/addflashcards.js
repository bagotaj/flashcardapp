function createAddFlashcardsBody() {
    colLeftBodyRowStorage = {};
    colCenterBodyRowStorage = {};
    colRightBodyRowStorage = {};

    flashcardLabelInputCreator();

    let colCenterBody = createColCenterBodyPart(
        "col-12 col-md-4 themed-grid-col menu-content-div flashcard-margin",
        "col-12 col-md-4 themed-grid-col menu-content-div flashcard-margin",
        "col-12 col-md-4 themed-grid-col menu-content-div flashcard-margin"
    );

    return colCenterBody;
}

function createAddFlashcardsSubmitButton(id, usedFunction, buttonText) {
    let addFlashcardsSubmitButton = createAnyElement("button", {
        class: "btn btn-danger",
        id: `${id}`,
        onclick: usedFunction,
    });
    addFlashcardsSubmitButton.innerHTML = buttonText;

    return addFlashcardsSubmitButton;
}

function flashcardLabelInputCreator() {
    let addFlashcardsSubmit = createAddFlashcardsSubmitButton(
        "submitword",
        "flashcardMaker()",
        "Create"
    );

    let addFlashcardsCreatorSubmit = createAddFlashcardsSubmitButton(
        "submitcreatewords",
        "flashcardCreator()",
        "Create"
    );

    let addFlashcardsSaverSubmit = createAddFlashcardsSubmitButton(
        "submitsavewords",
        "flashcardsToSave()",
        "Save"
    );

    let addFlashcardsLabel = createAnyElement("label");
    addFlashcardsLabel.innerHTML = "Add Flashcard";

    colLeftBodyRowStorage["labeladdflashcard"] = addFlashcardsLabel;

    for (let i = 0; i < deckLanguages.length; i++) {
        if (deckLanguages[i] == "empty") {
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

            colLeftBodyRowStorage[`label${i}`] = addFlashcardsLangLabel;
            colLeftBodyRowStorage[`input${i}`] = addFlashcardsLangInput;
        }
    }

    colLeftBodyRowStorage.addFlashcardsSubmit = addFlashcardsSubmit;

    let ownDatabaseLabel = createAnyElement("label");
    ownDatabaseLabel.innerHTML = "Add Own Database";

    colCenterBodyRowStorage["labelowndata"] = ownDatabaseLabel;

    let ownDatabaseLanguages = createAnyElement("form");

    for (let i = 0; i < deckLanguages.length; i++) {
        if (deckLanguages[i] == "empty") {
            continue;
        } else {
            let ownDatabaseLanguagesInput = createAnyElement("input", {
                class: "form-control",
                type: "text",
                id: deckLanguages[i] + "owndatabase",
                name: deckLanguages[i] + "owndatabase",
                value: deckLanguages[i],
            });

            ownDatabaseLanguages.appendChild(ownDatabaseLanguagesInput);
        }
    }

    colCenterBodyRowStorage["ownDatabaseLanguages"] = ownDatabaseLanguages;

    let ownDatabaseTextarea = createAnyElement("textarea", {
        name: "flashcardWords",
        id: "flashcardWords",
        cols: "30",
        rows: "10",
        placeholder:
            "word - word - word\npélda - example - مثال\n\nword - word\npélda, precedens - example",
    });

    colCenterBodyRowStorage["textareowndata"] = ownDatabaseTextarea;

    colCenterBodyRowStorage.addFlashcardsCreatorSubmit = addFlashcardsCreatorSubmit;

    let saveFlashcardsLabel = createAnyElement("label");
    saveFlashcardsLabel.innerHTML = "Save Flashcards";

    colRightBodyRowStorage["labelsaveflashcard"] = saveFlashcardsLabel;

    let saveDatabaseTextarea = createAnyElement("textarea", {
        name: "saveFlashcardWords",
        id: "saveFlashcardWords",
        cols: "30",
        rows: "10",
    });

    colRightBodyRowStorage["textaresavedata"] = saveDatabaseTextarea;

    colRightBodyRowStorage.addFlashcardsSaverSubmit = addFlashcardsSaverSubmit;
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

        if (id == "empty") {
            language = "empty";
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
