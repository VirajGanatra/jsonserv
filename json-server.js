// json-server.js
const jsonServer = require('json-server');
const bodyParser = require("body-parser");
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const request = require('request');
const port = 3000;
router.db._.id = 'Account';

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));


server.post('/account', function (req, res) {
    let url = "http://" + req.hostname+ `:${port}/accounts/` + req.body.accountNumber
    console.log(url)
    let status = 200
    request({url: url, json: true},(err, response, body) => {
        if (response.statusCode === 404){
            status = 404
            body = {
                Action: "ACCT_INQUIRY",
                response_code: "999",
                response_status: false,
                response_message: "Account not found"
            }
        } else {
            body = {
                Action: "ACCT_INQUIRY",
                response_code: "000",
                response_status: true,
                response_message: "FINANCIAL TRANSACTION HAS BEEN APPROVED",
                Data: body
            }
        }
        res.status(status);
        res.send(body);
    })
})

server.use(middlewares)
server.use(router)

server.listen(port, () => console.log(`JSON Server is running on port ${port} ...`))