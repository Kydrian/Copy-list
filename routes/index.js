const router = require('express').Router(); //importing express router
const notesRouter = require('./notes');// importing notes router
router.use('/notes', notesRouter); //use notes router

module.exports = router; //exporting router