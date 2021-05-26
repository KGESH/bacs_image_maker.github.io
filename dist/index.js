"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Block = /** @class */ (function () {
    function Block(index, hash, previousHash, date, timetamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.date = date;
        this.timetamp = timetamp;
    }
    return Block;
}());
var genesisBlock = new Block(0, "202020200202", "", "Hello", 123456);
var blockchain = [genesisBlock];
console.log(blockchain);
