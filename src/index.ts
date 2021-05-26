class Block {
  public index:number;
  public hash:string;
  public previousHash:string;
  public date:string;
  public timetamp:number;
  constructor(
    index:number,
    hash:string,
    previousHash:string,
    date:string,
    timetamp:number
  ){
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.date = date;
    this.timetamp = timetamp;
  }
}

const genesisBlock:Block = new Block(0, "202020200202", "", "Hello", 123456);

let blockchain:[Block] = [genesisBlock];

console.log(blockchain);

export {};