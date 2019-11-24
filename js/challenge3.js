// ch3form.onsubmit = function() {
//     var fruit = document.querySelectorAll('input[name="fruit"]')
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//     alert("You must pick a fruit!")
//     return false;
//
//
//   }
//

$("form").submit(function(event){
  if(!($('input[name=fruit]:checked').val()) || !($('input[name=standing]:checked').val())){
    alert("pick something!")
    event.preventDefault();
  }


});
