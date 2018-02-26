var AR3Token = artifacts.require("R3SToken");
var AR3TokenInstance;
var endBalance;
var toBalance;

var toAddress = "0xf17f52151ebef6c7334fad080c5704d77216b732";

contract('R3SToken', function(accounts) {
    it("test R3SToken burn", function() {
        return AR3Token.deployed().then(function(instance) {
            AR3TokenInstance = instance;
            return AR3TokenInstance.burn(100000000000);             
        }).then(function() {
            return AR3TokenInstance.balanceOf.call(accounts[0]);             
        }).then(function(balance) {
            endBalance = balance.toNumber();
            assert.equal(endBalance, 47780000000000, "R3SToken token allocation after burn");            
        });
    });
});
