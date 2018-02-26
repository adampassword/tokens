var AR3Token = artifacts.require("R3SToken");
var AR3TokenInstance;
var newOwner;

/*
contract('R3SToken', function(accounts) {
    it("test R3SToken TransferOwnership from non owner", function() {
        return AR3Token.deployed().then(function(instance) {
            AR3TokenInstance = instance;
            return AR3TokenInstance.transferOwnership(accounts[1], {from: accounts[0]});             
        }).then(function(result) {
            return AR3TokenInstance.transferOwnership(accounts[1], {from: accounts[0]});             
        }).then(function(result) {
            assert(false,"Transferring from non owner should not be allowed");            
        }).catch(function(error) {
            errorMessage = error.toString();
            if (errorMessage.indexOf("invalid opcode")  > 0){
                assert(true, "Transferring from non owner should not be allowed - error as expected");   
            }
            else{
                assert(false, "Transferring from non owner should not be allowed- wrong error message");   
            }
        });
    });
});
*/