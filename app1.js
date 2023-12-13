let todo = [];

let req = prompt("Enter your Request : ");
while (true) {
    if (req == "quit") {
        console.log("quitting app");
        break;
    }
    if (req == "list") {
        console.log("________");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("_______");
    }
    else if (req == "add") {
        let task = prompt("Please enter your task to add : ");
        todo.push(task);
        console.log("task added");
    }
    else if (req == "delete") {
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");
    }
    else{
        console.log("wrong request");
    }

}