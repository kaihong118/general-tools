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
    id: 163,
    program_agent_id: 'PA-G001',
    program_name: 'VQuick-G001-EXT-P11',
    kyc_idv_method: 3,
    question_type: 2,
  },
  {
    id: 164,
    program_agent_id: 'PA-G002',
    program_name: 'VQuick-G002-EXT-P12',
    kyc_idv_method: 3,
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
  const ticketNo = await askQuestion('Enter the ticket number: ');

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
