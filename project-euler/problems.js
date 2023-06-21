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

// Problem 2: Even Fibonacci Numbers

function fiboEvenSum ( n ) {
	let res = [1, 2]
	let sum = 2
	let num = 0
	while ( num < n ) {
		num = res[res.length - 2] + res[res.length - 1]
		if ( num % 2 === 0 ) {
			sum += num
		}
		res.push( num )
	}
	return sum
}

// console.log( fiboEvenSum( 1000 ) );

// ############################################################
