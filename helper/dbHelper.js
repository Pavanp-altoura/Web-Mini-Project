const {
    createPool
} = require('mysql');

module.exports.getAllEmployees= function getAllEmployees(){
    return   ;
}

module.exports.getDesignationId= function getDesignationId(){
    return ;
}


module.exports.getAllDesignation= function getAllDesignation(){
    return ;
}


const pool = createPool({
    host:"localhost",
    user:"root",
    password:"Baj09011",
    database: "altoura",
    connectionLimit:20


})

module.exports.queryFromDB = function(query){
    let sqlQuery = query;
    return new Promise((resolve,reject)=>{

        pool.query(sqlQuery, (err,result, fields) => {
            if(err){
                reject(err);
            }
            console.log("inside querryfromDb",result[0]);
            resolve(result);
        })
    })
}




