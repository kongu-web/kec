const fs = require('fs');
const path = require('path');

const baseImgPath = "src/assets/images/faculty images";
const baseCsvPath = "public/Faculty";

async function cleanupAndSanitize() {
    const folders = fs.readdirSync(baseImgPath);
    for (const folder of folders) {
        const folderPath = path.join(baseImgPath, folder);
        if (!fs.statSync(folderPath).isDirectory()) continue;

        const files = fs.readdirSync(folderPath);
        for (const file of files) {
            const fullPath = path.join(folderPath, file);
            if (file.toLowerCase().endsWith('.webp')) {
                // Sanitize webp filename: lowercase and replace spaces with underscore
                let sanitizedName = file.toLowerCase().replace(/ /g, '_');
                const sanitizedPath = path.join(folderPath, sanitizedName);
                if (fullPath !== sanitizedPath) {
                    if (fs.existsSync(sanitizedPath)) {
                        // If it already exists (unlikely unless dupes), just delete this one
                        fs.unlinkSync(fullPath);
                    } else {
                        fs.renameSync(fullPath, sanitizedPath);
                        console.log(`Renamed: ${file} -> ${sanitizedName}`);
                    }
                }
            } else {
                // Delete original files (jpg, png, jpeg)
                fs.unlinkSync(fullPath);
                console.log(`Deleted: ${file}`);
            }
        }
    }
}

async function sanitizeCsvData() {
    const csvFiles = fs.readdirSync(baseCsvPath).filter(f => f.endsWith('.csv'));
    for (const csvFile of csvFiles) {
        const csvFilePath = path.join(baseCsvPath, csvFile);
        let content = fs.readFileSync(csvFilePath, 'utf8');
        const lines = content.split('\n');
        
        const updatedLines = lines.map(line => {
            if (!line.trim()) return line;
            const parts = line.split(',');
            if (parts.length > 0) {
                // First part is the filename
                // It's already turned into .webp by previous script, but might still have spaces/caps
                parts[0] = parts[0].toLowerCase().replace(/ /g, '_');
                return parts.join(',');
            }
            return line;
        });
        
        fs.writeFileSync(csvFilePath, updatedLines.join('\n'));
        console.log(`Sanitized CSV: ${csvFile}`);
    }
}

async function run() {
    console.log("Cleaning up original images and sanitizing WebP filenames...");
    await cleanupAndSanitize();
    console.log("Sanitizing CSV references...");
    await sanitizeCsvData();
    console.log("Final check complete.");
}

run();
