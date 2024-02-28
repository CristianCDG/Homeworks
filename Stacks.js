// Create and handle new
// stack of books.

// ✓Every book must have its
// Name, ISBN, Author and
// Editorial

// ✓Fill the stack with some
// examples of data

class Book{
    constructor(name, isbn, author, editorial){
        this.Name = name;
        this.ISBN = isbn;
        this.Author = author;
        this.Editorial = editorial;
}
};

class BookStack{
    constructor(){
        this.stack = [];
    }
    
    // Push a new book to the top of the stack
    push (book) {
        if(!(book instanceof Book)) throw "Object is not a Book";
        return this.stack.push(book);
    };

    // Remove last element from the top of the stack
    pop () {
        return this.stack.pop();
    };

    // Return the top element of the stack without removing it
    peek() {
        return this.stack[this.stack.length -1];
    };

    // Checks whether the stack is empty or not
    isEmpty() {
        return this.stack.length ==  0;
    };

    // Print all elements in the stack
    printAll(){
        for (let i=0;i<this.stack.length;i++){
            console.log(`Book ${i+ ' '  + this.stack[i].Name}`);
        }
    };

}

let bookStack = new BookStack();

// Testing Push method 
let book1 = new Book("Harry Potter and the Philosopher's Stone","J.K. Rowling",1997);
bookStack.push(book1);

// Testing Pop method
console.log("\n\nAfter pushing one book, when we try to pop:");
console.log(bookStack.pop());

// Testing Peek method
console.log("\n\nWhen we try to peek:")
console.log(bookStack.peek())

// Testing Is Empty method
console.log("\n\nIs the Stack Empty? : ")
console.log(bookStack.isEmpty())

// Adding more books to the stack
let book2 = new Book("The Catcher in the Rye","J.D. Salinger",1951)
let book3 = new Book("Star wars","George Lucas",1976);
bookStack.push(book2);
bookStack.push(book3);

// Printing all elements in the stack
console.log("\nPrinting All Elements In The Stack:\n")
bookStack.printAll();