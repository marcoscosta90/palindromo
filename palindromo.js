const string = 'marcos';

const palindromo = (inString) => {
  inString = inString.toLowerCase();

  return inString === inString.split('').reverse().join('');
}

console.log(palindromo(string));