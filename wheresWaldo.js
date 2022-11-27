/*
// We've spotted Waldo a couple of times in the past. Below is what we found out. Note that he's been in much more crowded places lately.

// #1 Waldo at the beach
// "             "          Air
// "         w   "           Air with a bird
// "   w         "           Air with a bird
// "~~~~~~~~~~~~~"           Sea
// ".~..~~.~~~..~"           Waves on beach
// "...P......P.."           Beach with some people
// "......P..P..."           Beach with some people
// "..PW........."           Beach with Waldo and presumably a friend next to him

// Unredacted report: Waldo can be found at [7, 3], wearing his usual outfit

// #2 Waldo visiting the Great Pyramid
// "                              "          Air
// "                              "           Air
// "            _                 "           Top of pyramid
// "          _____               "           Layer of pyramid
// "        _________             "           Layer of pyramid
// "  B  _______________   G   GG "           Ground layer of pyramid with several people, including Waldo

// Unredacted report: Waldo can be found at [5, 2], wearing special clothes protecting him from the sun

// Hints
// - he isn't always wearing his usual clothes

// - why is there more than one bird in the first example ...


function findWaldo(crowd) {
    let dict = {}
    for (let x of crowd) {
        for (let l of x) {
            if (dict[l] !== undefined) {
                // console.log(dict[l])
                dict[l]++
            }
            else {
                dict[l] = 1
            }
        }
    }
    let waldoLetter = [...Object.keys(dict)].find(x => dict[x] === 1)
    for(let i = 0; i < crowd.length; i++) {
        for (let j = 0; j < crowd[i].length; j++) {
            if (crowd[i][j] == waldoLetter) {
                return [i, j]
            }
        }
    }
}

console.log(findWaldo([
    "             ",
    "         w   ",
    "   w         ",
    "~~~~~~~~~~~~~",
    ".~..~~.~~~..~",
    "...P......P..",
    "......P..P...",
    "..PW.........",
]))
*/