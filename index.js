// const readline = require("readline");
const { findRelationship, addChild} = require('./familyTree');
const fs = require('fs');

const processCmds = (input) => {
  const arr = input.split(" ");
  if(arr[0] === 'ADD_CHILD' && arr[1] && arr[2] && arr[3])
    addChild(arr[1], arr[2], arr[3].toLowerCase());
  else if(arr[0] === 'GET_RELATIONSHIP' && arr[1] && arr[2])
    findRelationship(arr[1], arr[2])
  else
    console.log('INVALID_COMMAND/IMPROPER_USAGE_OR_COMMAND');
}

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error("\x1b[31m", "Usage:	npm start \"<FILE PATH>\"");
} else {
  try {
    const fileContents = fs.readFileSync(args[0], 'utf8');
    const cmdArr = fileContents.split('\n').map(x => x.trim()).filter(p => p);
    cmdArr.forEach(x => {
      processCmds(x);
    })
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log("\x1b[41m", "404 File Not Found\n");
    } else {
      console.log("Something went wrong");
    }
  }
}