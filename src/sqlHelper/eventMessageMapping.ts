import fs from 'fs';
import moment from 'moment';
import readline from 'readline';

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

function generateSQL(
  template: string,
  params: Record<string, string | number | boolean>
): string {
  return template.replace(/:([a-zA-Z0-9_]+)/g, (_, key) => {
    const val = params[key];
    if (val === undefined) {
      throw new Error(`Missing value for placeholder ":${key}"`);
    }
    return String(val);
  });
}

function askQuestion(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function run() {
  // const ticketNo = await askQuestion('Enter the ticket number: ');

  let outputSql = 'BEGIN;\n';

  for (const x of data) {
    const sql = generateSQL(template, {
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
      'YYYYMMDD'
    )}.sql`,
    outputSql,
    'utf8'
  );
  console.log(`✅ SQL file written`);
}

run();
