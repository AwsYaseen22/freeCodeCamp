// Problem 1: Multiples of 3 and 5
function multiplesOf3and5 ( number ) {
    let res = 0
    for ( let i = 0; i < number; i++ ) {
        if ( i % 3 === 0 ) {
            res += i
        } else if ( i % 5 === 0 ) {
            res += i
        }
    }
    return res
}

// console.log( multiplesOf3and5( 1000 ) )

// ############################################################
