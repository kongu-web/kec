const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src/assets/images/Placement/Companies");
const outputFile = path.join(__dirname, "src/utils/companyImages.js");

const categories = fs
  .readdirSync(baseDir)
  .filter((name) => fs.statSync(path.join(baseDir, name)).isDirectory());

let imports = "";
let mapping = "export const companyImages = {\n";

categories.forEach((category) => {
  const folder = path.join(baseDir, category);

  const files = fs
    .readdirSync(folder)
    .filter((file) => /\.(png|jpe?g|webp|svg|avif|jfif)$/i.test(file));

  mapping += `  "${category}": [\n`;

  files.forEach((file, i) => {
    const safeName = `${category.replace(/\W/g, "")}_${i}`;

    imports += `import ${safeName} from "../assets/images/Placement/Companies/${category}/${file}";\n`;
    mapping += `    ${safeName},\n`;
  });

  mapping += "  ],\n";
});

mapping += "};\n";

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, imports + "\n" + mapping);

console.log("companyImages.js generated successfully!");