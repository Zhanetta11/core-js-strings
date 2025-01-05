function getStringLength(value) {
  if (value == null) {
    return 0;
  }
  return value.length;
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function concatenateStrings(str1, str2) {
  return str1.concat(str2);
}

function getFirstChar(value) {
  return value ? value.charAt(0) : '';
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value ? value.trim() : '';
}

function removeLeadingWhitespaces(str) {
  return str.trimStart();
}

function removeTrailingWhitespaces(str) {
  return str.trimEnd();
}

function repeatString(str, times) {
  if (times <= 0) {
    return '';
  }
  return str.repeat(times);
}

function removeFirstOccurrences(str, value) {
  const index = str.indexOf(value);
  if (index === -1) {
    return str;
  }
  return str.slice(0, index) + str.slice(index + value.length);
}

function removeLastOccurrences(str, value) {
  const lastIndex = str.lastIndexOf(value);
  if (lastIndex === -1) {
    return str;
  }
  return str.slice(0, lastIndex) + str.slice(lastIndex + value.length);
}

function sumOfCodes(str) {
  if (!str) {
    return 0;
  }
  return [...str].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function startsWith(str, substr) {
  return str.startsWith(substr);
}

function endsWith(str, substr) {
  return str.endsWith(substr);
}

function formatTime(minutes, seconds) {
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function orderAlphabetically(str) {
  return str.split('').sort().join('');
}

function containsSubstring(str, substring) {
  return str.includes(substring);
}

function countVowels(str) {
  const vowels = 'aeiouyAEIOUY';
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (vowels.includes(str[i])) {
      count += 1;
    }
  }
  return count;
}

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

function reverseWords(str) {
  const words = str.split(' ');
  const reversedWords = words.map((word) => word.split('').reverse().join(''));
  return reversedWords.join(' ');
}

function invertCase(str) {
  return str
    .split('')
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  const match = value.match(/Hello, (.+)!/);
  return match ? match[1] : '';
}

function unbracketTag(str) {
  return str.slice(1, -1);
}

function extractEmails(str) {
  return str.split(';');
}

function encodeToRot13(str) {
  return str
    .split('')
    .map((char) => {
      const charCode = char.charCodeAt(0);
      if (char >= 'a' && char <= 'z') {
        return String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
      }
      if (char >= 'A' && char <= 'Z') {
        return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
      }
      return char;
    })
    .join('');
}

function getCardId(value) {
  const suits = ['♣', '♦', '♥', '♠'];
  const values = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];

  const suit = value.slice(-1);
  const cardValue = value.slice(0, -1);

  const suitIndex = suits.indexOf(suit);
  const valueIndex = values.indexOf(cardValue);

  return suitIndex * 13 + valueIndex;
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
