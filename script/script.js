
let closeButton=document.querySelectorAll(".messages .closeButton");
for(let i=0;i<closeButton.length;i++){
closeButton[i].addEventListener("click",closemessage,false);
}
function closemessage(e){
    console.log("test");
let message=e.currentTarget.parentNode.parentNode;
message.style.opacity="0";
setTimeout(()=>{
    message.style.display="none";
},1000);

}