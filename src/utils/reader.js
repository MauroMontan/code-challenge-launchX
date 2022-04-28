import * as fs from 'fs';

class FileReader {
    static loadJson(filename) {
        fs.readFileSync(`./data/${filename}.json`);
    }

}


export default FileReader;

