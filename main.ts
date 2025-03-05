import { promises as fs } from "fs";
import path from "path";

const sourceDir = "/home/x-ae-x/Desktop/custom-express/customExpress/src/"; // example 
const targetDir = "/home/x-ae-x/Desktop/custom-express/customExpress/tests/"; // example test directory (not the test directory is not existent it will be created by the script)

async function copyAndRenameFiles(src: string, dest: string) {
    await fs.mkdir(dest, { recursive: true }); 

    const items = await fs.readdir(src, { withFileTypes: true });

    for (const item of items) {
        const srcPath = path.join(src, item.name);
        const destPath = path.join(dest, item.name.replace(/\.(\w+)$/, ".test.$1"));

        if (item.isDirectory()) {
            await copyAndRenameFiles(srcPath, path.join(dest, item.name)); // Recursive call since ffile structures are recursive
        } else {
            await fs.writeFile(destPath, ""); 
        }
    }
}

copyAndRenameFiles(sourceDir, targetDir)
    .then(() => console.log("Directory copied with renamed files."))
    .catch(console.error);
