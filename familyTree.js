const Node = require("./NodeClass");
const PERSON_NOT_FOUND = "PERSON_NOT_FOUND";
const familyTree = require('./kingShan');
const RELATIONSHIPS = require('./relationship.helpers')

module.exports = {
  familyTree,
  addChild: (mother, name, gender) => {
    let found = false;
    familyTree.traverseDF(node => { if(node.husband === mother || node.wife === mother) found = true })
    if(!found)
        return console.log(PERSON_NOT_FOUND);
    let added = false;
    familyTree.traverseDF(node => {
      if (node.wife && node.wife === mother) {
        if (node.husband && node.wife) {
          node.addChild(new Node(name, gender));
          added = true;
        }
      }
    });
    if (added) console.log("CHILD_ADDITION_SUCCEEDED");
    else console.log("CHILD_ADDITION_FAILED");
    // familyTree.traverseDF(console.log);
  },
  findRelationship: (name, relationship) => {
    if (Object.keys(RELATIONSHIPS).includes(relationship)) {
      let found = false;
      familyTree.traverseDF(node => { if(node.husband === name || node.wife === name) found = true })
      if(found)
        RELATIONSHIPS[relationship](name);
      else
        console.log(PERSON_NOT_FOUND);
    } else {
      console.log("INVALID_COMMAND");
    }
  }
};
