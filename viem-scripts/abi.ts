export const abi = [
  {
    type: "function",
    name: "decrement",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "increment",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "number",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setNumber",
    inputs: [{ name: "newNumber", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export const bytecode =
  "0x6080604052348015600f57600080fd5b506101328061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060465760003560e01c80632baeceb714604b5780633fb5c1cb1460535780638381f58a146063578063d09de08a14607d575b600080fd5b60516083565b005b6051605e36600460a4565b600055565b606b60005481565b60405190815260200160405180910390f35b60516097565b60008054908060908360d2565b9190505550565b60008054908060908360e6565b60006020828403121560b557600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b60008160de5760de60bc565b506000190190565b60006001820160f55760f560bc565b506001019056fea2646970667358221220aa623ffc9dd48bbbf1da02199cadc16e0e718c5d6cc383341f77e57e2cb4412564736f6c63430008190033" as const;

export const address = "0x6b565dE192A1Be17a4F077B5Fda6b3A100498790" as const;
