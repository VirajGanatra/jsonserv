module.exports = function(){
    const { faker } = require('@faker-js/faker');
    var lodash = require("lodash")
    return {
        accounts: lodash.times(100, function(){
            return {
                Account: faker.finance.accountNumber(13),
                AcctName: faker.person.fullName(),
                SchemeCode: "GASTA",
                GLCode: 20100,
                SolID: "MAIN",
                CIFNo: "PBU433369",
                Amount: faker.finance.amount(1000, 1000000, 2),
                ActiveStatus: "A",
                LienAmount: 0,
                CloseFlag: "N",
                Phone: faker.phone.number('07########'),
                Email: faker.internet.email(),
                Currency: "KSH",
                TransId: faker.string.alphanumeric({length: 15, casing: 'upper'}),
                SigningMandate: "AGENT",
                ImageData: faker.image.url()
            }
        })
    }
}