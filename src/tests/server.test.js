const { describe, test, expect } = require('@jest/globals');
const request = require('supertest');
const app = require('../server');

const { error } = require('../utils/simple-dotenv').config();

if (error) {
  //throw error
}

const mockPerson = {
  "name": "Joe",
  "age": 37,
  "hobbies": ["programming"]
}

describe('rest api e2e tests', () => {

  test('get', async () => await request(app).get('/person').set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
  );

  test('post', async () => await request(app).post('/person').send({
    "name": "Joe",
    "age": 37,
    "hobbies": ["programming"]
  }).set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(201)
  );

  test('put', async () => {

    const postResponse = await request(app).post('/person').send(mockPerson).set('Accept', 'application/json');

    const newPerson = { ...postResponse.body };
    const updatedPerson = { ...postResponse.body, age: 35 }

    const putResonse = await request(app).put(`/person/${newPerson.id}`).send(updatedPerson)
      .expect('Content-Type', /json/)
      .expect(200);

    const returnedPerson = { ...putResonse.body }

    expect(updatedPerson).toEqual(returnedPerson);

  })

  test('delete', async () => {

    const response = await request(app).post('/person').send(mockPerson).set('Accept', 'application/json');

    const person = { ...response.body };

    await request(app).delete(`/person/${person.id}`)
      .expect('Content-Type', /json/)
      .expect(204);
  });

})
