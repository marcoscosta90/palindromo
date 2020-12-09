const string = 'did';

const palindromo = (inString) => {
  inString = inString.toLowerCase();

  return inString === inString.split('').reverse().join('');
}

console.log(palindromo(string));