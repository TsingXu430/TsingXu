function showNav(){

	var aNav = $("#nav>p");
	var aPic = $("#pic_list>li");

	$("#nav").animate({opacity:1,right:0},500,function(){

		$.each(aNav,function(index){

			aNav.eq(index).css({transition:".6s ease all",transform:"rotate(" +(index*(180/aNav.length)-80)+ "deg)",opacity:100});
		});
	});

	aNav.removeClass("active");

	aNav.eq(window.inow).addClass("active");

	aNav.hover(function(){

		var index = $(this).index();

		$.each(aNav,function(i){

			if(i > index){

				aNav.eq(i).css({transform:"rotate(" +(i*(180/aNav.length)+5-80)+ "deg)"});
			}
			else{

				aNav.eq(i).css({transform:"rotate(" +(i*(180/aNav.length)-80)+ "deg)"});

			}
		});
	},function(){

		$.each(aNav,function(index){

			aNav.eq(index).css({transform:"rotate(" +(index*(180/aNav.length)-80)+ "deg)"});
		});
	});

	aNav.click(function(){


		if(window.inow == $(this).index()){

			return false;
		}

		var iOld = window.inow;
		window.inow = $(this).index();

		aNav.eq(iOld).removeClass("active");
		aNav.eq(window.inow).addClass("active");

		aPic.eq(iOld).css({transition:"0.6s linear border-radius",borderRadius:"50%"});
		aPic.eq(iOld).animate({top:$(window).height(),left:100,width:100,height:100},500,function(){

			aPic.eq(iOld).css({left:$(window).width()+"px"});
		});

		aPic.eq(window.inow).css({transition:"0.8s linear border-radius",borderRadius:"5px"});

		aPic.eq(window.inow).animate({top:($("#pic_list").height()-458)/2,left:($("#pic_list").width()-458)/2,width:526,height:458},500);

	});

	$("#back").click(function(){

		aNav.unbind("hover");

		$.each(aNav,function(index){

			aNav.eq(index).css({transform:"rotate(0deg)",opacity:0});

		});

		setTimeout(function(){

			$("#nav").animate({opacity:0,right:-300});

		},500);

		setTimeout(function(){

			picShow();
		},1000)

	});

}

function picShow(){

	var i = 0;
	var aPic = $("#pic_list>li");
	clearInterval(window.timer);

	window.timer = setInterval(function(){

		if(i > aPic.length-1){

			clearInterval(window.timer);
			window.oBtn = true;

		}else{

			aPic.eq(i).css({transition:"0.4s 0.2s linear border-radius",borderRadius:"5px"});

			aPic.eq(i).animate({left:window.aPosition[i][0],top:window.aPosition[i][1],width:200,height:230},400);

			aPic.eq(i).find("h3").animate({height:30});
		}

		i++;

	},50)

}

$(function(){

	window.inow = 0;
	window.oBtn = true;
	window.aPosition = [];
	var oList = $("#pic_list");
	var aPic = oList.find("li");

	$.each(aPic,function(i){

		window.aPosition.push([aPic.eq(i).position().left,aPic.eq(i).position().top]);
	});

	$.each(aPic,function(i){

		aPic.eq(i).css({position:"absolute",left:window.aPosition[i][0]+"px",top:window.aPosition[i][1]+"px"});
	});

	//console.log(aPosition);

	aPic.click(function(){

		if(window.oBtn){

			window.inow = $(this).index();

			aPic.not($(this)).animate({top:500,opacity:0},600,function(){

				aPic.not(aPic.eq(window.inow)).css({left:$(window).width()+"px",top:$(window).height()+"px",opacity:1,borderRadius:"50%",WebkitTransform:"rotate(-720deg)"});

				aPic.not(aPic.eq(window.iNow)).find("h3").css("height","0");

			});

			$(this).find("h3").animate({height:0},600);

			$(this).animate({width:526,height:458,left:($("#pic_list").width()-526)/2,top:($("#pic_list").height()-526)/2},600,function(){

				showNav();
			});

		}

		window.oBtn = false;

	});


})