$(function(){
	$(".dropdown").click(function(){
		$(document).find(".dropdown-menu").css("display","none");
		$(this).find(".dropdown-menu").css("display","block");
		$(this).css("background-color","#334d63");
		return false;
	});
	$("body").click(function(){
		$(document).find(".dropdown-menu").css("display","none");
		return false;
	});
	$(".dropdown").hover(function(){
		$(this).css("background-color","rgba(255,255,255,0.05)");
	},function(){
		$(this).css("background-color","");
	});
	$(".dropdown-menu").find("li").hover(function(){
		$(this).css("background-color","#4d7496");
		$(this).find("a").css("color","#fff");
	},function(){
		$(this).css("background-color","");
		$(this).find("a").css("color","");
	});
	$("#nav").find("li").click(function(){
		var hide = $(this).find(".sub-menu").attr("hide");
		if (hide == 0) {
			$(this).find(".sub-menu").slideDown();
			$(this).find(".sub-menu").css("border-top","1px solid #ccc");
			$(this).find("a:first").css("background-color","#ddd");
			$(this).find("a:first").find(".arrow").removeClass("fa-angle-left");
			$(this).find("a:first").find(".arrow").addClass("fa-angle-down");
			$(this).find(".sub-menu").attr("hide","1");
		}
		else{
			$(this).find(".sub-menu").slideUp();
			$(this).find(".sub-menu").attr("hide","0");
			$(this).find("a:first").css("background-color","");
			$(this).find("a:first").find(".arrow").removeClass("fa-angle-down");
			$(this).find("a:first").find(".arrow").addClass("fa-angle-left");
		}
		
		
	});
});