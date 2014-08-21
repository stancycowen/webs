$(function(){
	$(".ImageControl").click(function(){

		picID = $(this).attr("picID");
		//alert(picID);
		showImage();
		spanID = $(this).attr("id");
		$(".ImageControl").removeClass("ImageActive");
		$(this).addClass("ImageActive");
	});
	var timer = setInterval("showImage()",2000);
	$("#FlashImage").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval("showImage()",2000);
	});
	$(".clickRight").click(function(){
		

		if (clickID == 4) {
			clickID = 1;
			nextImage();
			
		}else{
			clickID++;
			nextImage();
		}
	});
	$(".clickLeft").click(function(){
		
		
		if (clickID == 1) {
			clickID = 4;
			nextImage();
			
		}else{
			clickID--;
			nextImage();
		}
	});
});
var picID=2;
var clickID =1;

function showImage(){

	$("#FlashImage").css("background-image","url(css/images/"+picID+".jpg)");
	$(".ImageControl").removeClass("ImageActive");
	$("#Span" + picID).addClass("ImageActive");
	
	if (picID == 4) {
		picID=1;
	}
	else{
		picID++;
	}
}
function nextImage(){
	$("#FlashImage").css("background-image","url(css/images/"+clickID+".jpg)");
	$(".ImageControl").removeClass("ImageActive");
	$("#Span" + clickID).addClass("ImageActive");
	
}