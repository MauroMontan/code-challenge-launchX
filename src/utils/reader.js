import * as fs from 'fs';

class FileReader {
    static loadJson(filename) {
        const data = fs.readFileSync(`./src/data/${filename}.json`);

        return JSON.parse(data);
    }

}


export default FileReader;

