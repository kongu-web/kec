const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const baseImgPath = "src/assets/images/faculty images";
const baseCsvPath = "public/Faculty";

async function convertImages() {
    const folders = fs.readdirSync(baseImgPath);
    for (const folder of folders) {
        const folderPath = path.join(baseImgPath, folder);
        if (!fs.statSync(folderPath).isDirectory()) continue;

        const files = fs.readdirSync(folderPath);
        for (const file of files) {
            if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.png')) {
                const inputPath = path.join(folderPath, file);
                const outputPath = path.join(folderPath, path.parse(file).name.toLowerCase() + ".webp");
                
                try {
                    await sharp(inputPath)
                        .webp({ quality: 80 })
                        .toFile(outputPath);
                    console.log(`Converted: ${file} -> ${path.basename(outputPath)}`);
                    // We will NOT delete original files yet to be safe, but we'll rename to lowercase for parity if needed.
                } catch (err) {
                    console.error(`Failed to convert ${file}:`, err);
                }
            }
        }
    }
}

async function updateCsvs() {
    const csvFiles = fs.readdirSync(baseCsvPath).filter(f => f.endsWith('.csv'));
    for (const csvFile of csvFiles) {
        const csvFilePath = path.join(baseCsvPath, csvFile);
        let content = fs.readFileSync(csvFilePath, 'utf8');
        
        // Regex to match extensions in the first column
        // This is tricky if filenames have dots, but faculty images are usually simple.
        // We'll replace .jpg, .jpeg, .png (case insensitive) with .webp
        const updatedContent = content.replace(/\.(jpg|jpeg|png)([,\s])/gi, '.webp$2');
        
        if (content !== updatedContent) {
            fs.writeFileSync(csvFilePath, updatedContent);
            console.log(`Updated CSV: ${csvFile}`);
        }
    }
}

async function run() {
    console.log("Starting WebP Conversion...");
    await convertImages();
    console.log("Updating CSV data...");
    await updateCsvs();
    console.log("Done!");
}

run();
