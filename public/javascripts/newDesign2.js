window.onload = function(){  
    
    
    console.log("hello, I am using Console")
    console.log(employeeArray)
    console.log("inside onload",employeeArray);


    document.querySelectorAll('.Project-item1').forEach( button => {
        button.onclick = function () {
            console.log("hhh",this.getAttribute('data-value'))
        // rest of code
       
        document.querySelectorAll('.Project-item1').innerHTML ="ftfytf";
      
            function GetSortOrder(prop) {    
                return function(a, b) {    
                    if (a[prop] > b[prop]) {    
                        return 1;    
                    } else if (a[prop] < b[prop]) {    
                        return -1;    
                    }    
                    return 0;    
                }    
              }    


              

       
        
            
          employeeArray.sort(GetSortOrder("First_Name")); //Pass the attribute to be sorted on    
          document.write("Sorted Employee Names : ");    
          for (var item in employeeArray) {    
           console.log(document.write("<br>" + employeeArray[item].First_Name)); 
           
           console.log(employeeArray[item].First_Name);
          } 

        }
    });







    // extra

    document.querySelectorAll('.Project-item2').forEach( button => {
        button.onclick = function () {
            console.log("hhh",this.getAttribute('data-value'))
        // rest of code
       
        document.querySelectorAll('.Project-item2').innerHTML ="ftfytf";
      
            function GetSortOrder(prop) {    
                return function(a, b) {    
                    if (a[prop] < b[prop]) {    
                        return 1;    
                    } else if (a[prop] > b[prop]) {    
                        return -1;    
                    }    
                    return 0;    
                }    
              }    


              

       
        
            
          employeeArray.sort(GetSortOrder("First_Name")); //Pass the attribute to be sorted on    
          document.write("Sorted Employee Names : ");    
          for (var item in employeeArray) {    
           console.log(document.write("<br>" + employeeArray[item].First_Name)); 
           
           console.log(employeeArray[item].First_Name);
          } 

        }
    });

    // Extra  ends


    


}














































// // proper coode starts from here


// window.onload = function(){  


//     console.log(employeeArray)
//     console.log("inside onload",employeeArray);


//     document.querySelectorAll('.Project-item').forEach( button => {
//         button.onclick = function () {
//             console.log("hhh",this.getAttribute('data-value'))
//         // rest of code
//         document.querySelectorAll('.some-class').innerHTML ="ftfytf";
//         function GetSortOrder(prop) {    
//             return function(a, b) {    
//                 if (a[prop] > b[prop]) {    
//                     return 1;    
//                 } else if (a[prop] < b[prop]) {    
//                     return -1;    
//                 }    
//                 return 0;    
//             }    
//           }    
            
//           employeeArray.sort(GetSortOrder("First_Name")); //Pass the attribute to be sorted on    
//           document.write("Sorted Employee Names : ");    
//           for (var item in employeeArray) {    
//            console.log(document.write("<br>" + employeeArray[item].First_Name)); 
           
//            console.log(employeeArray[item].First_Name);
//           } 

//         }
//     });


    


// }


// proper code ends here



window.onload = function(){  


    console.log(employeeArray)
    console.log("inside onload",employeeArray);


    document.querySelectorAll('.Project-item1').forEach( button => {
        button.onclick = function () {
            console.log("hhh",this.getAttribute('data-value'))
        // rest of code
       
        document.querySelectorAll('.Project-item1').innerHTML ="ftfytf";
      
            function GetSortOrder(prop) {    
                return function(a, b) {    
                    if (a[prop] > b[prop]) {    
                        return 1;    
                    } else if (a[prop] < b[prop]) {    
                        return -1;    
                    }    
                    return 0;    
                }    
              }    


              

       
        
            
          employeeArray.sort(GetSortOrder("First_Name")); //Pass the attribute to be sorted on    
          document.write("Sorted Employee Names : ");    
          for (var item in employeeArray) {    
           console.log(document.write("<br>" + employeeArray[item].First_Name)); 
           
           console.log(employeeArray[item].First_Name);
          } 

        }
    });







    // extra

    document.querySelectorAll('.Project-item2').forEach( button => {
        button.onclick = function () {
            console.log("hhh",this.getAttribute('data-value'))
        // rest of code
       
        document.querySelectorAll('.Project-item2').innerHTML ="ftfytf";
      
            function GetSortOrder(prop) {    
                return function(a, b) {    
                    if (a[prop] < b[prop]) {    
                        return 1;    
                    } else if (a[prop] > b[prop]) {    
                        return -1;    
                    }    
                    return 0;    
                }    
              }    


              

       
        
            
          employeeArray.sort(GetSortOrder("First_Name")); //Pass the attribute to be sorted on    
          document.write("Sorted Employee Names : ");    
          for (var item in employeeArray) {    
           console.log(document.write("<br>" + employeeArray[item].First_Name)); 
           
           console.log(employeeArray[item].First_Name);
          } 

        }
    });

    // Extra  ends


    


}


