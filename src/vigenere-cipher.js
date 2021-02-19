const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(modification = true) {
    this.modification = modification;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }

    key = key.toUpperCase();
    let message1 = message.toUpperCase().replace(/\s+/g, '');

    let alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    let lengthMessage = message.length;
    let newKeyArray = key.repeat(lengthMessage).substring(0, lengthMessage).split(''); //записываем ключевое слово циклически до тех пор, пока его длина не будет соответствовать длине строки для кодирования
    let messageArray = message1.split('');
    let messageArrayWords = message.split(" ");
    console.log(messageArrayWords);
    let wordInMessage;
    let encryptString = '';

    for (let i = 0; i < lengthMessage; i++) {
      if (alfabet.includes(messageArray[i])) {
        encryptString += alfabet[(alfabet.indexOf(messageArray[i]) + alfabet.indexOf(newKeyArray[i])) % 26];

      } else {
        encryptString += (messageArray[i])
      }
    }


    let resultArrayWords = [];
    for (let r = 0; r < messageArrayWords.length; r++) {
      resultArrayWords.push(encryptString.substring(0, messageArrayWords[r].length))
      wordInMessage = encryptString.substring(0, messageArrayWords[r].length);
      encryptString = encryptString.replace(wordInMessage, '')

    }

    let encryptMessage = resultArrayWords.join(" ")

    if (this.modification === false) {
      return encryptMessage.split('').reverse().join('')
    } else {
      return encryptMessage
    }
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }
    key = key.toUpperCase();
    let message1 = message.toUpperCase().replace(/\s+/g, '');

    let alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    let lengthMessage = message.length;
    let newKeyArray = key.repeat(lengthMessage).substring(0, lengthMessage).split(''); //записываем ключевое слово циклически до тех пор, пока его длина не будет соответствовать длине строки для кодирования
    let messageArray = message1.split('');
    let messageArrayWords = message.split(" ");
    console.log(messageArrayWords);
    let wordInMessage;
    let decryptString = '';

    for (let i = 0; i < lengthMessage; i++) {
      if (alfabet.includes(messageArray[i])) {
        decryptString += alfabet[(alfabet.indexOf(messageArray[i]) + 26 - alfabet.indexOf(newKeyArray[i])) % 26];

      } else {
        decryptString += (messageArray[i])
      }
    }


    let resultArrayWords = [];
    for (let r = 0; r < messageArrayWords.length; r++) {
      resultArrayWords.push(decryptString.substring(0, messageArrayWords[r].length))
      wordInMessage = decryptString.substring(0, messageArrayWords[r].length);
      decryptString = decryptString.replace(wordInMessage, '')

    }

    let decryptMessage = resultArrayWords.join(" ")

    if (this.modification === false) {
      return decryptMessage.split('').reverse().join('')
    } else {
      return decryptMessage
    }
  }
}

module.exports = VigenereCipheringMachine;
