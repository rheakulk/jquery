console.log("here")
// var imgs = $("img");
// console.log(imgs)
var msg = "Hover over an image below."

	$("img").mouseover(function() {
	   $('#image').css("background-image", "url('"+ this.src +"')");
	 	$('#image').html(this.alt);
  })

	 $("img").focus(function(){
	 	$('#image').css("background-image", "url('"+ this.src+"')");
	 	$('#image').html(this.alt);
  })

	 $("img").mouseleave(function(){
	 	$('#image').css("background-image","url('')" );
	 	$('#image').html(msg);
  })

	 $("img").blur(function(){
	 	$('#image').css("background-image","url('')" );
	 	$('#image').html(msg);
  })
