$(function(){
	$(".column-common").hover(function(){
		$(this).find("a").css("color","#dcdcdc");
	},function(){
		$(this).find("a").css("color","");
	});

	$(".copy").hover(function(){
		$(this).css("opacity","0.7");
	},function(){
		$(this).css("opacity","");
	});
	
	setInterval("showImage()",2000);
	$("#pager").find("span").click(function(){
		var picID = $(this).attr("picID");
		$("#pager").find("span").removeClass("cycle-pager-active");
		$(".page" + picID).addClass("cycle-pager-active");
		$(".imgControl").removeClass("cycle-slide-active");
		$(".cycle-slide" + picID).addClass("cycle-slide-active");

	});
});





var picID=2;

function showImage(){
	

	//$(".imgControl").animate({"left":"-1600px"},5000);
	//$(".cycle-slide" + picID).animate({"left":"0px"},1000);
	$(".imgControl").removeClass("cycle-slide-active");
	
	$(".cycle-slide" + picID).addClass("cycle-slide-active");
	$("#pager").find("span").removeClass("cycle-pager-active");
	$(".page" + picID).addClass("cycle-pager-active");

	if (picID == 6) {
		picID=1;
	}
	else{
		picID++;
	}
}