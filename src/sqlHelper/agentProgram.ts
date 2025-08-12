import fs from 'fs';
import moment from 'moment';
import readline from 'readline';

const template = `
-- :programName
UPDATE swap_agent.agent_programs
SET
  kyc_idv_method = :kycMethod,
  question_type = :questionType,
  last_modified_date = now ()
WHERE
  id = ':id'
  AND program_agent_id = ':programAgentId'
  AND program_name = ':programName';
`;

const data = [
  {
    id: 128,
    program_agent_id: 'PA-E001',
    program_name: 'VGL-E001-PURPLEP141',
    created_by: null,
    created_date: '2025-04-02T08:17:03.106Z',
    last_modified_by: null,
    last_modified_date: '2025-06-30T01:59:07.529Z',
    program_display_name: 'PURPLEP141',
    program_currency: 'HKD',
    credit_token_name: 'HKDM',
    credit_currency: 'HKDM-ERC20',
    kyc_idv_method: 1,
    question_type: 2,
  },
];

function generateSQL(
  template: string,
  params: Record<string, string | number>
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
  let ticketNo = '00000';
  const isDevOpsTicket = await askQuestion(
    'Do you have a devOps Ticket Number? (Y/N)'
  );

  if (isDevOpsTicket === 'Y') {
    ticketNo = await askQuestion('Enter the ticket number: ');
  }

  let outputSql = 'BEGIN;\n';

  for (const x of data) {
    const sql = generateSQL(template, {
      id: x.id,
      programAgentId: x.program_agent_id,
      programName: x.program_name,
      kycMethod: 1,
      questionType: 2,
    });

    outputSql += sql;
  }
  outputSql += '\nCOMMIT;';

  fs.writeFileSync(
    `/Users/lucas/Downloads/SQL/[swap_agent] Data patch to update idvMethod and questionType (${ticketNo}) ${moment().format(
      'YYYYMMDD'
    )}.sql`,
    outputSql,
    'utf8'
  );
  console.log(`✅ SQL file written`);
}

run();
