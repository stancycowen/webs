$(function(){

	setInterval("changeBG()",20);

	setInterval("flash()",2000);
	$(".img-control").find("span").click(function(){
		var picID = $(this).attr("picID");
		$("span").removeClass("img-control-active");
		$(this).addClass("img-control-active");
		$(".kv").removeClass("vis");
		$(".kv" + picID).addClass("vis");
	});
});






var curLeft = 0;
function changeBG(){

	$("body").css({"background-position":"-" + curLeft + "px 50%"});
	curLeft+=1;
}
var picID = 2;
function flash(){

	$(".kv").removeClass("vis");
	$(".kv" + picID).addClass("vis");
	$(".img-control").find("span").removeClass("img-control-active");
	$(".span" + picID).addClass("img-control-active");
	if (picID < 5) {
		picID++;
	}
	else{
		picID = 1;
	}
}