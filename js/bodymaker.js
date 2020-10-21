function createBodyPart(colCenterFunction) {
    siteBody.innerHTML = "";

    let divNewDeck = createAnyElement("div", {
        class: "container-fluid",
    });

    let divNewDeckRow = colCenterFunction;

    divNewDeck.appendChild(divNewDeckRow);

    siteBody.appendChild(divNewDeck);

    return siteBody;
}

function createColCenterBodyPart(classLeft, classCenter, classRight) {
    let divNewDeckRow = createAnyElement("div", {
        class: "row",
    });

    let colLeftBody = createAnyElement("div", {
        class: classLeft,
    });

    if (
        Object.keys(colLeftBodyRowStorage).length === 0 &&
        colLeftBodyRowStorage.constructor === Object
    ) {
        stop;
    } else {
        for (let k in colLeftBodyRowStorage) {
            let divNewDeckBodyRow = createAnyElement("div", {
                class: "row",
            });
            let colNewDeckBody = createAnyElement("div", {
                class: "col-12 themed-grid-col menu-content",
            });

            colNewDeckBody.appendChild(colLeftBodyRowStorage[k]);
            divNewDeckBodyRow.appendChild(colNewDeckBody);
            colLeftBody.appendChild(divNewDeckBodyRow);
        }
    }

    let colCenterBody = createAnyElement("div", {
        class: classCenter,
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

    let colRightBody = createAnyElement("div", {
        class: classRight,
    });

    if (
        Object.keys(colRightBodyRowStorage).length === 0 &&
        colRightBodyRowStorage.constructor === Object
    ) {
        stop;
    } else {
        for (let k in colRightBodyRowStorage) {
            let divNewDeckBodyRow = createAnyElement("div", {
                class: "row",
            });
            let colNewDeckBody = createAnyElement("div", {
                class: "col-12 themed-grid-col menu-content",
            });

            colNewDeckBody.appendChild(colRightBodyRowStorage[k]);
            divNewDeckBodyRow.appendChild(colNewDeckBody);
            colRightBody.appendChild(divNewDeckBodyRow);
        }
    }

    divNewDeckRow.appendChild(colLeftBody);
    divNewDeckRow.appendChild(colCenterBody);
    divNewDeckRow.appendChild(colRightBody);

    return divNewDeckRow;
}
