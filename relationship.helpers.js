const familyTree = require("./kingShan");
const NONE = "NONE";

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
  // console.log(a.filter(i => i).join(" "));let siblings = [];
  familyTree.traverseDF(node => {
    node.children.forEach(child => {
      if(child.firstPerson == of)
        siblings = node.children.map(i => i.firstPerson);
    })
  });
  let tobePrinted = a.filter(i => i && i !== spouse && i !== of && !siblings.includes(i));
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

module.exports =  RELATIONSHIPS = {
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
