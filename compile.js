const path = require('path');
const fs = require('fs');
const solc = require('solc');


const inboxPath = path.resolve(__dirname,'contracts', 'Inbox.sol'); // read contents of inbox contract
const source = fs.readFileSync(inboxPath,'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox']; //feed the read content to the compiler


// compiler is built for compiling multiple contracts(using arrary) at the same time but in above case there is only Inbox contract used.

