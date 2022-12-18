/*
// Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

// To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

// the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

// Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

// Given a seat number, your task is to return the seat location in the following format:

// '2B' would return 'Front-Left'.

// If the number is over 60, or the letter is not valid, return 'No Seat!!'.

function planeSeat(a){
    let arr = a.split(``);
    let cluster = arr.splice(-1).join(``)
    let seat = arr.join(``);
    let placeToSit;
    let clusterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'K']

    if (seat <= 20) {
        placeToSit = `Front`
    } else if (seat <= 40) {
        placeToSit = `Middle`
    } else if (seat <= 60) {
        placeToSit = `Back`
    } else {
        placeToSit = `No seat`
    }

    if(clusterArray.indexOf(cluster) == -1 || placeToSit == `No seat`) {
        placeToSit = `No Seat!!`
    } else if (clusterArray.indexOf(cluster) <= 2) {
        placeToSit += `-Left`
    } else if (clusterArray.indexOf(cluster) <= 5) {
        placeToSit += `-Middle`
    } else if (clusterArray.indexOf(cluster) <= 8) {
        placeToSit += `-Right`
    } 
    
    return placeToSit;
}


console.log(planeSeat('2B'))
console.log(planeSeat('20B'))
console.log(planeSeat('58I'))
*/