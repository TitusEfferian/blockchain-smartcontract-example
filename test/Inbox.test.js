const assert = require('assert');
const ganache = require('ganache-cli');//local etherum network,just for development purpose
const Web3 = require('web3');//class
const web3 = new Web3(ganache.provider());//instance

beforeEach(() => {
    //get a list of all accounts
    web3.eth.getAccounts()
        .then(fetchedAccounts => {
            console.log(fetchedAccounts);
        });

    //use one of those account to deploy
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        
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
