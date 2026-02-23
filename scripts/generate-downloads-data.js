const fs = require('fs');
const path = require('path');

// Paths relative to where the script is run (root) or absolute
// Assuming run from project root: node scripts/generate-downloads-data.js
const ARCHIVED_DIR = path.join(__dirname, '../public/files/iqac/downloads/archived');
const OUTPUT_FILE = path.join(__dirname, '../src/components/IQAC/IqacDownloads/archived_data.json');

console.log(`Scanning: ${ARCHIVED_DIR}`);

if (!fs.existsSync(ARCHIVED_DIR)) {
    console.warn(`Archived directory not found: ${ARCHIVED_DIR}`);
    // Create empty file to prevent import errors
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ copo: [], pdf: [], doc: [] }, null, 2));
    process.exit(0);
}

try {
    const files = fs.readdirSync(ARCHIVED_DIR);

    const data = {
        copo: [],
        pdf: [],
        doc: []
    };

    files.forEach(file => {
        if (file.startsWith('.')) return; // Skip hidden system files

        const ext = path.extname(file).toLowerCase();

        if (ext === '.pdf') {
            data.pdf.push(file);
        } else if (['.doc', '.docx', '.xls', '.xlsx'].includes(ext)) {
            data.doc.push(file);
        }
    });

    // Ensure output directory exists (src/components/IQAC/IqacDownloads)
    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2));
    console.log(`Successfully generated archived_data.json`);
    console.log(`PDFs: ${data.pdf.length}, DOCs: ${data.doc.length}`);

} catch (err) {
    console.error("Error generating archived file list:", err);
    process.exit(1);
}
