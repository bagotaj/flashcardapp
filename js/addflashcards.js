function createAddFlashcardsBody() {
    colCenterBodyRowStorage = {};

    flashcardLabelInputCreator();

    let colCenterBody = createColCenterBodyPart();

    return colCenterBody;
}

function createAddFlashcardsSubmitButton(id, usedFunction) {
    let addFlashcardsSubmitButton = createAnyElement("button", {
        class: "btn btn-danger",
        id: `${id}`,
        onclick: usedFunction,
    });
    addFlashcardsSubmitButton.innerHTML = "Create";

    return addFlashcardsSubmitButton;
}

function flashcardLabelInputCreator() {
    let addFlashcardsSubmit = createAddFlashcardsSubmitButton(
        "submitword",
        "flashcardMaker()"
    );

    let addFlashcardsCreatorSubmit = createAddFlashcardsSubmitButton(
        "submitcreatewords",
        "flashcardCreator()"
    );

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

    let ownDatabaseLabel = createAnyElement("label", {
        class: "flashcard-margin",
    });
    ownDatabaseLabel.innerHTML = "Own Database";

    colCenterBodyRowStorage["labelowndata"] = ownDatabaseLabel;

    let ownDatabaseLanguages = createAnyElement("form");

    for (let i = 0; i < deckLanguages.length; i++) {
        if (deckLanguages[i] == "") {
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

function flashcardCreator() {
    let str = document.querySelector("#flashcardWords").value;
    let cells = str.split("\n").map(function (el) {
        return el.split(" - ");
    });

    let inputs = document.querySelectorAll("form input");

    let inputsValues = [];

    for (let i = 0; i < inputs.length; i++) {
        inputsValues.push(inputs[i].value);
    }

    let headings = inputsValues;

    let out = cells.map(function (el) {
        let obj = {};
        for (var i = 0; i < el.length; i++) {
            obj[headings[i]] = isNaN(Number(el[i])) ? el[i] : +el[i];
        }
        return obj;
    });

    for (let i = 0; i < out.length; i++) {
        out[i].cardID = storedFlashCards.length + 1 + i;
        out[i].youtube = "";
        out[i].ok = 0;
        out[i].repeat = 0;
    }

    storedFlashCards = storedFlashCards.concat(out);
}
