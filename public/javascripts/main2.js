function changeText(value) {
    var div = document.getElementById("div");
    var text = "";

    if (value == 1) text += "this is project one";
    if (value == 2) text += "this is project two";
    if (value == 3) text += "this is project three";

    div.innerHTML = text;
    console.log("HI");
    console.log(eachemployee.length())
    
        
}