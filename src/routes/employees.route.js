const express = require('express');
const router = express.Router();

const employeeController = require('../controller/employee.controller');

// Get all employees
router.get('/', employeeController.getEmployeeList);

//Get Employee by ID
router.get('/:id', employeeController.getEmployeeById);

// Create New Employee
router.post('/', employeeController.createNewEmployee);

//Update employee
router.put('/:id', employeeController.updateEmployee);

//Delete employees
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;

