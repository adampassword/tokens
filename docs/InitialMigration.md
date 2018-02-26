Brief documentation of the initial token migration

Services and examples for the initial token migration are to be found under the services folder:

- TokenTrasnferBalance.js contains the datastructure for the account balances to be imported
- TokenTransferFunction.js contains the functions for the initial migration:
    -   R3STransferTokens: transferring tokens to accounts based on the TokenTrasnferBalance.js file
    -   R3SCheckTokeBalances: checking the balances of the tokens based on the TokenTrasnferBalance.js file
    -   R3SBurnToken: burning a given amount of token from the actuall address.

Detailed initial migration:

0. IMPORTANT: Test everything on a Test network firts, even if there is only a small data change in the TokenTrasnferBalance.js it might cause a data dependent error that is pretty unlucky to have only during live migration

1. Make sure TokenTrasnferBalance.js has the total amount of required balances

2. With a geth console, load the TokenTransferBalances.js with loadScript("..") and check if the balances are imported

3. With a geth console load the TokenTransferFunctions.js (with loadScript)

4. Run R3SCheckTokeBalances() to test the initial token allocation, all address must contain 0 tokens, except the admin address that must cointain 46144800 tokens

5. Run R3STransferTokens() to transfer the tokens with the admin account, be sure that the admin account has enough ether balance to execute all of the transactions. 

6.  Run R3SCheckTokeBalances() to test the new token allocation, all address must contain the exact number of tokens, except the admin address

7.  Burn the extra number of tokens from the admin account with R3SBurnToken(amount) 

8.  Run R3SCheckTokeBalances() to test the new token allocation, all addresses must contain the exact number of expected tokens.
