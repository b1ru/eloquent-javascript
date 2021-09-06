class GroupIterator {
	constructor(group) {
		this.pos = 0;
		this.group = group;
	}

	next() {
		if (this.pos == this.group.length) return {done: true};
		return {value: this.group[this.pos++], done: false}
	}
}
class Group {
	constructor() {
		this.group = [];
	}

	add(item) {
		if (!(this.group.includes(item)))
			this.group.push(item);	
	}

	delete(item) {
		if (this.group.includes(item)) {
			this.group.splice(this.group.indexOf(item));
		}
	}

	has(item) {
		return this.group.includes(item);
	}

	toString() {
		return String(this.group);
	}

	equals(g) {
		if (g.group.length != this.group.length) return false;
		for (let i=0; i<this.group.length; i++){
			if (!g.group.includes(this.group[i])) return false;
		}
		return true;
	}

	static from(g) {
		let ng = new Group();
		for (let item of g){
			ng.add(item);
		}
		return ng;
	}

	[Symbol.iterator]() {
		return new GroupIterator(this.group);
	}
}

x = new Group();
x.add(5);
x.add("hey");
x.add("world :)"); x.add(666);
for (let i of x){
	console.log(i);
}
