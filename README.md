# jsonserv
json-server simulating account lookup from CBS/CMS

## Requirements
- [Node.js](https://nodejs.org/en/download)
- [json-server](https://www.npmjs.com/package/json-server) (`npm i json-server`)
- [faker](https://www.npmjs.com/package/@faker-js/faker) (`npm i @faker-js/faker`)
- [requests](https://www.npmjs.com/package/requests) (`npm i requests`)
- [body-parser](https://www.npmjs.com/package/body-parser) (`npm i body-parser`)
- POSTMAN (or alternative tool)

## Usage
Clone the repository into a directory of choice. Navigate to this directory, and then run `node json-server.js`. Now, http://localhost:3000 is the homepage of this instance of json-server. 

To search for an account, simply run `POST http://localhost:3000/account` in POSTMAN, with the request body containing a JSON with the accountNumber (eg. `{"accountNumber": "0100000009999"}`). A response will be returned indicating if this is successful.
