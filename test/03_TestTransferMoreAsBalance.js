var AR3Token = artifacts.require("R3SToken");
var AR3TokenInstance;
var fromBalance;
var toBalance;
var event;

contract('R3SToken', function(accounts) {
    it("test R3SToken transfer more as balance", function() {
        return AR3Token.deployed().then(function(instance) {
            AR3TokenInstance = instance;
            return AR3TokenInstance.transfer(accounts[0], 200000, {from: accounts[1]});             
        }).then(function(result) {
            assert(false, "Transfer more as balance should not be possible");    
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
