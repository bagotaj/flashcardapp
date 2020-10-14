function createBodyPart(colCenterFunction) {
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

    let colCenter = colCenterFunction;

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

function createColCenterBodyPart() {
    let colCenterBody = createAnyElement("div", {
        class: "col-12 col-md-6 themed-grid-col menu-content-div",
    });

    for (let k in colCenterBodyRowStorage) {
        let divNewDeckBodyRow = createAnyElement("div", {
            class: "row",
        });
        let colNewDeckBody = createAnyElement("div", {
            class: "col-12 themed-grid-col menu-content",
        });

        colNewDeckBody.appendChild(colCenterBodyRowStorage[k]);
        divNewDeckBodyRow.appendChild(colNewDeckBody);
        colCenterBody.appendChild(divNewDeckBodyRow);
    }

    return colCenterBody;
}
