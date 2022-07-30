//Algorithm
//linear_search - algorithm

const friends = ["48", "44", "55", 65];

for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    if(element == 44){
        return i;
    }
}

//advance way of it's. - Binary search