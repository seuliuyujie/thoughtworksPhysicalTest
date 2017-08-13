"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("decomposition_of_prime_factors", function(){
    sinon.spy(console, 'log');

    it("5", function(){
        let result = main(5);
        let expect_string = 3;
        console.log(`第5个fibonacci数为${main(5)}`);
        expect(expect_string).to.equal(result);
    });
});