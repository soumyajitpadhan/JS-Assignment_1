let greetUser = (name) => {
    if (name === undefined) {
        console.log(`Hello, Guest!`);
    }
    else {
        console.log(`Hello, ${name}!`);
    }
}

let name = "Harry";
greetUser(name);
