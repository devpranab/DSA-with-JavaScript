//queue
//queue - follow first in first out(fifo)

//apply queue DS
class Queue {
    constructor(){
        this.queue = [];
    }
    enqueue(item){
        this.queue.push(item);
    }
    dequeue(){
        if(this.queue.length){
            return this.queue.shift();
        }
    }
}

const country = new Queue();
country.enqueue("USA")
country.enqueue("Russia")
country.enqueue("India")
console.log(country.queue);

const getCountry = country.dequeue();
console.log(getCountry);

console.log(country.queue);