console.log("Hello World");
let heading=document.getElementById("heading");
console.log(heading);
heading.addEventListener("mousemove", function(e){
    console.log(e.clientX,e.clientY);
    heading.style.color=`rgb(${e.clientY},${e.clientX},${e.clientX*e.clientX})`
});