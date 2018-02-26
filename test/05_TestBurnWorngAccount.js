var AR3Token = artifacts.require("R3SToken");
var AR3TokenInstance;
var endBalance;
var toBalance;
var errorMessage;


var toAddress = "0xf17f52151ebef6c7334fad080c5704d77216b732";

contract('R3SToken', function(accounts) {
    it("test R3SToken burn from wrong account", function() {
        return AR3Token.deployed().then(function(instance) {
            AR3TokenInstance = instance;
            return AR3TokenInstance.burn(200000, {from: accounts[1]});             
        }).then(function() {
            return AR3TokenInstance.balanceOf.call(accounts[0]);             
        }).then(function(balance) {
            endBalance = balance.toNumber();
            assert(false, "R3SToken burn must not be allowed");            
        }).catch(function(error) {
            errorMessage = error.toString();
            if (errorMessage.indexOf("revert")  > 0){
                assert(true, "R3SToken burn must not be allowed - error as expected");   
            }
            else{
                assert(false, "R3SToken burn must not be allowed - wrong error message");   
            }
        });
    });
});
