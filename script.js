document.getElementById("parent").innerHTML=("Somthing Else");
// document.getElementById("parent").style.backgroundColor=("red");
// document.getElementById("parent").style.color=("white");
document.getElementById("parent").style.cssText=("background-color:red; color:white; text-align:center")

document.getElementsByClassName("exercise")[0].innerHTML=("I am ishan");
document.getElementsByClassName("exercise")[0].style.cssText=("background-color:red; color:white; text-align:center")
document.getElementsByClassName("exercise")[2].innerHTML=("I am 19yrs old");
document.getElementsByClassName("exercise")[2].style.cssText=("background-color:red; color:white; text-align:center")
document.getElementsByTagName("h1")[0].style.cssText=("text-align:center; text-transfrom:uppercase;");
document.getElementsByTagName("h1")[1].style.cssText=("text-align:center; text-transfrom:uppercase;");
document.getElementsByTagName("h1")[2].style.cssText=("text-align:center; text-transfrom:uppercase;");
document.querySelector("h2").innerHTML=("hello i am under water");
document.querySelector("#hi").innerHTML=("hello ");
document.querySelector(".hey").innerHTML=("prajina");

const change = document.querySelectorAll("h3");
for(i=0;i<change.length;i++){
    change[i].innerHTML=("i am subrat");
}

// function myFunction(){
//     document.open();
//     document.write("<h1>hello world</h1>");
//     document.close();
// }

function myFunction(){
    const myWindow = window.open();
    myWindow.document.open();
    myWindow. document.write("<h1>love<h1>");
    myWindow.document.close();
}