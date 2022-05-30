


// window.onload = function(){  
//     console.log("inside onload");
//     document.getElementsByClassName("some-class")[0].onclick= function(e) {



       
//                document.getElementByClassName("de").innerHTML ="ftfytf";
//                console.log("inside change attributre",e);
        
          
//     };

//           } 
//Proper code
            window.onload = function(){  
            console.log("inside onload",employeeArray);


          document.querySelectorAll('.Project-item').forEach( button => {
            button.onclick = function () {
                console.log("hhh",this.getAttribute('data-value'))
            // rest of code
            document.querySelectorAll('.some-class').innerHTML ="ftfytf";

            }
        });

    }


// window.onload = function(){  
//     console.log("inside onload");
//     document.getElementById("demo").onclick = function(e) {



       
//         document.getElementById("de").innerHTML ="ftfytf";
//         console.log("inside change attributre",e);

             

//     };

       
//     }  