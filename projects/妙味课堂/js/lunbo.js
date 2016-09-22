$(function(){
	var $oDiv = $("#lunbo");
	var $oUl = $("ul");
	var $aLi = $("li");
	var $aLnk = $("ul a");
	var $aImg = $("img");
	var $oPrevBtn = $("a .prev");
	var $oNextBtn = $("a .next");
	var $oPrevIcon = $(".prev .icon");
	var $oNextIcon = $(".next .icon");
	/*console.log($oUl);
	console.log($aLi);
	console.log($aLnk);
	console.log($aImg);
	console.log($oPrevBtn);
	console.log($oNextBtn);
	console.log($oPrevIcon);
	console.log($oNextIcon);*/
	var arr = [];
	var oTimer = null;

	console.log($aLi.eq(0).position().left);
	/*for(var i=0; i < $aLi.length; i++){
		var $inow = $aLi.eq(i);
		var iPos = $inow.position();
		var iLeft = iPos.left;
		var iTop = iPos.top;

		console.log(iLeft);
		console.log(iTop);
	}*/
})