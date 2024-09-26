
// find a hash which starts with 5 zeros '00000'

const crypto = require("crypto");

function findHashWithPerfix(perfix) {
  let input = 0;
  while (true) {
    let input_String = input.toString();
    let Hash = crypto.createHash("sha256").update(input_String).digest("hex");
    if (Hash.startsWith("00000")) {
      return { input: input_String, Hash: Hash };
    }
    input++;
  }
}

const result = findHashWithPerfix('00000');
console.log(`input_String :  ${result.input}`);
console.log(`Hash :  ${result.Hash}`)