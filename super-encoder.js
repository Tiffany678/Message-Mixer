// Import the encryptors functions here.
const encryptors = require("./encryptors.js");

const caesarCipher=encryptors.caesarCipher;
const symbolCipher=encryptors.symbolCipher;
const reverseCipher=encryptors.reverseCipher;

const amount= Math.floor(Math.random()*26);


const encodeMessage = (str) => {
  //encryptors.reverseCipher(str);
 return reverseCipher(symbolCipher(caesarCipher(str, amount)));

}

const decodeMessage = (str) => {
  return caesarCipher(symbolCipher(reverseCipher(str)), -amount);
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);