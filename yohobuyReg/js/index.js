$(function(){
	$("input").focus(function(){
		$(this).parent().find(".f_onError").hide();
		$(this).parent().find(".f_onShow").show();
		$(this).parent().find(".f_onFalse").hide();
	});
	$("input").blur(function(){
		var value = $(this).val();
		if(value == "") {
			$(this).parent().find(".f_onShow").hide();
			$(this).parent().find(".f_onError").show();
		}
		else{
			var a = CheckMail(value);
			if (a == true) {
				$(this).parent().find(".f_onShow").hide();
				$(this).parent().find(".f_onFalse").hide();
			}
			else{
				$(this).parent().find(".f_onShow").hide();
				$(this).parent().find(".f_onFalse").show();
			}
		}
	});
});


function CheckMail(mail) {
	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (filter.test(mail)) return true;
	 else {
		return false;
	}
}