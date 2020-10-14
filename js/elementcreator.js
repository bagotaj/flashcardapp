function createAnyElement(name, attributes) {
    let element = document.createElement(name);

    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    }
    return element;
}
