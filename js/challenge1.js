// subscribe.onchange = function(){
//   console.log("I have been clicked!");
//   var x = document.querySelector("#emailField");
//   if(this.checked){
//     console.log("selected");
//     x.style.display = "block";
//
//   }
//   else{
//     console.log("not selected");
//     x.style.display  = "none";
//   }
//
// }

$("#subscribe").click(function(){
  $("#emailField").toggle("slow");
});
