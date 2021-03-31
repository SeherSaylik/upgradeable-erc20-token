const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const UpgradeableERC20 = artifacts.require('UpgradeableERC20');
module.exports = async function (deployer) {
await deployProxy(UpgradeableERC20, ['YOUR-TOKEN-NAME','YOUR-TOKEN-SYMBOL','YOUR-DECİMALS','YOUR-SUPPLY'], { deployer, initializer: 'initialize' });
};