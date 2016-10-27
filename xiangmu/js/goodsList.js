//获取一页的商品列表
function addList(url,list,from,start,end){
				$.get(url,function(str){
					var obj=str[from];
					for (var i=start;i<end;i++) {
						var cell=obj[i];
						var origin=cell.origin.split('|');
						var li=document.createElement("li");
						li.innerHTML="<a href='show.html?id="+cell.id+"&class="+from+"&url="+url+"'><img src='"+cell.pic+"' /><p>"+cell.title+"</p><img class='origin' src='"+origin[0]+"' /><p class='cellPrice'>"+cell.price+"</p><p class='country'>"+origin[1]+"</p></a><div class='div2'></div><div class='div3'></div>";
						$(list).append(li);
					}
					$(list).children().addClass("list_cell");
					
				
				$(".list_cell").mouseenter(function(){
					$(this).find("div").stop().css("display","block").animate({"width":"233px","height":"296px"},500)
				})
				$(".list_cell").mouseleave(function(){
					$(this).find("div").stop().animate({"width":"0","height":"0"},800,function(){
					$(".list_cell").find("div").css("display","none")	
					})
				})
				},"json")
}


//获取所有商品的列表
function addListAll(url,list,from){
				$.get(url,function(str){
					var obj=str[from];
					for (var i=0;i<obj.length;i++) {
						var cell=obj[i];
						var origin=cell.origin.split('|');
						var li=document.createElement("li");
						li.innerHTML="<a href='show.html?id="+cell.id+"&class="+from+"&url="+url+"'><img src='"+cell.pic+"' /><p>"+cell.title+"</p><img class='origin' src='"+origin[0]+"' /><p class='cellPrice'>"+cell.price+"</p><p class='country'>"+origin[1]+"</p></a><div class='div2'></div><div class='div3'></div>";
						$(list).append(li);
					}
					$(list).children().addClass("list_cell");
					
				
				$(".list_cell").mouseenter(function(){
					$(this).find("div").css("display","block").stop().animate({"width":"233px","height":"296px"},500)
				})
				$(".list_cell").mouseleave(function(){
					$(this).find("div").stop().animate({"width":"0","height":"0"},800,function(){
					$(".list_cell").find("div").css("display","none")	
					})
				})
				},"json")
}



//不同参数 得到不同列表的函数。列表内容随参数而不同
function addListBykind(url,list,from,start,end,kind){
				
				
				$.get(url,function(str){
					var obj=str[from];
					for (var i=start;i<end;i++) {
						//var cell=obj[i];
						//console.log(typeof cell);
						//console.log(typeof cell.kind);
						//console.log(typeof kind);
						if (obj[i].kind==kind) {
							var origin=obj[i].origin.split('|');
							var li=document.createElement("li");
							li.innerHTML="<a href='show.html?id="+obj[i].id+"&class="+from+"&url="+url+"'><img src='"+obj[i].pic+"' /><p>"+obj[i].title+"</p><img class='origin' src='"+origin[0]+"' /><p class='cellPrice'>"+obj[i].price+"</p><p class='country'>"+origin[1]+"</p></a><div class='div2'></div><div class='div3'></div>";
							$(list).append(li);
						}
						
					}
					$(list).children().addClass("list_cell");
					
				
				$(".list_cell").mouseenter(function(){
					$(this).find("div").css("display","block").stop().animate({"width":"233px","height":"296px"},500)
				})
				$(".list_cell").mouseleave(function(){
					$(this).find("div").stop().animate({"width":"0","height":"0"},800,function(){
					$(".list_cell").find("div").css("display","none")	
					})
				})
				},"json")
}



function addList2(url,list,from,start,end){
				$.get(url,function(str){
					var obj=str[from];
					for (var i=start;i<end;i++) {
						var cell=obj[i];
						var origin=cell.origin.split('|');
						var li=document.createElement("li");
						li.innerHTML="<a href='show.html?id="+cell.id+"&class="+from+"&url="+url+"'><img src='"+cell.pic+"' /><p>"+cell.title+"</p><img class='origin' src='"+origin[0]+"' /><p class='cellPrice'>"+cell.price+"</p><p class='country'>"+origin[1]+"</p></a><div class='div2'></div><div class='div3'></div>";
						$(list).append(li);
					}
					$(list).children().addClass("list_cell2");
					
				
				$(".list_cell2").mouseenter(function(){
					$(this).find("div").css("display","block").stop().animate({"width":"322px","height":"202px"},500)
				})
				$(".list_cell2").mouseleave(function(){
					$(this).find("div").stop().animate({"width":"0","height":"0"},800,function(){
					$(".list_cell2").find("div").css("display","none")	
					})
				})
				},"json")
}