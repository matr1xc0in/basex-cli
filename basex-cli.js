/*jshint esversion: 6*/

// TODO: Only for Base58 now. Add more later.
const basex = require('base-x');
const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const coder = basex(ALPHABET);
var what_base = 58;
var user_input = "";

// extract options
process.argv.forEach(function (val, index, array) {
  // skip 0-1 args
  if(index >= 2) {
    switch (index) {
      case 2:
        what_base = parseInt(val);
        break;
      case 3:
        user_input = val.trim();
        break;
      default:
        console.log("can't recognize your input or too many args");
        process.exit(-1);
    }
  }
});

let error_code = 0;
switch (what_base) {
  case 58:
    let bytes = coder.decode(user_input);
    console.log(bytes.toString('hex'));
    error_code = 0;
    break;
  default:
    console.log("Base " + what_base + " not supported yet");
    error_code = -1;
    break;
}

process.exit(error_code);
