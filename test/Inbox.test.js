const assert = require('assert');
const ganache = require('ganache-cli');//local etherum network
const Web3 = require('web3');//class

const web3 = new Web3(ganache.provider());//instance
