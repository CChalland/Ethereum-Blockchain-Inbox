const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'mammal company conduct icon initial check foil peace daughter boy erode effort',
    'https://rinkeby.infura.io/0sfzxNOXW77kfdc55LVd'
);
const web3 = new Web3(provider);
