import winston from 'winston';
import PasswordHelper from '../utils/PasswordHelper';
import MessageHelper from '../utils/MessageHelper';

const logger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console()],
});

//Access: 1c9f296758bc8578812d8c0b55e7a70ce384841de1b5a84a8958db2478dc02f1
//Master: 02ca6a3b17e0a5ae0cbf6447d96de13fa4c0261221b7c73bde85419eb5e4e478
//Handler: a17475dafcc1c849f9676b2cd288a03470d8a7a90a90283d39c3478573e006d6
//GwMqConnector: 0x3eb8142ada5750593e912f6754e7c440c46ad9eb3cfa4ed8fe80c979088dec1e
//Merchant1: 0x84bb085857314b6d750460f7dad0d73864a660c371cecb1cef257ffaa80a52e7
//Merchant6: 0xe4ae94d86fd7e8d29b7a0bd976fa9fe2796f5ea375e49ef14fef2f8d6ee2a993

const keyPair = PasswordHelper.generateKeyPair(
  '3eb8142ada5750593e912f6754e7c440c46ad9eb3cfa4ed8fe80c979088dec1e'
);
logger.info(`Public Key: ${keyPair.publicKey}`);
logger.info(`Private Key: ${keyPair.privateKey}`);
logger.info(`Address : ${keyPair.address}`);

const headers = MessageHelper.createRequestHeader(
  keyPair.privateKey,
  keyPair.address,
  '487425',
  1,
  {
    redirectToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjaGFudElkIjo2LCJjdXN0b21lcklkIjoiOTY2N2Y3ODktZjFhNi00NjlkLTlkY2UtMDg1ZTU5NWUwMzgyIiwiZW1haWwiOiJldTM5QDE4bS5kZXYiLCJwaG9uZUNvdW50cnlDb2RlIjoiKzg1MiIsInBob25lTnVtYmVyIjoiOTM0OTk2OTkiLCJ0b2tlblR5cGUiOjExLCJzbm93Rmxha2UiOiIzNDUyOTI5IiwiaWF0IjoxNzI2ODIyOTY1LCJleHAiOjE3MjY4MjY1NjV9.32IYcIyTWpf_WMAT9_tDXVJvwq2JfvY2xk2wQIouO7Y',
  }
);

console.log(headers);
