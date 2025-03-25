/**
 * Message Helper Testing
 */

import { MessageHelper } from '@wallet-manager/node-package-util';
import { ethers } from 'ethers';

const body = {
  totalAmount: 544,
  currency: 'HKDM',
  customerId: 'd317a868-928f-4c4f-9d0b-985f22c4f0ed',
  orderId: 'OR-99',
  payments: [
    {
      paymentType: 1,
      customerNumber: '3002X10001627100478',
      currency: 'HKDM-BEP20',
      amount: 544000000,
      decimals: 6,
    },
  ],
};

const stringJSON = `${JSON.stringify(body)}`;
const message = `1729497338000#7225665#9#${stringJSON}`;
const providedSignature =
  '0xbcd68872d9dd56bc708100b58c8f381da3cc30db3eb20553deb9f77f817732ba17cc45194b49129e8518225a0c2ae0eacc48bbd99b857e5a29f89e6d617809581b';

const test = async () => {
  const temp = `1729497338000#7225665#9#{"totalAmount":544,"currency":"HKDM","customerId":"d317a868-928f-4c4f-9d0b-985f22c4f0ed","orderId":"OR-99","payments":[{"paymentType":1,"customerNumber":"3002X10001627100478","currency":"HKDM-BEP20","amount":544000000,"decimals":6}]}`;
  // const temp = message;
  const _hashedMsg = ethers.utils.toUtf8Bytes(temp);
  const hashedMessage = ethers.utils.sha256(_hashedMsg);

  // const signature = MessageHelper.sign(
  //   hashedMessage,
  //   '0xffc6d50194738bff4bdbd116fab080cde7548cbc47b26577fe65f3ff0c9cfe1c'
  // );

  const res = MessageHelper.verify(
    hashedMessage,
    providedSignature,
    '0x0c307Bd4Feb71c7f50aD81D3fbB41461B9937b21'
  );

  console.log(`\n`);
  console.log(`StringJSON: ${stringJSON}`);

  console.log(`\n`);
  console.log(`HashedMessage: ${hashedMessage}`);

  console.log(`\n`);
  console.log(`Provided Signature: ${providedSignature}`);

  // console.log(`\n`);
  // console.log(`Signature: ${signature}`);

  console.log(`\n`);
  console.log(`Message: ${message}`);

  console.log(`\n`);
  console.log(`Result: ${res}`);
};

test();
