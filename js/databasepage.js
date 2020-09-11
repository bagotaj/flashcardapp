function createDatabasePage() {
    siteBody.innerHTML = "";

    let fluidContainer = createAnyElement("div", {
        class: "container-fluid flashcard-margin",
    });

    let rowDiv = createAnyElement("div", {
        class: "row",
    });

    let colDivLeft = createAnyElement("div", {
        class: "col-12 col-md-1 themed-grid-col",
    });

    let colDivCenter = createColDivCenter();

    let colDivRight = createAnyElement("div", {
        class: "col-12 col-md-1 themed-grid-col",
    });

    rowDiv.appendChild(colDivLeft);
    rowDiv.appendChild(colDivCenter);
    rowDiv.appendChild(colDivRight);
    fluidContainer.appendChild(rowDiv);
    siteBody.appendChild(fluidContainer);
}

function createColDivCenter() {
    createKeys();

    let colDivCenter = createAnyElement("div", {
        class: "col-12 col-md-10 themed-grid-col",
    });

    let table = createAnyElement("table", {
        id: "userTable",
        class: "table table-striped",
    });

    let thead = createAnyElement("thead");
    let tbody = createAnyElement("tbody");
    let tr = createAnyElement("tr");

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] == "action") {
            let th = createAnyElement("th");
            th.innerHTML = keys[i];
            tr.appendChild(th);
        } else {
            let th = createAnyElement("th", {
                class: "cursor",
            });
            th.innerHTML = keys[i];
            th.onclick = function () {
                sortDatabaseElements(keys[i]);
            };
            tr.appendChild(th);
        }
    }

    thead.appendChild(tr);
    table.appendChild(thead);
    table.appendChild(tbody);
    colDivCenter.appendChild(table);

    return colDivCenter;
}

// Main function in chooosedeck.js

function onclickDatabase(i) {
    whichDeck(i);
    createDatabasePage();
    fillDataTable();
}

function createKeys() {
    keys = [];

    keys.push(basekeys[0]);

    for (let i = 0; i < 3; i++) {
        if (deckLanguages[i] == "") {
            continue;
        } else {
            keys.push(deckLanguages[i]);
        }
    }

    keys.push(basekeys[1]);
}
