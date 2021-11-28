const http = require('http');
const { getPersons, getPerson, createPerson, removePerson, updatePerson } = require('./controllers/persons-controller');
const uuidValidation = require('./utils/uuid-validation');
const write400 = require('./utils/write-400');
const write404 = require('./utils/write-404');

const { error } = require('./utils/simple-dotenv').config();

if (error) {
    throw error
}

const server = http.createServer((req, res) => {
    // get all persons
    if (req.url === '/person' && req.method === 'GET') {
        getPersons(req, res);
    }
    // get person by id
    else if (req.url.match(/\/person\/[^\s]+$/) && req.method === 'GET') {
        const id = req.url.split('/')[2];

        if(uuidValidation(id)) {
            getPerson(req, res, id);
        } else {
            write400(res);
        }
    }
    // create person
    else if (req.url === '/person' && req.method === 'POST') {
        createPerson(req, res);
    }
    // update person
    else if (req.url.match(/\/person\/[^\s]+$/) && req.method === 'PUT') {
        const id = req.url.split('/')[2];

        if(uuidValidation(id)) {
            updatePerson(req, res, id);
        } else {
            write400(res);
        }
    }
    //remove person
    else if (req.url.match(/\/person\/[^\s]+$/) && req.method === 'DELETE') {
        const id = req.url.split('/')[2];
        
        if(uuidValidation(id)) {
            removePerson(req, res, id);
        } else {
            write400(res);
        }
    }

    else {
        write404(res);
    }
})

module.exports = server;