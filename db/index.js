const util = require('util')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class DB {
    read() {
        return readFileAsync('db/db.json', 'utf8')
    }
    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note))
    }
    getNotes() {
        return this.read()
    }
    addNotes(uuid) {

    }
    removeNotes() {

    }
}

module.export = new DB();

// concat notes line 14
// call get notes use 2.then create parsed note
// add notes 3.then function to make it happen get notes function
// remove notes 2.then as function