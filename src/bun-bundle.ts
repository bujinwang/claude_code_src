/**
 * Shim for bun:bundle virtual module.
 * 
 * This module provides runtime equivalents of Bun's build-time macros.
 * It should be imported before any code that uses feature(), define(), etc.
 */

// MACRO globals - these are normally inlined at build time
declare global {
  var MACRO: {
    VERSION: string;
    NODE_VERSION: string;
  };
}

// Set default values for MACRO globals if not already defined
if (typeof (globalThis as any).MACRO === 'undefined') {
  (globalThis as any).MACRO = {
    VERSION: '2.1.88',
    NODE_VERSION: '18.0.0',
  };
}

// bun:bundle feature flag system
// These control which features are enabled at runtime
const featureFlags: Record<string, boolean> = {
  // Core features
  ABLATION_BASELINE: false,
  DUMP_SYSTEM_PROMPT: false,
  CHICAGO_MCP: false,
  DAEMON: false,
  CLAUDE_IN_CHROME: true,
  CHROME_NATIVE_HOST: true,
  BRIDGE: true,
  BTW: true,
  COPY: true,
  EFFORT: true,
  INSIGHTS: true,
  PLUGIN: true,
  RESUME: true,
  REVIEW: true,
  SECURITY_REVIEW: true,
  SESSION: true,
  TAG: true,
  THINKBACK: true,
  ULTRAPLAN: true,
  VOICE: true,
  REMOTE_ENV: true,
  MOBILE: true,
  ASSISTANT: false,
  CCR: false,
  DAEMON_WORKER: false,
};

/**
 * Feature flag check - mimics bun:bundle's feature() function
 */
export function feature(name: string): boolean {
  return featureFlags[name] ?? false;
}

/**
 * Define macro - mimics bun:bundle's define() function
 */
export function define(name: string): string | undefined {
  const p = (globalThis as any).process;
  const defines: Record<string, string> = {
    'process.env.NODE_ENV': p?.env?.NODE_ENV || 'production',
    'process.platform': p?.platform || 'unknown',
    'process.arch': p?.arch || 'unknown',
  };
  return defines[name];
}

/**
 * Text macro - mimics bun:bundle's text() function
 */
export function text(path: string): string {
  throw new Error(`text() macro not supported for: ${path}`);
}
