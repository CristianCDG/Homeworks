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
        this.cities = {};
        this.persons = {};
    }

    addCity(name) {
        let city = new City(name);
        this.cities[name] = city;
    }

    addPerson(name, age, cityName) {
        let city = this.cities[cityName];
        if (city === undefined) {
            throw new Error(`City ${cityName} does not exist`);
        }
        let person = new Person(name, age, city);
        this.persons[name] = person;
    }

    getPeopleInCity(cityName) {
        let peopleInCity = [];
        for (let personName in this.persons) {
            if (this.persons[personName].city.name === cityName) {
                peopleInCity.push(personName);
            }
        }
        return peopleInCity;
    }
}

let graph = new Graph();

// Añadir ciudades
graph.addCity("Madrid");
graph.addCity("Barcelona");

// Añadir personas
graph.addPerson("Juan", 30, "Madrid");
graph.addPerson("Ana", 25, "Madrid");
graph.addPerson("Carlos", 35, "Barcelona");

// Obtener las personas en una ciudad
console.log(graph.getPeopleInCity("Madrid")); // Devuelve: ["Juan", "Ana"]