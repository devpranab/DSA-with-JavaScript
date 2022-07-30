//dictionary - hash table

class Dictionary {
    constructor(){
        this.dictionary = {};
    }
    add(key, value){
        this.dictionary[key] = value;
    }
    get(key){
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();
phoneBook.add("Pranav", "4564576475");
phoneBook.add("Parves", "4564976455");
phoneBook.add("Mamun", "4564576465");
console.log(phoneBook.dictionary);

//get using key
const parves = phoneBook.get("Parves");
console.log(parves);