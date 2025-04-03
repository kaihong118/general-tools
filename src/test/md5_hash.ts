import SecretGenerator from '../utils/SecretGenerator';

const hashedString = SecretGenerator.generateMd5HashedString(
  'kaen333999@outlook.com'
);
console.log(hashedString);
