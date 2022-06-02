const crypto = require('node:crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret).update('test').digest('hex');
const hash2 = crypto.createHmac('sha256', secret).update('test').digest('hex');

if(hash === hash2){
  console.log('Hashes match');
}else{
  console.log('Hashes do not match');
}