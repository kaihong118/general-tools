import fs from 'fs';
import moment from 'moment';
import UtilHelper from './utilHelper';

const template = `
--:eventType
INSERT INTO
    pmp_access.event_message_mappings (
        merchant_id,
        topic,
        event_type,
        message_type,
        send_tg_message
    )
VALUES
    (
        :merchantId,
        ':topic',
        ':eventType',
        :messageType,
        :sendTgMessage
    );
`;

const data = [
  {
    merchant_id: 6,
    topic: 'EVENT_OUT_PMP_PROGRAM',
    event_type: 'online-transaction',
    message_type: 1,
    send_tg_message: false,
  },
];

async function run() {
  let outputSql = 'BEGIN;\n';

  for (const x of data) {
    const sql = UtilHelper.generateSQL(template, {
      merchantId: x.merchant_id,
      topic: x.topic,
      eventType: x.event_type,
      messageType: x.message_type,
      sendTgMessage: x.send_tg_message,
    });

    outputSql += sql;
  }
  outputSql += '\nCOMMIT;';

  fs.writeFileSync(
    `/Users/lucas/Downloads/SQL/[pmp_access] Add new event mapping ${moment().format(
      'YYYYMMDD',
    )}.sql`,
    outputSql,
    'utf8',
  );
  console.log(`✅ SQL file written`);
}

run();
