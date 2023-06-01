let array = [["John", "Smith"], ["Edward", "Kynaston"]]

function addPerson(forename, surname) {
    let arrToInsert = [forename, surname];
    array.push(arrToInsert);
}

function replacePerson(index, forename, surname) {
    let arrToInsert = [forename, surname];
    array.splice(index, 1, arrToInsert);
}