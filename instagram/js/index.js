$(function(){
	$(".timelineLikeButton").click(function(){
		var like =  $(this).attr("like");
		var html1 = "";
		html1+='<a href class="llNameLink">';
		html1+='	stancycowen';
		html1+='</a>';
		html1+='<span>';
		html1+='	,';
		html1+='</span>';
		if (like == 0) {
			$(this).css("background-position","8px -44px");
			like =  $(this).attr("like","1");
			$(this).parent().find(".timelineLikeList").find("LikeList").append(html1);
		}
		else{
			$(this).css("background-position","8px 6px");
			like =  $(this).attr("like","0");
		}
		
	});
	var SubmitOrHidden = function(evt){
		evt = window.event || evt;
		if (evt.keyCode == 13) {
			var  text = $(document).find(".timelineCommentTextField").val();
			var html = "";
			html+='<div class="timelineComment">';
			html+='	<a href="#">';
			html+='		<div class="timelineCommentAvatar Image iLoaded" style="background-image: url(images/profile_416459127_75sq_1389775778.jpg);">';
			html+='		</div>';
			html+='	</a>';
			html+='	<a href="#" class="timelineCommentUsername">';
			html+='		stancycowen';
			html+='	</a>';
			html+='	<span class="timelineCommentText">';
			html+='		<span>';
			html+="			 "+text+" ";
			html+='		</span>';
			html+='	</span>';
			html+='</div>';
			$(document).find(".scrollAreaContents").append(html);
			$(document).find(".timelineCommentTextField").attr("value","");
			return false;
		}
		else{

		}
	}
	window.document.onkeydown=SubmitOrHidden;
});
