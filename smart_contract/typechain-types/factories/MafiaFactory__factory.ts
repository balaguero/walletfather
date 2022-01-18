/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MafiaFactory, MafiaFactoryInterface } from "../MafiaFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "walletId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "privateKey",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_walletFatherId",
        type: "uint256",
      },
    ],
    name: "NewWallet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "walletFatherId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "NewWalletFather",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_walletAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_privateKey",
        type: "string",
      },
    ],
    name: "createWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "createWalletFather",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getWalletFatherByOwner",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct MafiaFactory.WalletFather",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWalletFathers",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct MafiaFactory.WalletFather[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWallets",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "walletAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "privateKey",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "parent",
            type: "uint256",
          },
        ],
        internalType: "struct MafiaFactory.Wallet[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "walletFathers",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3620001186040518060400160405280601581526020017f4f776e657273686970205472616e7366657272656400000000000000000000008152506200013460201b62000c631760201c565b6200012e33620001d760201b62000cfc1760201c565b620003cd565b620001d4816040516024016200014b919062000347565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200027a60201b60201c565b50565b6200027781604051602401620001ee9190620003b0565b6040516020818303038152906040527f2c2ecbc2000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200027a60201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620002df578082015181840152602081019050620002c2565b83811115620002ef576000848401525b50505050565b6000601f19601f8301169050919050565b60006200031382620002a3565b6200031f8185620002ae565b935062000331818560208601620002bf565b6200033c81620002f5565b840191505092915050565b6000602082019050818103600083015262000363818462000306565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000398826200036b565b9050919050565b620003aa816200038b565b82525050565b6000602082019050620003c760008301846200039f565b92915050565b611cf080620003dd6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638f32d59b116100665780638f32d59b14610135578063a593547714610153578063b6c2692214610171578063db7a4605146101a1578063f2fde38b146101bf5761009e565b806313ce283e146100a35780633f8f7e5a146100bf578063715018a6146100db578063812ae511146100e55780638da5cb5b14610117575b600080fd5b6100bd60048036038101906100b891906113ba565b6101db565b005b6100d960048036038101906100d49190611461565b610233565b005b6100e3610306565b005b6100ff60048036038101906100fa91906114f3565b6103d5565b60405161010e939291906115c6565b60405180910390f35b61011f6104b7565b60405161012c9190611604565b60405180910390f35b61013d6104e0565b60405161014a919061163a565b60405180910390f35b61015b610537565b60405161016891906117cf565b60405180910390f35b61018b600480360381019061018691906117f1565b610688565b604051610198919061186e565b60405180910390f35b6101a9610820565b6040516101b691906119b5565b60405180910390f35b6101d960048036038101906101d491906117f1565b610c46565b005b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461022757600080fd5b61023081610d95565b50565b60003073ffffffffffffffffffffffffffffffffffffffff1663b6c26922336040518263ffffffff1660e01b815260040161026e9190611604565b600060405180830381865afa15801561028b573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906102b49190611afb565b9050806020015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102f257600080fd5b61030183838360000151610eff565b505050565b61030e6104e0565b61031757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600181815481106103e557600080fd5b90600052602060002090600302016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600201805461043490611b73565b80601f016020809104026020016040519081016040528092919081815260200182805461046090611b73565b80156104ad5780601f10610482576101008083540402835291602001916104ad565b820191906000526020600020905b81548152906001019060200180831161049057829003601f168201915b5050505050905083565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561067f5783829060005260206000209060030201604051806060016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820180546105ee90611b73565b80601f016020809104026020016040519081016040528092919081815260200182805461061a90611b73565b80156106675780601f1061063c57610100808354040283529160200191610667565b820191906000526020600020905b81548152906001019060200180831161064a57829003601f168201915b5050505050815250508152602001906001019061055b565b50505050905090565b610690611148565b60005b600180549050811015610819576000600182815481106106b6576106b5611ba5565b5b9060005260206000209060030201604051806060016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201805461073f90611b73565b80601f016020809104026020016040519081016040528092919081815260200182805461076b90611b73565b80156107b85780601f1061078d576101008083540402835291602001916107b8565b820191906000526020600020905b81548152906001019060200180831161079b57829003601f168201915b50505050508152505090508373ffffffffffffffffffffffffffffffffffffffff16816020015173ffffffffffffffffffffffffffffffffffffffff16141561080557809250505061081b565b50808061081190611c03565b915050610693565b505b919050565b60606000803073ffffffffffffffffffffffffffffffffffffffff1663b6c26922336040518263ffffffff1660e01b815260040161085e9190611604565b600060405180830381865afa15801561087b573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906108a49190611afb565b9050806020015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108e257600080fd5b60005b600280549050811015610a525760006002828154811061090857610907611ba5565b5b9060005260206000209060040201604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201805461099190611b73565b80601f01602080910402602001604051908101604052809291908181526020018280546109bd90611b73565b8015610a0a5780601f106109df57610100808354040283529160200191610a0a565b820191906000526020600020905b8154815290600101906020018083116109ed57829003601f168201915b505050505081526020016003820154815250509050826000015181606001511415610a3e578380610a3a90611c03565b9450505b508080610a4a90611c03565b9150506108e5565b5060008267ffffffffffffffff811115610a6f57610a6e61128f565b5b604051908082528060200260200182016040528015610aa857816020015b610a9561117f565b815260200190600190039081610a8d5790505b5090506000805b600280549050811015610c3b57600060028281548110610ad257610ad1611ba5565b5b9060005260206000209060040201604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054610b5b90611b73565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8790611b73565b8015610bd45780601f10610ba957610100808354040283529160200191610bd4565b820191906000526020600020905b815481529060010190602001808311610bb757829003601f168201915b505050505081526020016003820154815250509050846000015181606001511415610c275780848481518110610c0d57610c0c611ba5565b5b60200260200101819052508280610c2390611c03565b9350505b508080610c3390611c03565b915050610aaf565b508194505050505090565b610c4e6104e0565b610c5757600080fd5b610c6081611028565b50565b610cf981604051602401610c779190611c4c565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061111f565b50565b610d9281604051602401610d109190611604565b6040516020818303038152906040527f2c2ecbc2000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061111f565b50565b60006001805490509050600160405180606001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018481525090806001815401808255809150506001900390600052602060002090600302016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019080519060200190610e689291906111bd565b505050600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190610ebb90611c03565b91905055507f2f21e7c38ec3a2a715019c7d59bacc5445d4bf7c0106dc509676d5194e155ad5813384604051610ef3939291906115c6565b60405180910390a15050565b60006002805490509050600260405180608001604052808381526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481525090806001815401808255809150506001900390600052602060002090600402016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019080519060200190610fd89291906111bd565b506060820151816003015550507faaaa373788d01d834de27ce901ff5a70616fdd229ad10867863350baf047fc008185858560405161101a9493929190611c6e565b60405180910390a150505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561106257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b604051806060016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081525090565b604051806080016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001600081525090565b8280546111c990611b73565b90600052602060002090601f0160209004810192826111eb5760008555611232565b82601f1061120457805160ff1916838001178555611232565b82800160010185558215611232579182015b82811115611231578251825591602001919060010190611216565b5b50905061123f9190611243565b5090565b5b8082111561125c576000816000905550600101611244565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6112c78261127e565b810181811067ffffffffffffffff821117156112e6576112e561128f565b5b80604052505050565b60006112f9611260565b905061130582826112be565b919050565b600067ffffffffffffffff8211156113255761132461128f565b5b61132e8261127e565b9050602081019050919050565b82818337600083830152505050565b600061135d6113588461130a565b6112ef565b90508281526020810184848401111561137957611378611279565b5b61138484828561133b565b509392505050565b600082601f8301126113a1576113a0611274565b5b81356113b184826020860161134a565b91505092915050565b6000602082840312156113d0576113cf61126a565b5b600082013567ffffffffffffffff8111156113ee576113ed61126f565b5b6113fa8482850161138c565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061142e82611403565b9050919050565b61143e81611423565b811461144957600080fd5b50565b60008135905061145b81611435565b92915050565b600080604083850312156114785761147761126a565b5b60006114868582860161144c565b925050602083013567ffffffffffffffff8111156114a7576114a661126f565b5b6114b38582860161138c565b9150509250929050565b6000819050919050565b6114d0816114bd565b81146114db57600080fd5b50565b6000813590506114ed816114c7565b92915050565b6000602082840312156115095761150861126a565b5b6000611517848285016114de565b91505092915050565b611529816114bd565b82525050565b61153881611423565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561157857808201518184015260208101905061155d565b83811115611587576000848401525b50505050565b60006115988261153e565b6115a28185611549565b93506115b281856020860161155a565b6115bb8161127e565b840191505092915050565b60006060820190506115db6000830186611520565b6115e8602083018561152f565b81810360408301526115fa818461158d565b9050949350505050565b6000602082019050611619600083018461152f565b92915050565b60008115159050919050565b6116348161161f565b82525050565b600060208201905061164f600083018461162b565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61168a816114bd565b82525050565b61169981611423565b82525050565b600082825260208201905092915050565b60006116bb8261153e565b6116c5818561169f565b93506116d581856020860161155a565b6116de8161127e565b840191505092915050565b60006060830160008301516117016000860182611681565b5060208301516117146020860182611690565b506040830151848203604086015261172c82826116b0565b9150508091505092915050565b600061174583836116e9565b905092915050565b6000602082019050919050565b600061176582611655565b61176f8185611660565b93508360208202850161178185611671565b8060005b858110156117bd578484038952815161179e8582611739565b94506117a98361174d565b925060208a01995050600181019050611785565b50829750879550505050505092915050565b600060208201905081810360008301526117e9818461175a565b905092915050565b6000602082840312156118075761180661126a565b5b60006118158482850161144c565b91505092915050565b60006060830160008301516118366000860182611681565b5060208301516118496020860182611690565b506040830151848203604086015261186182826116b0565b9150508091505092915050565b60006020820190508181036000830152611888818461181e565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006080830160008301516118d46000860182611681565b5060208301516118e76020860182611690565b50604083015184820360408601526118ff82826116b0565b91505060608301516119146060860182611681565b508091505092915050565b600061192b83836118bc565b905092915050565b6000602082019050919050565b600061194b82611890565b611955818561189b565b935083602082028501611967856118ac565b8060005b858110156119a35784840389528151611984858261191f565b945061198f83611933565b925060208a0199505060018101905061196b565b50829750879550505050505092915050565b600060208201905081810360008301526119cf8184611940565b905092915050565b600080fd5b600080fd5b6000815190506119f0816114c7565b92915050565b600081519050611a0581611435565b92915050565b6000611a1e611a198461130a565b6112ef565b905082815260208101848484011115611a3a57611a39611279565b5b611a4584828561155a565b509392505050565b600082601f830112611a6257611a61611274565b5b8151611a72848260208601611a0b565b91505092915050565b600060608284031215611a9157611a906119d7565b5b611a9b60606112ef565b90506000611aab848285016119e1565b6000830152506020611abf848285016119f6565b602083015250604082015167ffffffffffffffff811115611ae357611ae26119dc565b5b611aef84828501611a4d565b60408301525092915050565b600060208284031215611b1157611b1061126a565b5b600082015167ffffffffffffffff811115611b2f57611b2e61126f565b5b611b3b84828501611a7b565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611b8b57607f821691505b60208210811415611b9f57611b9e611b44565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611c0e826114bd565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611c4157611c40611bd4565b5b600182019050919050565b60006020820190508181036000830152611c66818461158d565b905092915050565b6000608082019050611c836000830187611520565b611c90602083018661152f565b8181036040830152611ca2818561158d565b9050611cb16060830184611520565b9594505050505056fea264697066735822122044a153a6cfb56224d92b0c529d3d7179c3e1092e9cd5aaa1293427ad86d9aae564736f6c634300080b0033";

type MafiaFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MafiaFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MafiaFactory__factory extends ContractFactory {
  constructor(...args: MafiaFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MafiaFactory";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MafiaFactory> {
    return super.deploy(overrides || {}) as Promise<MafiaFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MafiaFactory {
    return super.attach(address) as MafiaFactory;
  }
  connect(signer: Signer): MafiaFactory__factory {
    return super.connect(signer) as MafiaFactory__factory;
  }
  static readonly contractName: "MafiaFactory";
  public readonly contractName: "MafiaFactory";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MafiaFactoryInterface {
    return new utils.Interface(_abi) as MafiaFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MafiaFactory {
    return new Contract(address, _abi, signerOrProvider) as MafiaFactory;
  }
}
