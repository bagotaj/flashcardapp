function getFlashcardsFromLocalStorage() {
    flashCards = localStorage.getItem("Flashcards");
    flashCards = JSON.parse(flashCards);
}

function setFlashcardstoLocalStorage() {
    localStorage.setItem("Flashcards", JSON.stringify(flashCards));
}

function storeCards() {
    localStorage.setItem(keyNames[usedDeck], JSON.stringify(storedFlashCards));
}

function getCards(index) {
    storedFlashCards = localStorage.getItem(keyNames[index]);
    storedFlashCards = storedFlashCards ? JSON.parse(storedFlashCards) : [];
}
