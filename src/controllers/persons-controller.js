const { findAll, findById, create, update, remove } = require('../state/persons-state')
const getPostBody = require('../utils/get-post-body');

const write200 = require('../utils/write-200');
const write201 = require('../utils/write-201');
const write204 = require('../utils/write-204');
const write404 = require('../utils/write-404');

async function getPersons(req, res) {
    try {
        const persons = await findAll();
        write200(res, persons)
    } catch (error) {
        console.log(error)
    }
}

async function getPerson(req, res, id) {
    try {
        const person = await findById(id);

        if (!person) {
            write404(res)
        }

        else {
            write200(res, person)
        }

    } catch (error) {
        console.log(error)
    }
}

async function createPerson(req, res) {
    try {
        const body = await getPostBody(req);
        const person = await create(JSON.parse(body));

        write201(res, person);

    } catch (error) {
        console.log(error)
    }

}

async function removePerson(req, res, id) {
    try {
        const person = await findById(id);

        if (!person) {
            write404(res)
        }

        else {
            await remove(id);
            write204(res, id)
        }
    } catch (error) {
        console.log(error)
    }
}

async function updatePerson(req, res, id) {
    try {
        const person = await findById(id);

        if (!person) {
            write404(res);
        }

        else {
            const body = await getPostBody(req);
            const newPersonData = JSON.parse(body);

            const updatedPerson = await update(id, newPersonData);

            write200(res, updatedPerson)
        }


    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getPersons,
    getPerson,
    createPerson,
    updatePerson,
    removePerson
}