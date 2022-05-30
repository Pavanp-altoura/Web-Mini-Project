const dbHelper = require('../helper/dbHelper.js')



module.exports.getDesignationId= function getDesignationId() {
    let query=`SELECT Designation_Id FROM altoura.roles`;
    return new Promise((resolve,reject)=>{
        dbHelper.queryFromDB(query).then((result)=>{
            resolve(result);
        })

        })
   
}
//SELECT Designation_Id FROM altoura.roles;

module.exports.getAllEmployees= function getAllEmployees() {
    let query=`select * from Employee_details`;
  
    return new Promise((resolve,reject)=>{
        dbHelper.queryFromDB(query).then((result)=>{
            resolve(result);
        })

    })
   
}


// Starts here previous code
module.exports.getAllDesignation= function getAllDesignation() {
    let query=`select  altoura.roles.Id, altoura.roles.Emp_Id, First_Name, Last_Name, altoura.roles.Designation, altoura.roles.Designation_Id 
    from altoura.employee_details as ed 
    inner join altoura.roles on ed.Emp_Id = roles.Emp_Id
    `;
    return new Promise((resolve,reject)=>{
        dbHelper.queryFromDB(query).then((result)=>{
            resolve(result);
        })

        })
   
}