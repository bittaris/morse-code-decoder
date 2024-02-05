const MORSE_CODE = require('./dictionary')

function decodeMorse(morseCode){
    
    const splitIntoWords = morseCode.split("   ").map(word => word.split(" "))

    const decodedMorseCode = splitIntoWords.map(word => word.map(letter => MORSE_CODE[letter]))

    const message = decodedMorseCode.map(word => word.join("")).join(" ")
    
    return message.trim()
  }

module.exports = decodeMorse