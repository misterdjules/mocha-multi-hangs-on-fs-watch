var fs      = require('fs');
var chai    = require('chai');
var expect  = chai.expect;

describe("mocha-multi", function() {
  it("should not hang when test is done and file is being watched using fs.watch", function (done) {
    fs.watch("package.json", function (event, filename) {
    });
    expect(true).to.be.true;
    done();
  });
});