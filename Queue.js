// Create and handle new
// queue of people in one ATM.
// ✓Every person in the ATM
// must have its name and
// arrived time.
// ✓Fill the queue with some
// examples of data

class ATMUser{
    constructor(name, arrivedTime){
            this.name = name;
            this.arrivedTime = arrivedTime;
        }
}

class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(person){
        this.queue.push(person);
        return this.queue;
    }

    dequeue(){
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    print(){
        return this.queue;
    }
}

const queue = new Queue();

queue.enqueue(new ATMUser('John', 10)); // John arrives at time 10
queue.enqueue(new ATMUser('Jane', 20)); // Jane arrives at time 20
queue.enqueue(new ATMUser('Alice', 30)); // Alice arrives at time 30

console.log('Some ATM Users have been enqueued');
console.log('');

//Print all current information in the queue
console.log(queue.print());
console.log('');

//Dequeue last person from queue
console.log('Last user was unqueued, showing their information: ');
console.log(queue.dequeue());

console.log('');
console.log('Showing new current ATM users:');
console.log(queue.print());

//Show the info from the first person in the queue

console.log('Showing information from the first ATm user in the queue: ');
console.log(queue.peek());

//Verify if queue is empty

console.log('');
console.log('Checking if queue is empty: ');
console.log(queue.isEmpty());

