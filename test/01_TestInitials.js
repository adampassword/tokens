var AR3Token = artifacts.require("R3SToken");
var AR3TokenInstance;
var initialBalance;

contract('R3SToken', function(accounts) {
    it("test R3SToken allocation", function() {
        return AR3Token.deployed().then(function(instance) {
            AR3TokenInstance = instance;
            return AR3TokenInstance.balanceOf.call(accounts[0]);             
        }).then(function(balance) {
            initialBalance = balance.toNumber();
            assert.equal(initialBalance, 47880000000000, "R3SToken Initial token allocation");            
        });
    });
});
