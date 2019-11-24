const readline = require("readline");
const { findRelationship, addChild} = require('./familyTree');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const printelp = () => {
  console.log("===============================================================");
  console.log("You have following commands");
  console.log("ADD_CHILD");
  console.log('\t Usage: ADD_CHILD "Mothers Name" "Childs Name" "Gender"');
  console.log("GET_RELATIONSHIP");
  console.log('\t Usage: GET_RELATIONSHIP "Name" "Relationship"');
  console.log("help");
  console.log("\t Usage: help");
  console.log("exit");
  console.log("\t Usage: exit");
  console.log("All commands and names are case sensitive");
  console.log("===============================================================");
}

printelp();
rl.on('line', (input) => {
  // console.log(`Received: ${input}`);
  const arr = input.split(" ");
  if(arr[0] === 'ADD_CHILD' && arr[1] && arr[2] && arr[3])
    addChild(arr[1], arr[2], arr[3].toLowerCase());
  else if(arr[0] === 'GET_RELATIONSHIP' && arr[1] && arr[2])
    findRelationship(arr[1], arr[2])
  else if(input === 'help')
    printelp();
  else if(input === 'exit')
    rl.close();
  else
    console.log('INVALID_COMMAND/IMPROPER_USAGE_OR_COMMAND');
});