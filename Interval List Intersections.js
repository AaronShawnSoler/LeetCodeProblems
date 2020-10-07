let A = [[4,6],[7,8],[10,17]]
let B = [[5,10]]

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let output = []
    
    let aIdx = 0
    let bIdx = 0
    
    while(aIdx < A.length && bIdx < B.length) { 
        // update pointers
        let aSet = A[aIdx]
        let bSet = B[bIdx]
        
        // create set
        let set = []

        // get higher first and lower second
        aSet[0] > bSet[0] ? set.push(aSet[0]):set.push(bSet[0])
        aSet[1] < bSet[1] ? set.push(aSet[1]):set.push(bSet[1])

        // check if set is valid
        let isValid = set[0] <= set[1]

        // if valid push to output array
        if(isValid) output.push(set)
        
        // check ahead if intersection exists else increase lower set
        if(B[bIdx + 1] && B[bIdx + 1][0] <= aSet[1]) {
            bIdx += 1
        } else if(A[aIdx + 1] && A[aIdx + 1][0] <= bSet[1]) {
            aIdx += 1
        } else {
            aSet[0] < bSet[0] ? aIdx += 1 : bIdx += 1
        }
    }
    
    return output
};

intervalIntersection(A, B)