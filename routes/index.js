var express = require('express');
var router = express.Router();
var employemodel = require('../model/employeModel.js')
/* GET home page. */





router.get('/a', function(req, res, next) {
  let employees = employemodel.getAllEmployees().then((allemployees)=>{
    console.log("employee details from databese",allemployees[0])
    res.render('newDesign2', { title: 'Pavan P' , employeesArray: allemployees });
  });
});

router.get('/b', function(req, res, next) {
  let employees = employemodel.getAllEmployees().then((allemployees)=>{
    console.log("employee details from databese",allemployees[0])
    res.render('index', { title: 'Pavan P' , employeesArray: allemployees });
  });
  
});

router.get('/c', function(req, res, next) {
  let employees = employemodel.getDesignationId().then((DesignationId)=>{
    console.log("employee details from databese",DesignationId[0])
    res.render('indexForId', { title: 'Pavan P' , designationArray:DesignationId});
  });
  
});


router.get('/d', function(req, res, next) {
  let employees = employemodel.getAllDesignation().then((AllDesignation)=>{
    console.log("employee details from databese",AllDesignation[0])
    res.render('indexForD', { title: 'Pavan P' , alldesignationArray:AllDesignation});
  });
  
});







router.get('/e', function(req, res, next) {
  
  let allemployeesDB=[];
  employemodel.getAllEmployees().then((allemployees)=>{
    allemployeesDB=allemployees;
    console.log("employee details from databese",allemployees[1]);
    return employemodel.getDesignationId();

  }).then((DesignationId) => {
    //console.log(designationEmp)
    console.log("In the Index.js file")
    console.log(DesignationId[0])
    res.render('newDesign4', { title: 'Pavan P' , employeesArray:allemployeesDB ,designationArray:DesignationId});
  
  })
  
});


router.get('/g', function(req, res, next) {
  
  let allemployeesDB=[];
  employemodel.getAllEmployees().then((allemployees)=>{
    allemployeesDB=allemployees;
    console.log("employee details from databese",allemployees[1]);
    return employemodel.getAllDesignation();

  }).then((AllDesignation) => {
    //console.log(designationEmp)
    console.log("In the Index.js file")
    console.log(AllDesignation[0])
    res.render('Final', { title: 'Pavan P' , employeesArray:allemployeesDB ,AllDesignationArray:AllDesignation});
  
  })
  
});



router.get('/f', function(req, res, next) {
  let employees = employemodel.getAllEmployees().then((allemployees)=>{
    console.log("employee details from databese",allemployees)
    res.render('newDesign2', { title: 'Pavan P' , employeesArray: allemployees });
  });


  
  
});





// router.get('/e', function(req, res, next) {
  
//   let allemployees=[];
//   let employees = employemodel.getAllEmployees().then((allemployees)=>{
//     allemployees=allemployees;
//     console.log("employee details from databese",allemployees[1]);
//     return employemodel.getAllDesignation();

//   }).then((designationEmp) => {
//     //console.log(designationEmp)
//     console.log("In the Index.js file")
//     console.log(designationEmp[0])
//     res.render('newDesign2', { title: 'Pavan P' , employeesArray: allemployees ,designationArray:designationEmp});
  
//   })
  
// });








// router.get('/sub', function(req, res, next) {
//   res.render('newDesign', { title: 'Pavan P', imageArray:
//   [{name:"proj1",desc:"desc1"},{name:"proj2",desc:"desc2"},
//   {name:"proj3",desc:"desc3"},{name:"proj4",desc:"desc4"},{name:"proj4",desc:"desc4"}
//   ,{name:"proj4",desc:"desc4"},{name:"proj4",desc:"desc4"}
//   ,{name:"proj4",desc:"desc4"},{name:"proj4",desc:"desc4"}
//   ,{name:"proj4",desc:"desc4"},{name:"proj4",desc:"desc4"}
//   ,{name:"proj4",desc:"desc4"},{name:"proj4",desc:"desc4"}
//   ,{name:"proj4",desc:"desc4"},{name:"proj4",desc:"desc4"}
//   ,{name:"proj4",desc:"desc4"},{name:"proj4",desc:"desc4"}
// ]});
// });


router.get('/sub', function(req, res, next) {
  let employees = employemodel.getAllEmployees().then((allemployees)=>{
    console.log("employee details from databese",allemployees)
    res.render('newDesign', { title: 'Pavan P' , employeesArray: allemployees });
  });


  
  
});




  


router.get('/txt', function(req, res, next) {
  res.render('text', { title: 'Pavan P' });
});

router.get('/extra', function(req, res, next) {
  res.render('extra', { title: 'Pavan P' });
});

router.get('/sub1', function(req, res, next) {
  var param1 = req.query.keyname;
  
  if(param1=="dh"){
    console.log('keyname',param1);
    res.render('Web', { title: 'Pavan P' });
  }
  else if(param1=="lh"){
  console.log('keyname',param1);
  res.render('index2', { title: 'Pavan P' });
  }
  else{
    console.log('keyname',param1, "ERROR Keyname not found");

  }


});

router.get('/sub2', function(req, res, next) {
  res.render('Button', { title: 'Pavan P' });
});

router.get('/b1', function(req, res, next) {
  res.render('Button_index', { title: 'Pavan P' });
});



router.get('/sub3', function(req, res, next) {
  res.render('WebWithFor', { title: 'Pavan P', imageArray:
  [{name:"proj1",desc:"desc1"},{name:"proj2",desc:"desc2"},
  {name:"proj3",desc:"desc3"},{name:"proj4",desc:"desc4"}]});
});

router.get('/sub4', function(req, res, next) {
  res.render('Button_without_forEach', { title: 'Pavan P', imageArray:[{name:"proj1",desc:"desc1"},{name:"proj2",desc:"desc2"},{name:"proj3",desc:"desc3"},{name:"proj4",desc:"desc4"}]});
});


router.get('/getjson', function(req, res, next) {
  res.status(400).json({ "code": 200, "data":{ title: 'Pavan P', imageArray:[{name:"proj1",desc:"desc1"},{name:"proj2",desc:"desc2"},{name:"proj3",desc:"desc3"},{name:"proj4",desc:"desc4"}]} });
  
  
  
});


router.get('/sub5', function(req, res, next) {
  res.render('event');
});


router.get('/su1', function(req, res, next) {
  res.render('newDesign3');
});


router.get('/su2', function(req, res, next) {
  let employees = employemodel.getAllEmployees().then((allemployees)=>{
    console.log("employee details from databese",allemployees[0])
    res.render('newDesign3', { title: 'Pavan P' , employeesArray: allemployees });
  });
  
});


router.get('/emp', function(req, res, next) {
  let employees = employemodel.getAllEmployees().then((allemployees)=>{
    console.log("employee details from databese",allemployees[0])
    res.render('index', { title: 'Pavan P' , employeesArray: allemployees });
  });
  
});



module.exports = router;
