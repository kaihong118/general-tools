import { SwapAgent } from '@wallet-manager/pfh-pmp-node-def-types';
import fs from 'fs';
import moment from 'moment';
import readline from 'readline';

const template = `
-- :programName
UPDATE swap_agent.distributor_agent_programs
SET
    last_modified_by = 'Data Patch',
    last_modified_date = now (),
    supported_platform = :supportedPlatform
WHERE
    id = ':id'
    AND program_agent_id = ':programAgentId'
    AND distributor_agent_id = ':distributorAgentId'
    AND program_name = ':programName';
`;

const data = [
  {
    id: 170,
    program_agent_id: 'PA-M001',
    distributor_agent_id: 'DA-0002@PA-M001',
    program_name: 'HKD_Consumer_P09',
    created_by: 'op2@golden-leasing.com',
    created_date: '2024-05-31T07:44:00.860Z',
    last_modified_by: 'op2@golden-leasing.com',
    last_modified_date: '2024-05-31T07:44:00.860Z',
    status: 1,
    rebate_mode: 2,
    da_rebate_rate: 0.0,
    customer_rebate_rate: 0.0,
    supported_platform: 1,
  },
];

function generateSQL(
  template: string,
  params: Record<string, string | number>,
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
    'Do you have a devOps Ticket Number? (Y/N)',
  );

  if (isDevOpsTicket === 'Y') {
    ticketNo = await askQuestion('Enter the ticket number: ');
  }

  let outputSql = 'BEGIN;\n';

  for (const x of data) {
    const sql = generateSQL(template, {
      id: x.id,
      programAgentId: x.program_agent_id,
      distributorAgentId: x.distributor_agent_id,
      programName: x.program_name,
      supportedPlatform:
        SwapAgent.EnumDistributorAgentProgramSupportedPlatform.API,
    });

    outputSql += sql;
  }
  outputSql += '\nCOMMIT;';

  fs.writeFileSync(
    `/Users/lucas/Downloads/SQL/[swap_agent] Data patch to update supportedPlatform (${ticketNo}) ${moment().format(
      'YYYYMMDD',
    )}.sql`,
    outputSql,
    'utf8',
  );
  console.log(`✅ SQL file written`);
}

run();
