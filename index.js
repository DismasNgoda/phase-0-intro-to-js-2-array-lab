// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph){
    cats.push("Ralph");
}
function destructivelyPrependCat(Bob){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    cats.push("Broom");
    return cats;
}
function appendCat(name){
    const catsCopy = [...cats, name];
    return catsCopy;
}
function prependCat(name){
    const catsCopy = [name, ...cats];
    return catsCopy;
}
function removeLastCat(){
    const lastCat = cats.slice(0, cats.length -1);
    return lastCat;
}
function removeFirstCat(){
    const firstCat = cats.slice(1);
    return firstCat;
}