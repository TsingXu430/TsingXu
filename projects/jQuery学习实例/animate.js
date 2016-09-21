$(function(){
	var page = 0;
	$("span.prev").click(function(){
		var $content = $("div.content");
		if(page == 9){
			return false;
		}else{
			$content.animate({ left:'-=150px' },"nomal");
			page++;
		}
		$(".tip").find('a').eq(page).addClass("current").parents().siblings().find('a').removeClass("current");
	})
	$("span.next").click(function(){
		var $content = $("div.content");
		if(page == 0){
			return false;
		}else{
			$content.animate({ left:'+=150px' },"nomal");
			page--;
		}
		$(".tip").find('a').eq(page).addClass("current").parents().siblings().find('a').removeClass("current");
	})
});