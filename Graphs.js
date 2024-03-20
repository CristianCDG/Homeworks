// Create and handle new graph of friends
// and cities.

// ✓ Every person should be a node, and
// every city too.

// ✓ Every person must have name and
// Age, and should be referenced to one
// city

// ✓ Every city must have a name.

// ✓ Print the list of people who lives in a
// particular City


class Person {
    constructor(name, age, city) {
      this.name = name;
      this.age = age;
      this.city = city;
    }
  }
  
  class City {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Graph {
    constructor() {
      this.nodes = [];
      this.adjList = {};
    }
  
    addNode(node) {
      this.nodes.push(node);
      this.adjList[node.name] = [];
    }
  
    addEdge(person, city) {
      this.adjList[person.name].push(city.name);
      this.adjList[city.name].push(person.name);
    }
  
    printResidents(cityName) {
      this.adjList[cityName].forEach(resident => {
        console.log(resident);
      });
    }
    
  }

  // Crear instancias de Person
let person1 = new Person("Alice", 30, "New York");
let person2 = new Person("Bob", 40, "Los Angeles");

// Crear instancias de City
let city1 = new City("New York");
let city2 = new City("Los Angeles");

// Crear una instancia de Graph
let graph = new Graph();

// Añadir personas y ciudades al grafo
graph.addNode(person1);
graph.addNode(person2);
graph.addNode(city1);
graph.addNode(city2);

// Añadir bordes entre personas y ciudades
graph.addEdge(person1, city1);
graph.addEdge(person2, city2);

graph.printResidents("New York");