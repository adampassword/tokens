var AR3Token = artifacts.require("R3SToken");
var AR3TokenInstance;
var fromBalance;
var toBalance;
var event;
var allowedAmount;

contract('R3SToken', function(accounts) {
    it("test R3SToken Alowance", function() {
        return AR3Token.deployed().then(function(instance) {
            AR3TokenInstance = instance;
            return AR3TokenInstance.approve(accounts[1], 100000000000, {from: accounts[0]});             
        }).then(function(result) {
            return AR3TokenInstance.allowance.call(accounts[0], accounts[1], {from: accounts[0]});             
        }).then(function(result) {
            allowedAmount = result.toNumber();
            assert.equal(result, 100000000000, "Token transfew allowed");            
        });
    });
});
