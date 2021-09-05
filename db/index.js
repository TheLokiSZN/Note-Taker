const util = require('util')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
const readFileNote = util.promisify(fs.readFile)
const writeFileNote = util.promisify(fs.writeFile)

class Index {
    read() {
        return readFileNote('db/db.json', 'utf8')
    }
    write(note) {
        return writeFileNote('db/db.json', JSON.stringify(note))
    }
    getNotes() {
        return this.read()
        .then(notes => {
            return JSON.parse(notes) || [];
        })
    }
    addNote(note) {
        const { title, text } = note
        if (!title || !text ) {
            throw new Error("Title and content cannot be blank")
        }
        const newNote = { title, text, id: uuidv4() }
        return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => this.newNote)
    }
    removeNote(id) {
        return this.getNotes()
        .then(notes => notes.filter(note => note.id !== id))
        .then(savedNotes => this.write(savedNotes))
    }
}

module.exports = new Index();

// concat notes line 14
// call get notes use 2.then create parsed note
// add notes 3.then function to make it happen get notes function
// remove notes 2.then as function