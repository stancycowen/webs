$(function(){
	
	$("#login").dialog({
		autoOpen:false,
		show:{
			effect:"blind",
			duration:1000
		},
		hide:{
			effect:"blind",
			duration:1000
		},
		width:400,
		height:300
	});
	$("#opener").click(function(){
		$("#login").dialog("open");
	});
	$("#date").datepicker();

});