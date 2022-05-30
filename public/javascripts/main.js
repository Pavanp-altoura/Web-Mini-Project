window.onload = function () {
    // console.log(array);

    $(".branchname").click (function () {

        let filterparam= $(this).attr("data-branchid");
 
        console.log("hi",filterparam);
 
 
 
        
 
 
         //rest of code
 
    
 
 
 
   })


   function filterArray(branchnameparam){
 
    $('[data-branchname=""]')



   }

   



    //Inorder to rearrange the images based on asc and desc order of the title    

    function regenerateProjectList(projectArray) {
        let projectContainer = $('.container');
        projectContainer.empty();

        projectArray.forEach(function (eachProject) {

            projectContainer.append(
                `<div class="Project-item  " data-value="{&quot;emp_id&quot;:100,&quot;first_name&quot;:&quot;David&quot;,&quot;last_name&quot;:&quot;Wallace&quot;,&quot;birth_day&quot;:&quot;1967-11-16T18:30:00.000Z&quot;,&quot;sex&quot;:&quot;M&quot;,&quot;salary&quot;:250000,&quot;super_id&quot;:null,&quot;branch_id&quot;:1}" data-firstname="David">
                <!-- <p class="some-class"></p> -->
    
    
                <div class="proj-img-container" id="demo">
                <p class="some-class"></p>
                <img src="/images/images.png" class="proj-img">
                </div>
                <div class="proj-footer">
                <div class="title">${eachProject.First_Name}
                </div>
                <div class="delete">
                <img src="/images/delete_p.png" class="proj-img">
                </div>
                <div class="status">
                <img src="/images/uPLOAD.png" class="proj-img">
                </div>
                </div>
                </div>`
            )


        })

        //this is Appended AFTER FOREACH BEACAUDE BUTTONS WILL BE ADDED TO EACH OF THE PROJECTIMAGE..SINCE WE NEED BUTTONS AT THE END OF ALL THE IMAGE WE ARE ESCAPING FOR LOOP And appending it here to the project container
        projectContainer.append(
            `<div>
            <button  id="asc" > Ascending button</button>
            <button id="desc">Descending button</button>
            </div>`)
            
            projectContainer.append(
            `<div id="myBtnContainer">
            <button class="btn active" id="all"> Designation Id</button>
            <button class="btn" onclick="filterSelection('cars')"> Employee Id</button>
            <button class="btn" onclick="filterSelection('animals')"> Designation Id</button>
            <button class="btn" onclick="filterSelection('fruits')"> Name</button>
       
          </div>
          `
        
        )
        
    }

    console.log("hello, I am using Console");
    
    console.log("inside onload");





    // TO ORDER THE JSON DATA IN ASCENDING ORDER ONCLICK OF BUTTON
    document.getElementById('asc').onclick = function () {
        console.log("Inside ASC button ", dataArray)
        //rest of code
        function GetSortOrder(prop) {
            return function (a, b) {
                if (a[prop] > b[prop]) {
                    return 1;
                } else if (a[prop] < b[prop]) {
                    return -1;
                }
                return 0;
            }
        }

        //Pass the attribute to be sorted on

        dataArray.sort(GetSortOrder("First_Name")); 




        //its calling the regenerateProjectList function..and the (data array) inside descending function is passed as an argument to the parameter (projectarray)
        
        
        
        regenerateProjectList(dataArray);




        // TO PRINT THE DATA WITHIN THE ELEMENT WITHOUT VANISHING ALL THE OTHER ELEMENT IN THE DOCUMENT


        var targetDiv = document.getElementById('ID');
        targetDiv.textContent = " ";
        targetDiv.innerHTML += "Sorted Employee Names : ";
        for (var item in dataArray) {
            targetDiv.innerHTML += "<br>" + dataArray[item].First_Name;
        }




        // TO PRINT THE DATA TO THE DOCUMENT WHERE ALL THE OTHER ELEMENT GETS VANISHED!!!!


        // document.write("Sorted Employee Names : ");    
        // for (var item in dataArray) {    
        //     document.write("<br>" + dataArray[item].first_name);    
        // }        


    };







    // TO ORDER THE JSON DATA IN DESCENDING ORDER ONCLICK OF BUTTON

    document.getElementById('desc').onclick = function () {
        console.log("Inside ASC button", dataArray)
        //rest of code
        function GetSortOrder(prop) {
            return function (a, b) {
                if (a[prop] < b[prop]) {
                    return 1;
                } else if (a[prop] > b[prop]) {
                    return -1;
                }
                return 0;
            }
        }


        //Pass the attribute to be sorted on

        dataArray.sort(GetSortOrder("First_Name")); 




        //its calling the regenerateProjectList function..and the (data array) inside descending function is passed as an argument to the parameter (projectarray)

        regenerateProjectList(dataArray);



        // TO PRINT THE DATA WITHIN THE ELEMENT WITHOUT VANISHING ALL THE OTHER ELEMENT IN THE DOCUMENT
        var targetDiv = document.getElementById('ID');
        targetDiv.textContent = "";

        targetDiv.innerHTML += "Sorted Employee Names in descending order : ";
        for (var item in dataArray) {
            targetDiv.innerHTML += "<br>" + dataArray[item].First_Name;
        }

        

        // TO PRINT THE DATA TO THE DOCUMENT WHERE ALL THE OTHER ELEMENT GETS VANISHED!!!!


        // document.write("Sorted Employee Names : ");    
        // for (var item in dataArray) {    
        //     document.write("<br>" + dataArray[item].first_name);    
        // }        

    };

























































    // <--------ACCESSING CLICK EVENT USING QUERY SELECTOR-------->
    //    TO PRINT EACH ROW FROM THE DATABASE ON CLICK OF THE DIV WITH THE CLASSNAME ".Project-item "


    document.querySelectorAll('.Project-item ').forEach(button => {
        button.onclick = function () {
            console.log("hhh", this.getAttribute('data-value'))
            //rest of code
            document.querySelectorAll("some-class").innerHTML = "YOU CLICKED ME!";
        };

    });










}
























// <--------ACCESSING CLICK EVENT USING ID ATTRIBUTE-------->



// window.onload=function(){

//     document.getElementById("demo").onclick = function() {myFunction()};

//     function myFunction() {
//     document.getElementById("dem").innerHTML = "YOU CLICKED ME!";
// }

// }


















