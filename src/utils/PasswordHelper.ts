import { BytesLike, ethers } from 'ethers';
import { ExternallyOwnedAccount } from '@ethersproject/abstract-signer';
import { SigningKey } from 'ethers/lib/utils';
import { Provider } from '@ethersproject/abstract-provider';
import generator from 'generate-password';

export default class PasswordHelper {
  /**
   * @param options generator.GenerateOptions
   * @returns  Return random generate password
   */
  public static generatePassword(options: generator.GenerateOptions) {
    return generator.generate(options);
  }

  /**
   *
   * @returns ethers.Wallet
   */
  public static generateKeyPair(
    privateKey?: BytesLike | ExternallyOwnedAccount | SigningKey,
    provider?: Provider
  ): ethers.Wallet {
    if (privateKey) {
      return new ethers.Wallet(privateKey, provider);
    } else {
      return ethers.Wallet.createRandom();
    }
  }
}
