var button = document.querySelector("input");

button.addEventListener("click", function () {
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
});
