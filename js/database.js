// Keys of flashcards

let basekeys = ["cardID", "action"];
/* let flashcardsURLs = [
    "https://my-json-server.typicode.com/bagotaj/flashcardapp/arabwords",
    "https://my-json-server.typicode.com/bagotaj/flashcardapp/englishwords",
];

function StartDatabase(whichdatabase) {
    startGetFlashcards(whichdatabase).then((data) => fillDataTable(data));
    Start();
}

function startGetFlashcards(url) {
    let fetchInit = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
    };

    return fetch(url, fetchInit).then(
        (response) => response.json(),
        (err) => alert("We have a little problem with the Database" + err)
    );
} */

// Fill table with localStorage data

function fillDataTable() {
    // Add new user row to the table

    let tBody = document.querySelector("tbody");
    tBody.innerHTML = "";

    for (let row of storedFlashCards) {
        let tr = createAnyElement("tr");

        for (let k of keys) {
            if (k == "action") {
                continue;
            } else {
                let td = createAnyElement("td");

                if (row[k] == undefined) {
                    row[k] = "";
                }

                let input = createAnyElement("input", {
                    class: "form-control",
                    name: k,
                    value: row[k],
                });

                if (k == "cardID") {
                    input.setAttribute("readonly", true);
                }

                td.appendChild(input);
                tr.appendChild(td);
            }
        }
        let buttonGroup = createBtnGroup();
        tr.appendChild(buttonGroup);
        tBody.appendChild(tr);
    }
}

function createBtnGroup() {
    let group = createAnyElement("div", { class: "btn btn-group" });
    let infoBtn = createAnyElement("button", {
        class: "btn btn-info",
        onclick: 'databaseModifier("modify", this)',
    });
    infoBtn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#ffffff"><path fill-rule="evenodd" d="M8 2.5a5.487 5.487 0 00-4.131 1.869l1.204 1.204A.25.25 0 014.896 6H1.25A.25.25 0 011 5.75V2.104a.25.25 0 01.427-.177l1.38 1.38A7.001 7.001 0 0114.95 7.16a.75.75 0 11-1.49.178A5.501 5.501 0 008 2.5zM1.705 8.005a.75.75 0 01.834.656 5.501 5.501 0 009.592 2.97l-1.204-1.204a.25.25 0 01.177-.427h3.646a.25.25 0 01.25.25v3.646a.25.25 0 01-.427.177l-1.38-1.38A7.001 7.001 0 011.05 8.84a.75.75 0 01.656-.834z"></path></svg>';

    let delBtn = createAnyElement("button", {
        class: "btn btn-danger",
        onclick: "",
    });
    delBtn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#ffffff"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path></svg>';

    group.appendChild(infoBtn);
    group.appendChild(delBtn);

    let td = createAnyElement("td");
    td.appendChild(group);

    return td;
}

function databaseModifier(whattodo, btn) {
    if (whattodo == "modify") {
        let tr = btn.parentElement.parentElement.parentElement;
        let data = getRowData(tr);
        let number = storedFlashCards.findIndex(
            (index) => index.cardID == data.cardID
        );

        for (let k in data) {
            storedFlashCards[number][k] = data[k];
        }

        storeCards();
    }
}

function getRowData(tr) {
    let inputs = tr.querySelectorAll("input.form-control");
    let data = {};

    for (let i = 0; i < inputs.length; i++) {
        data[inputs[i].name] = inputs[i].value;
    }

    return data;
}

// Sort Database elements

function sortDatabaseElements(whichpart) {
    storedFlashCards.sort((a, b) => (a[whichpart] > b[whichpart] ? 1 : -1));

    fillDataTable();
}
