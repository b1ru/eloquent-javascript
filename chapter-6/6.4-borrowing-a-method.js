let map = {hasOwnProperty: "mew", x:"XD"}
console.log(map.hasOwnProperty);
console.log(Object.prototype.hasOwnProperty.call(map, 'x'));
