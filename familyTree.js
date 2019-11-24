const Node = require("./NodeClass");
const Tree = require("./Tree");
const NONE = "NONE";
const PERSON_NOT_FOUND = "PERSON_NOT_FOUND";

const kingShan = new Node("Shan", "male");
kingShan.addWifeOrHusband("Anga", "female");

const chit = new Node("Chit", "male");
chit.addWifeOrHusband("Amba", "female");

const dritha = new Node("Dritha", "female");
dritha.addWifeOrHusband("Jaya", "male");
dritha.addChild(new Node("Yodhan", "male"));

const tritha = new Node("Tritha", "female");

const vritha = new Node("Vritha", "male");

chit.addChild(dritha);
chit.addChild(tritha);
chit.addChild(vritha);

const ish = new Node("Ish", "male");

const vich = new Node("Vich", "male");
vich.addWifeOrHusband("Lika", "female");

vich.addChild(new Node("Vila", "female"));
vich.addChild(new Node("Chika", "female"));

const aras = new Node("Aras", "male");
aras.addWifeOrHusband("Chitra", "female");

const jnki = new Node("Jnki", "female");
jnki.addWifeOrHusband("Arit", "male");
jnki.addChild(new Node("Laki", "male"));
jnki.addChild(new Node("Lavnya", "female"));

const ahit = new Node("Ahit", "male");

aras.addChild(jnki);
aras.addChild(ahit);

const satya = new Node("Satya", "female");
satya.addWifeOrHusband("Vyan", "male");

const asva = new Node("Asva", "male");
asva.addWifeOrHusband("Satvy", "female");
asva.addChild(new Node("Vasa", "male"));

const vyas = new Node("Vyas", "male");
vyas.addWifeOrHusband("Krpi", "female");
vyas.addChild(new Node("Kriya", "male"));
vyas.addChild(new Node("Krithi", "female"));

satya.addChild(asva);
satya.addChild(vyas);
satya.addChild(new Node("Atya", "female"));

kingShan.addChild(chit);
kingShan.addChild(ish);
kingShan.addChild(vich);
kingShan.addChild(aras);
kingShan.addChild(satya);

const familyTree = new Tree(kingShan);

const sonOrDaughter = (of, husbandOrWife) => {
  let a = [];
  familyTree.traverseDF(node => {
    if (node.husband === of || node.wife === of) {
      const sons = node.children.map(child => {
        if (child.firstPerson === child[husbandOrWife])
          return child.firstPerson;
      });
      a = sons;
      // console.log(sons.join(" "));
    }
  });
  return a;
};

const sisterOrBrotherInLaw = (of, param1, param2) => {
  let a = [];
  let spouse = "";
  familyTree.traverseDF(node => {
    if (node.husband === of) spouse = node.wife;
    else if (node.wife === of) spouse = node.husband;
  });
  familyTree.traverseDF(node => {
    node.children.forEach(child => {
      if (child.firstPerson === spouse)
        a = [
          ...a,
          ...node.children.map(i => {
            if (i.firstPerson === i[param1]) return i.firstPerson;
          })
        ];
    });
  });
  ///siblings
  familyTree.traverseDF(node => {
    node.children.forEach(child => {
      if (child.firstPerson === of && this.firstPerson === this[param2])
        a = [...a, ...node.children.map(i => i[param1])];
    });
  });
  // console.log(a.filter(i => i).join(" "));
  let tobePrinted = a.filter(i => i && i !== spouse && i !== of);
  if (tobePrinted.length) console.log(tobePrinted.join(" "));
  else console.log(NONE);
};

const matPatAuntUncle = (of, param1, param2) => {
  let father = ``;
  let a = [];
  familyTree.traverseDF(node => {
    node.children.forEach(child => {
      if (child.firstPerson === of) father = node[param1];
    });
  });
  // console.log(father);
  familyTree.traverseDF(node => {
    node.children.map(c => {
      if (c.firstPerson === father) {
        const bros = node.children
          .filter(i => i.firstPerson === i[param2])
          .map(i => i.firstPerson);
        // bros.pop(father);
        a = bros.filter(i => i && i !== father);
        // console.log(bros.join(" ").replace(father, ``));
      }
    });
  });
  if (a.length) console.log(a.join(" "));
  else console.log(NONE);
};

const RELATIONSHIPS = {
  "Paternal-Uncle": function(of) {
    matPatAuntUncle(of, "husband", "husband");
  },
  "Maternal-Uncle": of => {
    matPatAuntUncle(of, "wife", "husband");
  },
  "Paternal-Aunt": of => {
    matPatAuntUncle(of, "husband", "wife");
  },
  "Maternal-Aunt": of => {
    matPatAuntUncle(of, "wife", "wife");
  },
  "Sister-In-Law": of => {
    sisterOrBrotherInLaw(of, "wife", "husband");
  },
  "Brother-In-Law": of => {
    sisterOrBrotherInLaw(of, "husband", "wife");
  },
  Son: of => {
    const a = sonOrDaughter(of, "husband").filter(i => i);
    if (a.length) console.log(a.join(" "));
    else console.log(NONE);
  },
  Daughter: of => {
    const a = sonOrDaughter(of, "wife").filter(i => i);
    if (a.length) console.log(a.join(" "));
    else console.log(NONE);
  },
  Siblings: of => {
    let a = [];
    familyTree.traverseDF(node => {
      node.children.forEach(child => {
        if (child.firstPerson === of) a = node.children.map(i => i.firstPerson);
        // console.log(node.children.map(i => i.firstPerson).join(" "));
      });
    });
    a = a.filter(i => i && i !== of);
    if (a.length) console.log(a.join(" "));
    else console.log(NONE);
  }
};

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
      familyTree.traverseDF(node => { if(node.firstPerson === name) found = true })
      if(found)
        RELATIONSHIPS[relationship](name);
      else
        console.log(PERSON_NOT_FOUND);
    } else {
      console.log("INVALID_COMMAND");
    }
  }
};
