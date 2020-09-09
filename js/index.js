function startApp() {
    getFlashcardsFromLocalStorage();

    createChooseADeckList("decklist", "choosedeck");
    createChooseADeckList("cardlist", "addflashcard");
    createChooseADeckList("databaselist", "database");
}

let siteBody = document.querySelector("#siteBody");

function createMainPage() {
    let div = createAnyElement("div", {
        class: "container-fluid flashcard-margin",
    });
    let divRow = createAnyElement("div", {
        class: "row",
    });

    let colLeft = createAnyElement("div", {
        class: "col-12 col-md-3 themed-grid-col",
    });
    divRow.appendChild(colLeft);

    let colCenterCols = createAlerts();
    divRow.appendChild(colCenterCols);

    let colRight = createAnyElement("div", {
        class: "col-12 col-md-3 themed-grid-col",
    });
    divRow.appendChild(colRight);

    div.appendChild(divRow);
    siteBody.appendChild(div);
}

function createAlerts() {
    let colCenter = createAnyElement("div", {
        class: "col-12 col-md-6 themed-grid-col",
    });

    for (let i = 0; i < 3; i++) {
        let alert = createAnyElement("div", {
            class: "alert alert-primary alert-dismissible fade show",
            role: "alert",
        });
        alert.innerHTML = english[`alert${i}`];
        let button = createAnyElement("button", {
            type: "button",
            class: "close",
            "data-dismiss": "alert",
            "aria-label": "Close",
        });
        let span = createAnyElement("span", {
            "aria-hidden": "true",
        });
        span.innerHTML = "&times;";

        button.appendChild(span);
        alert.appendChild(button);

        let divRowColCenter = createAnyElement("div", {
            class: "row",
        });

        divRowColCenter.appendChild(alert);
        colCenter.appendChild(divRowColCenter);
    }

    return colCenter;
}

createMainPage();
