import { Sorter } from "./Sorter";
export class CharactersCollection extends Sorter {
	constructor(public data: string) {
		super();
	}

	get length(): number {
		return this.data.length;
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		return (
			this.data[leftIndex].toLocaleLowerCase() >
			this.data[rightIndex].toLocaleLowerCase()
		);
	}

	swap(leftIndex: number, rightIndex: number): void {
		const arrOfCharacters = this.data.split("");

		const leftHand = arrOfCharacters[leftIndex];
		arrOfCharacters[leftIndex] = arrOfCharacters[rightIndex];
		arrOfCharacters[rightIndex] = leftHand;
		this.data = arrOfCharacters.join("");
	}
}
