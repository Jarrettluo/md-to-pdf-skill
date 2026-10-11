#!/usr/bin/env node
/**
 * md-to-pdf: Convert Markdown files to PDF
 * Usage: node md-to-pdf.js <input.md> [output.pdf]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputFile = process.argv[2];
const outputFile = process.argv[3];

if (!inputFile) {
    console.error('Usage: md-to-pdf <input.md> [output.pdf]');
    process.exit(1);
}

if (!fs.existsSync(inputFile)) {
    console.error(`Error: File not found: ${inputFile}`);
    process.exit(1);
}

// Check if md-to-pdf is installed
try {
    execSync('which md-to-pdf', { stdio: 'ignore' });
} catch {
    console.error('Error: md-to-pdf is not installed.');
    console.error('Install with: npm install -g md-to-pdf');
    process.exit(1);
}

// Determine output filename
const output = outputFile || inputFile.replace(/\.md$/i, '.pdf');

// Run conversion
console.log(`Converting ${inputFile} → ${output}...`);

try {
    execSync(`md-to-pdf "${inputFile}" --out="${output}"`, {
        stdio: 'inherit',
        cwd: process.cwd()
    });
    console.log(`✓ Conversion complete: ${output}`);
} catch (err) {
    console.error('Conversion failed:', err.message);
    process.exit(1);
}
