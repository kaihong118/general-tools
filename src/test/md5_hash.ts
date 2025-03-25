import SecretGenerator from '../utils/SecretGenerator';

const hashedString = SecretGenerator.generateMd5HashedString(
  'mark71607197@gmail.com'
);
console.log(hashedString);
