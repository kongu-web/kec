const fs = require('fs');
const path = require('path');

function processDirectory(directoryPath) {
    try {
        const files = fs.readdirSync(directoryPath);

        for (const file of files) {
            const fullPath = path.join(directoryPath, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                processDirectory(fullPath);
            } else if (file.match(/\.(jsx|js|css)$/)) {
                let content = fs.readFileSync(fullPath, 'utf8');
                let originalContent = content;

                // This will replace imports and string paths like .png", .png', .jpg', etc.
                content = content.replace(/\.png(['"`])/gi, '.webp$1');
                content = content.replace(/\.jpg(['"`])/gi, '.webp$1');
                content = content.replace(/\.jpeg(['"`])/gi, '.webp$1');

                // This will replace CSS url(image.png) formats
                content = content.replace(/\.png\)/gi, '.webp)');
                content = content.replace(/\.jpg\)/gi, '.webp)');
                content = content.replace(/\.jpeg\)/gi, '.webp)');

                if (content !== originalContent) {
                    fs.writeFileSync(fullPath, content, 'utf8');
                    console.log(`✅ Updated imports in: ${fullPath}`);
                }
            }
        }
    } catch (err) {
        console.error(`Unable to scan directory ${directoryPath}: ` + err);
    }
}

// Scanning the entire src directory to update all React components and CSS files
const dirToScan = path.join(__dirname, 'src');
console.log('Scanning directory to update imports:', dirToScan);
processDirectory(dirToScan);
console.log('Done!');
