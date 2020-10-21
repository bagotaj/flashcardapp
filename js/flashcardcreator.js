var button = document.querySelector("input");

/* button.addEventListener("click", function () {
    var str = document.flashcardform.flashcardWords.value;
    var cells = str.split("\n").map(function (el) {
        return el.split(" - ");
    });
    var headings = cells.shift();
    var out = cells.map(function (el) {
        var obj = {};
        for (var i = 0, l = el.length; i < l; i++) {
            obj[headings[i]] = isNaN(Number(el[i])) ? el[i] : +el[i];
            obj.ok = 0;
        }
        return obj;
    });
    console.log(JSON.stringify(out, null, 2));
}); */

storedFlashCards = [
    {
        cardID: 22,
        magyar: "megdöbbentő",
        angol: "staggering",
        "": "",
        ok: -5,
        repeat: 0,
        youtube: "",
    },
    {
        cardID: 8,
        magyar: "becslés, felbecsül",
        angol: "estimate",
        "": "",
        ok: -2,
        repeat: 4,
        youtube: "",
    },
    {
        cardID: 6,
        magyar: "reménytelen, kétségbeesett, elszánt",
        angol: "desperate",
        "": "",
        ok: -4,
        repeat: 10,
        youtube: "",
    },
    {
        cardID: 2,
        magyar: "felhalmozódás",
        angol: "accumulation",
        "": "",
        ok: 1,
        repeat: 2,
        youtube: "",
    },
    {
        cardID: 26,
        magyar: "fő támogató",
        angol: "main backer",
        "": "",
        youtube: "",
        ok: 1,
        repeat: 0,
    },
    {
        cardID: 24,
        magyar: "támogat",
        angol: "subsidize, support",
        "": "",
        youtube: "",
        ok: 2,
        repeat: 8,
    },
    {
        cardID: 28,
        magyar: "megjelenés, külső megjelenés",
        angol: "appearance",
        "": "",
        youtube: "",
        ok: 1,
        repeat: 0,
    },
    {
        cardID: "23",
        magyar: "közlemény",
        angol: "announcement",
        "": "",
        youtube: "",
        ok: 3,
        repeat: 10,
    },
    {
        cardID: 27,
        magyar: "kiemel, hangsúlyoz, hangsúlyt helyez",
        angol: "emphasize",
        "": "",
        youtube: "",
        ok: 1,
        repeat: 6,
    },
    {
        cardID: 13,
        magyar: "remete",
        angol: "hermit",
        "": "",
        ok: 1,
        repeat: 8,
        youtube: "",
    },
    {
        cardID: 20,
        magyar: "kikövez, burkol (utat)",
        angol: "pave",
        "": "",
        ok: 3,
        repeat: 4,
        youtube: "",
    },
    {
        cardID: 12,
        magyar: "kézi, kézben hordozható",
        angol: "handheld",
        "": "",
        ok: 3,
        repeat: 6,
        youtube: "",
    },
    {
        cardID: 7,
        magyar: "szétválaszt, szakít, szétrombol",
        angol: "disrupt",
        "": "",
        ok: 4,
        repeat: 12,
        youtube: "",
    },
    {
        cardID: 9,
        magyar: "végül is",
        angol: "eventually",
        "": "",
        ok: 5,
        repeat: 30,
        youtube: "",
    },
    {
        cardID: 11,
        magyar: "bél, belek",
        angol: "gut",
        "": "",
        ok: 5,
        repeat: 30,
        youtube: "",
    },
    {
        cardID: 5,
        magyar: "folyamatos",
        angol: "contiguous",
        "": "",
        ok: 4,
        repeat: 12,
        youtube: "",
    },
    {
        cardID: 1,
        magyar: "elhagyatott",
        angol: "abandoned",
        "": "",
        ok: 5,
        repeat: 28,
        youtube: "",
    },
    {
        cardID: 25,
        magyar: "tömeg, tömegel, felhalmoz",
        angol: "bulk",
        "": "",
        youtube: "",
        ok: 7,
        repeat: 30,
    },
    {
        cardID: 18,
        magyar: "befűzni",
        angol: "slip it in",
        "": "",
        ok: 6,
        repeat: 30,
        youtube: "",
    },
    {
        cardID: 21,
        magyar: "ömlik, zuhog",
        angol: "pour",
        "": "",
        ok: 8,
        repeat: 30,
        youtube: "",
    },
    {
        cardID: 3,
        magyar: "elfog, befog",
        angol: "capture",
        "": "",
        ok: 7,
        repeat: 30,
        youtube: "",
    },
    {
        cardID: 16,
        magyar: "szenvedélyes",
        angol: "passionate",
        "": "",
        ok: 8,
        repeat: 30,
        youtube: "",
    },
    {
        cardID: 15,
        magyar: "megbecsült, tisztelt",
        angol: "honoured",
        "": "",
        ok: 10,
        repeat: 28,
        youtube: "",
    },
    {
        cardID: 14,
        magyar: "becsület, tisztesség, megbecsül, tisztel",
        angol: "honour",
        "": "",
        ok: 10,
        repeat: 30,
        youtube: "",
    },
    {
        cardID: 17,
        magyar: "beállít, felszerel, létrehoz",
        angol: "set up",
        "": "",
        ok: 12,
        repeat: 28,
        youtube: "",
    },
    {
        cardID: 4,
        magyar: "világosság, tisztaság",
        angol: "clarity",
        "": "",
        ok: 14,
        repeat: 28,
        youtube: "",
    },
    {
        cardID: 19,
        magyar: "kézművesség, kézműveskedés",
        angol: "craft",
        "": "",
        ok: 15,
        repeat: 28,
        youtube: "",
    },
    {
        cardID: 10,
        magyar: "fáradtság",
        angol: "fatigue",
        "": "",
        ok: 18,
        repeat: 28,
        youtube: "",
    },
];
let textArea = document.querySelector("textarea");

button.addEventListener("click", function () {
    cardsToSaveArray = storedFlashCards.map(function (el) {
        arr = [];
        for (let k in el) {
            if (
                k == "cardID" ||
                k == "ok" ||
                k == "repeat" ||
                k == "youtube" ||
                k == "" ||
                k == "empty"
            ) {
                continue;
            } else {
                arr.push(el[k]);
            }
        }
        return arr;
    });

    cardsToSaveArray2 = cardsToSaveArray.map(function (el) {
        if (el.length == 2) {
            el.splice(1, 0, "-");
        } else {
            el.splice(1, 0, "-");
            el.splice(3, 0, "-");
        }
        el.push("\n");
        return el;
    });

    cardsToSaveArrayToString = cardsToSaveArray2.map(function (el) {
        el = String(el).replace(/,-,/g, " - ");
        el = el.replace(/,\n/, "\n");
        return el;
    });

    cardsToSaveToString = String(cardsToSaveArrayToString);
    cardsToSaveToString = cardsToSaveToString.replace(/\n,/g, "\n");

    textArea.value = cardsToSaveToString;
});
