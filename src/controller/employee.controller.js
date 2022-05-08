//const Employee = require('../models/employee.model');
const  EmployeeModel = require('../models/employee.model');

// Get all employee list

exports.getEmployeeList = (req, res) =>{
   // console.log('Here is all esmployees list');
   EmployeeModel.getAllEmployees((err, employees) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Employees', employees);
        res.send(employees)
   })
 }

 // Get Employee by Id

 exports.getEmployeeById = (req, res) =>{
     //console.log('Get employee by Id');
    EmployeeModel.getEmployeeById(req.params.id, (err, employee) =>{
        if(err)
        res.send(err);
        console.log('single employee data', employee);
        res.send(employee); 
    })
 }

 //Create New Employee

 exports.createNewEmployee = (req, res) => {
     //console.log('Req Data', req.body);
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData', employeeReqData);
     // Check Null Values
     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
         res.send(400).send({success:false, message: "Please fill all fields"});
     }else{
         EmployeeModel.createEmployee(employeeReqData, (err, employee) =>{
             if(err)
                 res.send(err);
                 res.json({status: true, message: 'Employee created successfully', data: employee.insertId}) 
         })
     }
 }


 // Update existing employee
 exports.updateEmployee = (req, res)=>{
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData', employeeReqData);
    // Check Null Values
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: "Please fill all fields"});
    }else{
        EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee) =>{
            if(err)
                res.send(err);
                res.json({status: true, message: 'Employee updated successfully'}) 
        })
    }
 }

 //Delete Employee record

 exports.deleteEmployee = (req,res) =>{
     EmployeeModel.deleteEmployee(req.params.id, (err, employee) =>{
         if(err)
         res.send(err);
         res.json({success: true, message: 'Employee Deleted Successfully'});
     })
 }