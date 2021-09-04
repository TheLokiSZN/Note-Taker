const router = require('express').Router();
const index = require('../db/index');

// router.get, router.post, router.delete
router.get('/notes', (req, res) => {
    index
        .getNotes()
        .then(notes => {
            res.json(notes)
        })
        .catch (err => {
            res.status(404).json(err)
        })
})

router.post('/notes', (req, res) => {
    index
        .addNotes(req.body)
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.status(404).json(err)
        })
})

router.delete('/notes/:id', (req, res) => {
    index
        .removeNotes(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(404).json(err))
})
// class function from index.js

module.exports = router;