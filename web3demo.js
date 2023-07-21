


const web3=require('web3')
const ganache=new web3('HTTP://127.0.0.1:7545')
const account1= '0xD7eDCBaF76A13AAb7e93f31ee20c9486206AD7aF'
const account2='0xda5f45797f6E797e14D9f017187fB9923021DdF9'

web3.eth.sendTransaction({
    from: account1,
    to: account2,
    value: web3.utils.towei('1','ether')
})