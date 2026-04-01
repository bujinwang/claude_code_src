#!/usr/bin/env node
/**
 * Entry point for running Claude Code from the bundled package.
 * 
 * This script extracts and runs the bundled CLI from the original tarball.
 */

import { execFileSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const cliPath = join(__dirname, 'package', 'package', 'cli.js');

try {
  execFileSync('node', [cliPath, ...process.argv.slice(2)], {
    stdio: 'inherit',
    cwd: process.cwd()
  });
} catch (error) {
  process.exit(error.code ?? 1);
}
