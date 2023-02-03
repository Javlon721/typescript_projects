"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLocaleLowerCase() >
            this.data[rightIndex].toLocaleLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const arrOfCharacters = this.data.split("");
        const leftHand = arrOfCharacters[leftIndex];
        arrOfCharacters[leftIndex] = arrOfCharacters[rightIndex];
        arrOfCharacters[rightIndex] = leftHand;
        this.data = arrOfCharacters.join("");
    }
}
exports.CharactersCollection = CharactersCollection;
