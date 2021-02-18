import { ISortable } from './ISortable';

export class CharacterGroup implements ISortable {
    constructor(data: string) {
        this.data = data;
    }

    data: string;

    get length(): number {
        return this.data.split('').length
    }

    compare(leftPos: number, rightPos: number): boolean {
       return this.data[leftPos].toLowerCase() > this.data[rightPos].toLowerCase() 
            
    }

    swap(leftPos: number, rightPos: number): void {
        const strArray = this.data.split('')
        let tempLeft = strArray[leftPos];
        strArray[leftPos] = strArray[rightPos];
        strArray[rightPos] = tempLeft;
        this.data = strArray.join('')
    }

}