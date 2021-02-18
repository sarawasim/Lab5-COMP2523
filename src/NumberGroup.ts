import { ISortable } from './ISortable';

export class NumberGroup implements ISortable {
    constructor(data: number[]) {
        this.data = data;
    }

    data: number[];

    get length(): number {
        return this.data.length
    };

    compare(leftPos: number, rightPos: number): boolean {
        return this.data[leftPos] > this.data[rightPos]
    }
    
    swap(leftPos: number, rightPos: number): void {
        let tempLeft = this.data[leftPos];
        this.data[leftPos] = this.data[rightPos];
        this.data[rightPos] = tempLeft;
        }
    
    
}

