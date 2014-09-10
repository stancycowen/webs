(function($){
	$.fn.jianchu = function(userArgus){
		var defaultArgus = {
			width : 100,
			height : 300
		};
		var finalArgus = $.extend(defaultArgus,userArgus);
		this.each(function(){
			var h3 = $(this).find("h3");
			var ul = $(this).find("ul");
			$(this).addClass("dropMenu");
			var title = $(this).attr("title");
			h3.html(title);
			$(this).hover(function(){
				ul.slideDown();
			},function(){
				ul.slideUp();
			});
			$(this).css({
				width : finalArgus.width +"px",
			});
		});
	}
})(jQuery);






