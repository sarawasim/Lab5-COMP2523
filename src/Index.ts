import { CharacterGroup } from "./CharacterGroup";
import { NumberGroup } from "./NumberGroup";
import { SortUtil } from "./SortUtil";
import { LinkedListGroup } from "./LinkedListGroup";

const numberGroup = new NumberGroup([30, 3, -15, 0]);
const sorter1 = new SortUtil(numberGroup);
sorter1.sort();
console.log(numberGroup.data)
console.log("--------------------------------------")


const characterGroup = new CharacterGroup("XaeybAC");
const sorter2 = new SortUtil(characterGroup);
sorter2.sort();
console.log(characterGroup.data)
console.log("--------------------------------------")

const linkedListGroup = new LinkedListGroup();
linkedListGroup.add(520);
linkedListGroup.add(-10);
linkedListGroup.add(-7);
linkedListGroup.add(4);
linkedListGroup.add(50);
linkedListGroup.add(1);

const sorter3 = new SortUtil(linkedListGroup);
sorter3.sort();
linkedListGroup.print();
