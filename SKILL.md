---
name: md-to-pdf
description: Convert Markdown files to PDF documents using the md-to-pdf tool. Use when user needs to convert .md files to .pdf format, generate PDFs from Markdown content, or create printable documents from Markdown files.
metadata:
  {
    "openclaw":
      {
        "emoji": "📄",
        "requires": { "bins": ["md-to-pdf"] },
        "install":
          [
            {
              "id": "npm",
              "kind": "npm",
              "package": "md-to-pdf",
              "bins": ["md-to-pdf"],
              "label": "Install md-to-pdf (npm)",
            },
          ],
      },
  }
---

# Markdown to PDF Converter

Convert Markdown files to beautifully formatted PDF documents.

## Quick Start

```bash
# Convert a markdown file to PDF (auto-named output)
md-to-pdf document.md

# Specify output filename
md-to-pdf document.md output.pdf

# Using the wrapper script
node scripts/md-to-pdf.js document.md output.pdf
```

## Installation

Install md-to-pdf globally:

```bash
npm install -g md-to-pdf
```

## Usage

### Basic Conversion

```bash
# Auto-detect output name (document.md → document.pdf)
md-to-pdf input.md

# Specify output file
md-to-pdf input.md my-document.pdf
```

### Advanced Options

```bash
# Use custom CSS stylesheet
md-to-pdf input.md --stylesheet=style.css

# Set PDF options
md-to-pdf input.md --pdf-options='{"format": "A4", "margin": "20mm"}'

# Watch mode (auto-rebuild on changes)
md-to-pdf input.md --watch
```

## Features

- **Syntax highlighting** - Code blocks are highlighted automatically
- **GitHub-flavored Markdown** - Supports tables, strikethrough, task lists
- **Custom styling** - Use CSS to customize the PDF appearance
- **Header/Footer** - Add page numbers and custom headers/footers

## Resources

### scripts/

- `md-to-pdf.js` - Wrapper script for error handling and validation
