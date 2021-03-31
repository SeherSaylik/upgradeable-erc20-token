**Upgradeable ERC20 Smart Contract**

The purpose of this work is to update the contracts folder with the first contract (UpgradeableERC20) after deploying it with the other contract (NewERC20). The points to be considered are given below.



**GANACHE**

- Ganache is a personal blockchain for rapid Ethereum and Corda distributed application development. You can use Ganache across the entire development cycle; enabling you to develop, deploy, and test your dApps in a safe and deterministic environment. 

- In order to download it : https://www.trufflesuite.com/ganache

- Please make sure the Ganache is on while doing deployments.



**Installation**

- Run 'npm install' command to get necessary modules.



**Deployment**

- Just run the first migration file(1_initial_migration.js) to distribute your contract for the first time. Use this command for running the first migration file: `npx truffle migrate --to 1 --network development`



- In order to upgrade the contract run second migration file(2_upgrade_proxy.js). 

 Use this command for running the second migration file: `npx truffle migrate --f 2 --to 2 --network development`



- When deploying the first contract, configure the token information in the 1_initial_deploy.js file according to your own wishes. 
- ![image](https://user-images.githubusercontent.com/73213970/113118456-273b4c00-9218-11eb-9b5d-48a5a0174ee1.png)



**Important Note!-- Initializer Function**

- Although standard ERC20 tokens use the constructor, an initializer function is used as an alternative in this upgradeable contract example. Because upgradeable contracts do not allow the use of the constructor function.
