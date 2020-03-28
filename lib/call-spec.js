'use strict';

var callspec = {
  abandonTransaction: 'str',
  addMultiSigAddress: '',
  addNode: '',
  backupWallet: '',
  bumpFee: 'str',
  createMultiSig: '',
  createRawTransaction: 'obj obj',
  decodeRawTransaction: '',
  dumpPrivKey: '',
  encryptWallet: '',
  estimateFee: '',
  estimateSmartFee: 'int str',
  estimatePriority: 'int',
  generate: 'int',
  generateToAddress: 'int str',
  getAccount: '',
  getAccountAddress: 'str',
  getAddedNodeInfo: '',
  getAddressMempool: 'obj',
  getAddressUtxos: 'obj',
  getAddressBalance: 'obj',
  getAddressDeltas: 'obj',
  getAddressTxids: 'obj',
  getAddressesByAccount: '',
  getBalance: 'str int',
  getBestBlockHash: '',
  getBlockDeltas: 'str',
  getBlock: 'str int',
  getBlockchainInfo: '',
  getBlockCount: '',
  getBlockHashes: 'int int obj',
  getBlockHash: 'int',
  getBlockHeader: 'str',
  getBlockNumber: '',
  getBlockTemplate: '',
  getConnectionCount: '',
  getChainTips: '',
  getDifficulty: '',
  getGenerate: '',
  getHashesPerSec: '',
  getInfo: '',
  getMemoryPool: '',
  getMemPoolEntry: 'str',
  getMemPoolInfo: '',
  getMiningInfo: '',
  getNetworkInfo: '',
  getNewAddress: '',
  getPeerInfo: '',
  getRawMemPool: 'bool',
  getRawTransaction: 'str int',
  getReceivedByAccount: 'str int',
  getReceivedByAddress: 'str int',
  getSpentInfo: 'obj',
  getTransaction: '',
  getTxOut: 'str int bool',
  getTxOutSetInfo: '',
  getWalletInfo: '',
  getWork: '',
  help: '',
  importAddress: 'str str bool',
  importMulti: 'obj obj',
  importPrivKey: 'str str bool',
  invalidateBlock: 'str',
  keyPoolRefill: '',
  listAccounts: 'int',
  listAddressGroupings: '',
  listReceivedByAccount: 'int bool',
  listReceivedByAddress: 'int bool',
  listSinceBlock: 'str int',
  listTransactions: 'str int int',
  listUnspent: 'int int',
  listLockUnspent: 'bool',
  lockUnspent: '',
  move: 'str str float int str',
  prioritiseTransaction: 'str float int',
  sendFrom: 'str str float int str str',
  sendMany: 'str obj int str',  //not sure this is will work
  sendRawTransaction: 'str',
  sendToAddress: 'str float str str',
  setAccount: '',
  setGenerate: 'bool int',
  setTxFee: 'float',
  signMessage: '',
  signRawTransaction: '',
  signRawTransactionWithWallet: 'str',
  stop: '',
  submitBlock: '',
  validateAddress: '',
  verifyMessage: '',
  walletLock: '',
  walletPassPhrase: 'string int',
  walletPassphraseChange: '',
};

module.exports = callspec;