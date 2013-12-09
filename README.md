How to reproduce the issue
=============================

First, run npm install to install dependencies:
```
$ npm install
```

Then, run the following command line:
```
$ mocha
```

Test passes and the process does not hang.

Then, run this command line:
```
multi='dot=-' ./node_modules/mocha/bin/_mocha -R mocha-multi
```

Test passes but the process hangs.

Closing the watcher object using this code:
```
describe("mocha-multi", function() {
  it("should not hang when test is done and file is being watched using fs.watch", function (done) {
    var watcher = fs.watch("package.json", function (event, filename) {
    });
    expect(true).to.be.true;
    watcher.close()
    done();
  });
});
```
prevents mocha from hanging, but using mocha without mocha-multi does not require this fix.
