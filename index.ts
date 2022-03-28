class Block {
  timestamp: Date;
  previousHash: string;
  nounce: number;
  hash: string;
  transactions: any;

  constructor(transactions, previousHash = '') {
    this.timestamp = new Date();
    this.previousHash = previousHash;
    this.transactions = transactions;
    this.nounce = 0;
    this.hash = this.claculateHash();
  }

  claculateHash() {
    return 'asdasdasdasd';
  }
}

class BlockChain {
  constructor() {}
  createGenesisBlock() {
    return new Block([], '0');
  }
  getLatestBlock() {}
  isBlockChainValid() {}
  getWalletTransactions() {}
}

class Transaction {
  fromAdress: string;
  toAddress: string;
  amount: number;
  signature: string;

  constructor(fromAddress: string, toAddress: string, amount: number) {
    this.fromAdress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }

  signTransaction() {}

  isValidTranscation() {
    if (!this.signature || this.signature.length === 0) {
      throw new Error('No signature in this transaction');
    }
  }
}

const satyacoin = new BlockChain();
satyacoin.createGenesisBlock();
console.log(satyacoin.createGenesisBlock());
