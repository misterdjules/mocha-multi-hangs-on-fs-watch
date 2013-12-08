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
