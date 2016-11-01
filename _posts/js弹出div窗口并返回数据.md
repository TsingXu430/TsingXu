---
layout: post
title: "js弹出div窗口并返回数据"
date:   2016-10-29 10:47:28
categories: js
---

直接上代码：

```

<style>
		*{
			margin:0;
			padding: 0;
		}
		#bg{
			width: 100%;
			height: 100%;
			z-index: 999;
			position: absolute;
			left: 0%;
			top: 0%;
			background-color: rgba(0,0,0,0.8);
			filter: alpha(opacity=80);
			display: none;
		}
		#content{

			z-index: 1000;
			width: 50%;
			height: 50%;
			position: absolute;
			left: 20%;
			top: 20%;
			background: white;
			padding: 30px;
			display: none;
		}
	</style>

```

```

<div id="bg">
</div>
<div id="content">
	<input type="text" value="" id="txt">
	<input type="submit" onclick="document.getElementById('bg').style.display='none';document.getElementById('content').style.display='none';var txt=document.getElementById('txt').value;document.getElementById('back').innerText=txt; ">
</div>
<div id="index"><a href="javascript:void(0);" onclick="document.getElementById('bg').style.display='block';document.getElementById('content').style.display='block'; ">点击弹出窗口</a></div>
<div id="back"></div>

```
