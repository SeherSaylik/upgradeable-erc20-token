const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const UpgradeableERC20 = artifacts.require('UpgradeableERC20');
const NewERC20 = artifacts.require('NewERC20');
module.exports = async function (deployer) {
const existing = await UpgradeableERC20.deployed();
await upgradeProxy(existing.address, NewERC20, { deployer});
};