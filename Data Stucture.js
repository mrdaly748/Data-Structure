// Sum of All Distinct Elements
function sumOfDistinctElements(set1, set2) {
    const combinedSet = new Set([...set1, ...set2]); // Combine both sets and remove duplicates
    return Array.from(combinedSet).reduce((sum, num) => sum + num, 0); // Sum all distinct elements
}

//Dot Product and Orthogonality
function dotProduct(v1, v2) {
    const ps = v1.reduce((sum, val, i) => sum + val * v2[i], 0);
    return { ps, orthogonal: ps === 0 };
}

//Delete node at a given position
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        this.head = new Node(value, this.head);
    }

    deleteAt(pos) {
        if (pos === 0) this.head = this.head?.next;
        else {
            let current = this.head, i = 0;
            while (current && i < pos - 1) {
                current = current.next;
                i++;
            }
            if (current?.next) current.next = current.next.next;
        }
    }
}    


//Reverse a string using Stack
class Stack {
    constructor() {
        this.stack = [];
    }
    push(value) { this.stack.push(value); }
    pop() { return this.stack.pop(); }
    isEmpty() { return this.stack.length === 0; }
}
function reverseString(str) {
        const stack = new Stack();
        str.split("").forEach(char => stack.push(char));
        return Array.from({ length: str.length }, () => stack.pop()).join("");
    }
       