var AR3Token = artifacts.require("R3SToken");
var AR3TokenInstance;
var fromBalance;
var toBalance;
var event;

contract('R3SToken', function(accounts) {
    it("test R3SToken transfer From without allowance", function() {
        return AR3Token.deployed().then(function(instance) {
            AR3TokenInstance = instance;
            return AR3TokenInstance.transferFrom(accounts[0],accounts[2], 200000, {from: accounts[1]});             
        }).then(function(result) {
            assert(false,"Transferring more than allowed is not allowed");            
        }).catch(function(error) {
            errorMessage = error.toString();
            if (errorMessage.indexOf("revert")  > 0){
                assert(true, "Transferring more than allowed is not allowed - error as expected");   
            }
            else{
                assert(false, "Transferring more than allowed is not allowed - wrong error message");   
            }
        });
    });
});
