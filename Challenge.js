/** Challenge
 * 
 * Create and handle new list of TODOs.
 * Every task must have its title, description, and points to next TODO.
 * Fill the list with some data and print all TODOs.
 * 
 */

class Task {
    constructor(title, description, points){
        this.title = title;
        this.description = description;
        this.points = points;
    }

    printTask(){
        console.log(`Title: ${this.title}`);
        console.log(`Description: ${this.description}`);
        console.log(`Points: ${this.points}`);
        console.log('----------------------------');
    }
}

class TODOs {
    constructor(){
        this.tasks = [];
    }

    append(task){
        this.tasks.push(task);
    }

    printAllTasks(){
        this.tasks.forEach(task => task.printTask());
    }
}

// Fill the list with some data
// Fill the list with some data
const todos = new TODOs();
todos.append(new Task('Task 1', 'Description 1', 1));
todos.append(new Task('Task 2', 'Description 2', 2));
todos.append(new Task('Task 3', 'Description 3', 3));
todos.append(new Task('Task 4', 'Description 4', 4));
todos.append(new Task('Task 5', 'Description 5', 5));

// Print all TODOs
todos.printAllTasks();