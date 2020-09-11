function usedLanguage(saveoption) {
    let selector = document.querySelector("#usedLanguage");

    if (saveoption == choosedeck) {
        selector.setAttribute("class", "blinking");
        selector.innerHTML =
            keyNames[usedDeck] + "<span> <- Click to Save</span>";
        selector.addEventListener("click", storeCards);
    } else {
        selector.classList.remove("blinking");
        selector.innerHTML = keyNames[usedDeck];
    }
}
