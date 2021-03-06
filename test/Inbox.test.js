const assert = require('assert');
const ganache = require('ganache-cli');//local etherum network,just for development purpose
const Web3 = require('web3');//class
const web3 = new Web3(ganache.provider());//instance
const { interface, bytecode } = require('../compile'); 

let accounts;
let inbox;
beforeEach(async () => {
    //get a list of all accounts
    accounts = await web3.eth.getAccounts();

    //use one of those account to deploy
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments:['initial state']})
    .send({from: accounts[0], gas:'1000000' });
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });
});



/* testing sample
class Car {
    park() {
        return 'stopped';
    } 
    drive() {
        return 'move';
    }
}
let car;
beforeEach(() => {
    car = new Car();
});

describe('Car', () => {
    it('can park', () => {
        assert.equal(car.park(), 'stopped');
    });

    it('can drive', () => {
        assert.equal(car.drive(), 'move');
    })
});*/
