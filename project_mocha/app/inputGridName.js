let _parentIds = [
    "Outside Processor",
    "Another One",
    "CHECK THIS"
]

 export function getInputGridName(_parentId) {
    if (_parentId.toUpperCase() == "OUTSIDE PROCESSOR") {
        return "InputOPGrid";
    }
    if (_parentId.toUpperCase() == "CHECK THIS") {
        return "Some value";
    }
    return "InputGrid";
}

console.log(getInputGridName(_parentIds[0]));
console.log(getInputGridName(_parentIds[1]));
console.log(getInputGridName(_parentIds[2]));

