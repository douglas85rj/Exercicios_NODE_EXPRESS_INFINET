const express = require('express')
const router = express.Router()

const departmentController = require('../controller/departmentController')

router.get('/', departmentController.getDepartments)
router.post('/add',departmentController.addDepartments)
router.delete('/:id',departmentController.removeDepartment)

module.exports= router