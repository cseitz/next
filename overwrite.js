const { resolve, extname } = require('path');
const __next = resolve(process.cwd(), 'node_modules', 'next/dist');
const __lib = resolve(__next, 'lib');

const fs = require('fs');
function overwrite(dir, dir_ = '') {
    for (const file of fs.readdirSync(dir)) {
        const ext = extname(file);
        if (ext == '.js') {
            const dest = resolve(__next, dir_.substr(1), file);
            // console.log(resolve(__next, dir_.substr(1), file));
            // Object.assign(require(dest), require(resolve(dir, file)));
            console.log([resolve(dir, file), dest])
            fs.writeFileSync(dest, fs.rea(resolve(dir, file)));
        } else {
            overwrite(resolve(dir, file), dir_ + '/' + file);
        }
    }
}

overwrite(resolve(__dirname, 'overwrites'));