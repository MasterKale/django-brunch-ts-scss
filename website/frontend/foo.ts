export class Foo {
	bar: string;
	constructor(bar: string) {
		this.bar = bar;
	}

	greet() {
		console.log(this.bar);
	}
}
