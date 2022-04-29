
import FileReader from '../src/utils/reader.js';


describe('test suit for utils', () => {

    test('1) load data from json file', () => {
        const data = FileReader.loadJson('visualpartners');

        expect.arrayContaining(data);

    });

});
