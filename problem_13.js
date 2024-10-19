let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };

let temp = "";

for (let key in book) {
    temp += `${key}: ${book[key]}` + " ";
}

console.log(temp);