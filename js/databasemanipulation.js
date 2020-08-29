function storeCards() {
    localStorage.setItem(keyNames[usedDeck], JSON.stringify(storedFlashCards));
}

function getCards(index) {
    storedFlashCards = localStorage.getItem(keyNames[index]);
    storedFlashCards = storedFlashCards ? JSON.parse(storedFlashCards) : [];
}
