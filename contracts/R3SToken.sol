  pragma solidity ^0.4.18;

  import './StandardToken.sol';  
  import './BurnableToken.sol';
  import './Ownable.sol';
  
/**
 * @title R3SToken
 * @dev ERC20 token for the R3S ICO
 * @dev developed by: R3S Team
 */
  contract R3SToken is StandardToken, BurnableToken, Ownable  {
  
      string public name = 'R3SToken';
      string public symbol = 'R3S';
      uint8 public decimals = 6;
      uint public INITIAL_SUPPLY = 47880000000000;
  
 /**
 * @dev Constructor, initialising the suppy and the owner account
 */
      function R3SToken() public {
          totalSupply = INITIAL_SUPPLY;
          balances[msg.sender] = INITIAL_SUPPLY;
      }
  
 /**
 * @dev burn overwrite, 
 * @dev only owner can burn and only from the owner account, 
 * @dev as we do not have ownership transfer it means only from the initial admin account can be burned
 * @param _value value to burn.
 */
      function burn(uint256 _value) onlyOwner public {
          super.burn(_value);       
      }
  }