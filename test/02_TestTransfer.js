var AR3Token = artifacts.require("R3SToken");
var AR3TokenInstance;
var fromBalance;
var toBalance;
var event;

contract('R3SToken', function(accounts) {
    it("test R3SToken transfer", function() {
        return AR3Token.deployed().then(function(instance) {
            AR3TokenInstance = instance;
            return AR3TokenInstance.transfer(accounts[1], 100000000000);             
        }).then(function(result) {
            event = result.logs[0].event;
            return AR3TokenInstance.balanceOf.call(accounts[0]);             
        }).then(function(balance) {
            fromBalance = balance.toNumber();
            return AR3TokenInstance.balanceOf.call(accounts[1]);             
        }).then(function(balance) {
            toBalance = balance.toNumber();
            assert.equal(fromBalance, 47780000000000, "R3SToken token allocation after transfer");            
            assert.equal(toBalance, 100000000000, "R3SToken token allocation after transfer");                        
            assert.equal(event, "Transfer", "Transfer event raised");                                    
        });
    });
});
