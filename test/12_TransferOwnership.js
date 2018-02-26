var AR3Token = artifacts.require("R3SToken");
var AR3TokenInstance;
var newOwner;

/*
contract('R3SToken', function(accounts) {
    it("test R3SToken TransferOwnership", function() {
        return AR3Token.deployed().then(function(instance) {
            AR3TokenInstance = instance;
            return AR3TokenInstance.transferOwnership(accounts[1], {from: accounts[0]});             
        }).then(function(result) {
            return AR3TokenInstance.owner.call();             
        }).then(function(result) {
            newOwner = result;
            assert.equal(newOwner, accounts[1], "New token owner set");            
        });
    });
});
*/