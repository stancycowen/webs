$(function(){
	$(".moreIntro").click(function(){
		$(document).find("#introDetail").css("display","none");
		$(document).find("#mainRecommend").css("display","block");
	});
	$(".more-intro").click(function(){
		$(document).find("#mainRecommend").css("display","none");
		$(document).find("#introDetail").css("display","block");
	});
	$("#textName").focus(function(){
		$(this).attr("value","");
	});
	$("#textName").blur(function(){
		$(this).attr("value","邮箱/手机号/用户名");
	});
	$("#userPwd").focus(function(){
		$(this).attr("value","");
	});
	$("#userPwd").blur(function(){
		$(this).attr("value","请输入密码");
	});
	$(".menu").click(function(){
		$("#showmore").addClass("more");
		$(document).find("#moredownWeb").show();
		return false;
	});
	$(".clearfix").click(function(){
		return false;
	});
	$("body").click(function(){
		$("#showmore").removeClass("more");
		$(document).find("#moredownWeb").hide();
	});
	
});