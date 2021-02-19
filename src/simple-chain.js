const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arrChain: [],
  getLength() {
    return this.arrChain.length;
  },
  addLink(value) {
    this.arrChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(typeof position === 'number' && (position^0) === position){
      if (position < 1 || position > this.getLength()){
        this.arrChain.length = 0;
        throw new Error('is out of range')
    }
    const prevElem = position -1;
    this.arrChain.splice(prevElem, 1);
    return this;

    }
    this.arrChain.length = 0;
    throw new Error('not number');
  },
  reverseChain() {
    this.arrChain.reverse();
    return this;
  },
  finishChain() {
    const chain = this.arrChain.join('~~');
    this.arrChain.length = 0;
    return chain;
  }
};

module.exports = chainMaker;
