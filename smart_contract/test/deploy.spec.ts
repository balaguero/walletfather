import {ethers, waffle} from 'hardhat';
import chai from 'chai';

import MafiaFactoryArtifact from '../artifacts/contracts/MafiaFactory.sol/MafiaFactory.json';
import {MafiaFactory} from '../typechain/MafiaFactory';

const {deployContract} = waffle;
const {expect} = chai;

describe('MafiaFactory', function () {
  let mafiaFactory: MafiaFactory;

  it("Should return the new greeting once it's changed", async function () {
    const signers = await ethers.getSigners();
    mafiaFactory = (await deployContract(signers[0], MafiaFactoryArtifact, ['Hello, world!'])) as MafiaFactory;

    expect(await mafiaFactory.greet()).to.equal('Hello, world!');

    const setGreetingTx = await mafiaFactory.setGreeting('Hola, mundo!');

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await mafiaFactory.greet()).to.equal('Hola, mundo!');
  });
});