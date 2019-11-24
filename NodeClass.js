module.exports = class NodeClass {
  constructor(data, gender) {
    if(gender === 'male')
      this.husband = data;
    else
      this.wife = data;
    this.children = [];
    this.firstPerson = data;
  }

  addChild(data) {
    this.children.push(data);
  };

  addWifeOrHusband(data, gender) {
    if(gender === 'male')
      this.husband = data;
    else
      this.wife = data;
  }
}