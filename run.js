#!/usr/bin/env node
/**
 * Entry point for running Claude Code from source.
 * 
 * This script sets up the bun:bundle shim globals and then runs the CLI.
 */

// Set up MACRO global before any other imports
globalThis.MACRO = {
  VERSION: '2.1.88',
  NODE_VERSION: '18.0.0',
};

// Import the CLI - the bun:bundle import will be resolved by our tsconfig paths
import('./src/entrypoints/cli.tsx');
