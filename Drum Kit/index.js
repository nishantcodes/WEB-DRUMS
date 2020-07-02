function keyChecker( c ){
  switch (c) {
    case "w":
    var audio =new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "s":
    var audio =new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "a":
    var audio =new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "d":
    var audio =new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    case "j":
    var audio =new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case "k":
    var audio =new Audio("sounds/kick.mp3");
    audio.play();
    break;
    case "l":
    var audio =new Audio("sounds/crash.mp3");
    audio.play();
    break;
    default:
    console.log(c);
}
}
var arr=document.querySelectorAll(".drum");
for(var i=0;i<arr.length;i++)
arr[i].addEventListener("mouseover",function (){
    keyChecker(this.innerHTML);
    banim(this.innerHTML);
})
document.addEventListener("keydown",function(event){
var ch=event.key;
 keyChecker(ch);
 banim(ch);
  }
)
function banim(ckey){
  var activeButton= document.querySelector("."+ckey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
  activeButton.classList.remove("pressed");
},150);
}
