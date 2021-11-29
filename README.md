# simple-crud-api

Simple CRUD api to store person's data in in-memory database.

1. API path `/person`:
    * **GET** `/person` or `/person/${personId}` should return all persons or person with corresponding `personId`
    * **POST** `/person` is used to create record about new person and store it in database
    * **PUT** `/person/${personId}` is used to update record about existing person
    * **DELETE** `/person/${personId}` is used to delete record about existing person from database
2. Persons are stored as `objects` that have following properties:
    * `id` — unique identifier (`uuid`) generated on server side
    * `name` — person's name (`string`, **required**)
    * `age` — person's age (`number`, **required**)
    * `hobbies` — person's hobbies (`array` of `strings` or empty `array`, **required**)

Value of the port on which application runs stored in `.env` file.

To run server in development mode, please, inter in console this command:

`npm run start:dev`

For the run server in production mode you can execute this command:

`npm run start:prod`

To run tests, please, write in console following command:

`npm run test`
