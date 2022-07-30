//linked_list - connected with another item from one item next by next

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head){
        this.head = head;
    }
    add(value){
        const newNode = new Node(value);
        //this.head.next = newNode;
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }
};

const head = new Node(1500);
const mBondhon = new LinkedList(head);
mBondhon.add(25)
mBondhon.add(30)
mBondhon.add(16)

console.log(JSON.stringify(mBondhon));

//$ node linked_list
//{"head":{"value":1500,"next":{"value":25,"next":{"value":30,"next":{"value":16,"next":null}}}}}