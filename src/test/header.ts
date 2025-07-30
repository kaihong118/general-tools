/**
 * Message Helper Testing
 */

import { MessageHelper } from '@wallet-manager/node-package-util';
import moment from 'moment';

const data = {
  merchantId: 6,
  programAgentId: 'PA-ABCC',
  distributorAgentId: 'DA-ABCC@PA-ABCC',
  firstName: 'TESTING',
  lastName: 'ABCC',
  email: 'eu39+abcc14@18m.dev',
  phoneCountryCode: '+852',
  phoneNumber: '98765432',
  customerNumber: '3002X10002560940136',
  idIssuedBy: '*N/A*',
  idType: 3,
  idNumber: '123112',
  dateOfBirth: '1992-11-08',
  referralCode: 'ABCC_REFERRAL_CODE',
  questionVersion: 2,
  answers: {
    title: 1,
    alias: '***N/A***',
    chineseName: '***N/A***',
    gender: 'Male',
    idTypeOthers: null,
    idDateOfIssue: '0000-00-00',
    idDateOfExpiry: '0000-00-00',
    nationality: 'KOR',
    usCitizenship: false,
    purposeForApplying: 9999,
    purposeForApplyingOthers: '***N/A***',
    maritalStatus: 1,
    educationLevel: 9999,
    educationLevelOthers: '***N/A***',
    authorizedToThirdParty: false,
    companyName: '***N/A***',
    jobTitle: 9999,
    jobTitleOthers: '***N/A***',
    industry: 9999,
    industryOthers: '***N/A***',
    employmentStatus: 1,
    employmentStartDate: null,
    monthlySalaryHKD: '***N/A***',
    otherIncomeHKD: '***N/A***',
    officeTelephoneNumber: '***N/A***',
    residentialStatus: 9999,
    residentialStatusOthers: '***N/A***',
    residentialTelephoneNumber: '***N/A***',
    residentialAddressLine1: '45 Jongno 3-ga, Jongno-gu, Seoul, South Korea ',
    residentialAddressLine2: null,
    residentialAddressLine3: null,
    residentialPostalCode: '03198',
    residentialCity: 'Seoul',
    residentialCountry: 'KOR',
    deliveryAddressLine1: 'Verve Residences Tower 2, Unit 2017 ',
    deliveryAddressLine2: '9th Avenue corner 26th Street',
    deliveryAddressLine3: 'Bonifacio Global City, Taguig City',
    deliveryPostalCode: '1634',
    deliveryCity: 'Metro Manila',
    deliveryCountry: 'PHL',
  },
};
const privateKey =
  '0x8d1f2396e33b56301ea9bb53e0373cf42d899527731a70af68ce68bbf1ab7c77';
const address = '0x29D02F89EbB2493F24Fcad10E2B329B1CD5e8e0a';
const session = '0';
const sequence = 0;
const timestamp = moment().toISOString();

const test = async () => {
  const headers = await MessageHelper.createRequestHeader(
    privateKey,
    address,
    session,
    sequence,
    data
  );

  console.log(headers);
};

test();
