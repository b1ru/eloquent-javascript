let flatten = function(arr) {
	return arr.reduce((a,b) => a.concat(b))
}

flattened = flatten([[1,2],[3],[4,5,6]])
console.log(flattened)