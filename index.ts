import readline from 'readline';
import { spawn } from 'child_process';
import path from 'path';

// Setup readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Step 1: Ask for the folder name
rl.question(
  'Enter the folder name (e.g., test, abccWallet, cams): ',
  (testFolder) => {
    if (!testFolder) {
      console.error('No folder name provided. Exiting...');
      rl.close();
      process.exit(1);
    }

    // Step 2: Ask for the test file name
    rl.question(
      'Enter the file name (without extension, e.g. test_bignumber): ',
      (testFile) => {
        if (!testFile) {
          console.error('No test file name provided. Exiting...');
          rl.close();
          process.exit(1);
        }

        // Construct the full script path
        const scriptPath = path.join(
          __dirname,
          'src',
          testFolder,
          `${testFile}.ts`
        );

        console.log(`\nRunning test script: ${scriptPath}...\n`);

        // Run the test script using ts-node
        const child = spawn('ts-node', [scriptPath], {
          stdio: 'inherit',
          shell: true,
        });

        child.on('exit', (code) => {
          console.log(`Test script exited with code ${code}`);
          rl.close();
        });
      }
    );
  }
);
