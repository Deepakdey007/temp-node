const { readFileSync, writeFileSync, write } = require('fs'); // same as fs.readFileSync

const first = readFileSync('./content/first.txt','utf-8');

const second = readFileSync('./content/second.txt','utf-8');
console.log(first,second);

writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`,
    { flag : 'a'} // for append
)
