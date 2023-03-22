const express = require('express')

const router = express.Router()

const capLogController = require('../controllers/capLogController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for capLogs, attach it to router along with the controller logic
router.get('/', capLogController.index)

// Setup a "new" route for creating capLog
router.get('/new', capLogController.new)

router.delete('/clear', capLogController.delete)

// Setup a "delete" route for removing a specific capLog
router.delete('/:id', capLogController.delete)

// Setup a "update" route for updating a specific capLog
router.put('/:id', capLogController.update)

router.post('/seed', capLogController.seed)

// Setup a "create" route for adding capLog data
router.post('/', capLogController.create)

// Setup a "edit" route for editing a capLog
router.get('/:id/edit', capLogController.edit)

// Setup an "show" route for capLogs, attach it to router along with the controller logic
router.get('/:id', capLogController.show)


module.exports = router;