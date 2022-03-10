const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
    if (arguments.length === 0) {
      this.direct = true
    }
  }
  encrypt(message, key) {
    if (!message || !key || arguments.length !== 2) {
      throw new Error(`Incorrect arguments!`)
    } else {
      function isUpperCase(letter) {
        let l = letter.charCodeAt();
        if (l >= 65 && l <= 90) {
          return true;
        } else {
          return false;
        }
      };
      if (!this.direct) {
        message = message.split('').reverse().join('').toUpperCase();
        key = key.split('').reverse().join('').toUpperCase();
        let cipherText = ``;
        for (let i = 0, j = 0; i < message.length; i++) {
          let currentLetter = message[i];

          if (isUpperCase(currentLetter)) {
            cipherText += String.fromCharCode((((currentLetter.charCodeAt() - 65) + (key[j].charCodeAt() - 65)) % 26) + 65)
            // j++;
            j = ++j % key.length
          } else {
            cipherText += currentLetter;
          }
        }
        return cipherText;
      } else {
        message = message.toUpperCase();
        key = key.toUpperCase();
        let cipherText = ``;
        for (let i = 0, j = 0; i < message.length; i++) {
          let currentLetter = message[i];
          if (isUpperCase(currentLetter)) {
            cipherText += String.fromCharCode((((currentLetter.charCodeAt() - 65) + (key[j].charCodeAt() - 65)) % 26) + 65)
            // j++;
            j = ++j % key.length
          } else {
            cipherText += currentLetter;
          }
        }
        return cipherText;
      }

    }
  }


  decrypt(message, key) {
    if (!message || !key || arguments.length !== 2) {
      throw new Error(`Incorrect arguments!`)
    } else {
      function isUpperCase(letter) {
        let l = letter.charCodeAt();
        if (l >= 65 && l <= 90) {
          return true;
        } else {
          return false;
        }
      }
      if (!this.direct) {
        message = message.split('').reverse().join('').toUpperCase();
        key = key.split('').reverse().join('').toUpperCase();
        let cipherText = ``;
        for (let i = 0, j = 0; i < message.length; i++) {
          let currentLetter = message[i];
          if (isUpperCase(currentLetter)) {
            cipherText += String.fromCharCode(90 - (25 - (currentLetter.charCodeAt() - key.charCodeAt(j))) % 26)
            j = ++j % key.length
          } else {
            cipherText += currentLetter;
          }

        }
        return cipherText;
      } else {
        message = message.toUpperCase()
        key = key.toUpperCase()
        let cipherText = ``;
        for (let i = 0, j = 0; i < message.length; i++) {
          let currentLetter = message[i];
          if (isUpperCase(currentLetter)) {
            cipherText += String.fromCharCode(90 - (25 - (currentLetter.charCodeAt() - key.charCodeAt(j))) % 26)
            j = ++j % key.length
          } else {
            cipherText += currentLetter;
          }

        }
        return cipherText;
      }
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};