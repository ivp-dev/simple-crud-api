const { v4: uuid } = require('uuid');

let persons = []

function findAll() {
    return new Promise((resolve) => {
        resolve(persons);
    });
}

function findById(id) {
    return new Promise((resolve) => {
        const person = persons.find(p => p.id === id)
        resolve(person);
    });
}

function create(person) {
    return new Promise((resolve) => {
        const newPerson = { ...person, id: uuid() }
        persons = [...persons, newPerson];
        resolve(newPerson);
    })
}

function remove(id) {
    return new Promise((resolve) => {
        const index = persons.findIndex(p => p.id === id);
        persons = [...persons.slice(0, index), ...persons.slice(index + 1, persons.length)];
        resolve();
    })
}

function update(id, updatePersonData) {
    return new Promise((resolve) => {
        const index = persons.findIndex(p => p.id === id);
        const targetPerson = persons[index];
        const updatedPerson = { ...targetPerson, ...updatePersonData };

        persons = [...persons.slice(0, index), updatedPerson, ...persons.slice(index + 1, persons.length)];

        resolve(updatedPerson);
    });
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}