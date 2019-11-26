const Node = require("./NodeClass");
const Tree = require("./Tree");

///bootstraping data in here
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

module.exports = familyTree = new Tree(kingShan);