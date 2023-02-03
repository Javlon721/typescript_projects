export class Attributes<T> {
	constructor(private data: T) {}

	get = <K extends keyof T>(key: K): T[K] => {
		return this.data[key];
	};

	set(upDate: T): void {
		Object.assign(this.data as Object, upDate);
	}
	getAllData(): T {
		return this.data;
	}
}
