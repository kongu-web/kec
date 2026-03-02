const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processDirectory(directoryPath) {
    try {
        const files = fs.readdirSync(directoryPath);

        for (const file of files) {
            const fullPath = path.join(directoryPath, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                await processDirectory(fullPath);
            } else if (file.match(/\.(png|jpg|jpeg)$/i)) {
                const outputPath = path.join(directoryPath, file.replace(/\.[^/.]+$/, ".webp"));

                // Skip if a WebP version already exists
                if (!fs.existsSync(outputPath)) {
                    try {
                        const info = await sharp(fullPath)
                            .webp({ quality: 80 })
                            .toFile(outputPath);
                        console.log(`✅ Converted ${fullPath} -> .webp (${(info.size / 1024).toFixed(2)} kb)`);
                    } catch (err) {
                        console.error(`❌ Error converting ${fullPath}:`, err.message);
                    }
                }
            }
        }
    } catch (err) {
        console.error(`Unable to scan directory ${directoryPath}: ` + err);
    }
}

// Directories to scan
const directoriesToScan = [
    path.join(__dirname, 'public'),
    path.join(__dirname, 'src/assets')
];

async function run() {
    for (const dir of directoriesToScan) {
        if (fs.existsSync(dir)) {
            console.log(`Scanning directory: ${dir}`);
            await processDirectory(dir);
        }
    }
    console.log('✅ Conversion complete!');
}

run();
