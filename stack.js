//stack
//stack - follow last in first out(lifo)

/*
const friends = [];
friends.push(35)
friends.push(45)
friends.push(50)
console.log(friends);

const getOne = friends.pop();
console.log(getOne);

console.log(friends);
*/

//apply stack DS
class Stack {
    constructor(){
        this.stack = [];
    }
    add(item){
        this.stack.push(item);
    }
    remove(){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
}

const guest = new Stack();
guest.add("Pranav")
guest.add("Sarkar")
guest.add("Roy")
console.log(guest.stack);

const speaker = guest.remove();
console.log(speaker);

console.log(guest.stack);