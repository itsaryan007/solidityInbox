const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider( //HD wallet - connect to some target network and unlock account
    'area city squeeze false push next release churn deposit differ celery goat', // The secret key to deploy the account from
    'https://mainnet.infura.io/v3/9ca191b2a1c141509201f69688afd3e0' // acts as an interface to the nodes

);

const web3 = new Web3(provider); //feed the provider to the web3 instance

const deploy = async () =>{

    const accounts = await new web3.eth.getAccounts(); // await needed because it takes time to load the account
    console.log('Attempting to deploy from account', accounts[0]);


    const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({data: '0x' + bytecode, arguments: ['Hi there!']}) // add 0x bytecode
     .send({from: accounts[0]}); // remove 'gas

    console.log('Contract deployed to', result.options.address); //smart contract deployed address
};
deploy();



