function usedLanguage() {
    let selector = document.querySelector("#usedLanguage");

    selector.innerHTML = keyNames[usedDeck];
}
