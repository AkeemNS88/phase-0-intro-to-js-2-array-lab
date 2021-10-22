const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph")
};

function destructivelyPrependCat() {
    cats.unshift("Bob")
};

function destructivelyRemoveLastCat() {
    cats.pop()
};

function destructivelyRemoveFirstCat() {
    cats.shift()
};

function appendCat(name) {
    var newArray = [...cats];
    newArray.push(name);
    return newArray;
};
appendName("Broom");

function prependCat(name) {
    var newAgainArray = [...cats];
    newAgainArray.unshift(name);
    return newAgainArray;
};
prependName("Arnold");

function removeLastCat(name) {
    var newArray = [...cats];
    newArray.pop(name);
    return newArray;
};

function removeFirstCat(name) {
    var newArray = [...cats];
    newArray.shift(name);
    return newArray;
};