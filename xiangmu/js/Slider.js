/**
 * Created by Evil on 16/8/11.
 */
/**
 * @param _obj json格式的图片地址对象(集合)
 * @param step 动画向左|向右一次移动的步长
 * @param _t 表示动画执行的时间间隔
 * @constructor 轮播图
 */
 //第一张轮播图的函数
function Slider(_obj,step,_t){
    var _container=document.getElementById("container");//外层div
    var _s=document.getElementById("slider");//大div
    var _c=document.getElementById("circle");//下边的小圆圈的父级
    this.img=_obj;
    this.initCss=function(){//初始化屏幕样式
        _c.style.width=_c.children.length*25+10+"px";//
        _c.style.left=(_container.clientWidth-_c.clientWidth)/2+"px";
        _c.children[0].style.backgroundColor="red";//当前的circle子 颜色红
        _s.style.width=_container.clientWidth*_s.children.length+"px";//silder 的width是一屏幕宽*img的个数
    } 
    this.createDom=function(){//创建文本节点 img circle 里的 _point
        var _img=null,_point=null;
        for(var key in this.img){
            _img=document.createElement("img");
            _img.src=this.img[key];
            _s.appendChild(_img);
            _point=document.createElement("span");
            _c.appendChild(_point);
        }
        _img=document.createElement("img");//添加一个img进去 当图片轮播到最后一张时  这一张图片立即接上
        _img.src=this.img["img11"];
        _s.appendChild(_img);
    }

    var _timer=0,_index=0;
    function pointControl(){// 设置pointer的当前颜色为红色 其他是灰色
        for(var i=0;i<_c.children.length;i++){
            _c.children[i].style.backgroundColor="#ccc";
        }
        _c.children[_index].style.backgroundColor="red";
    }
    this.leftRun=function(){//  left run
        window.clearTimeout(_timer);//清空定时器
        var _step=0;
        var m_l=_container.clientWidth*(_s.children.length-1);//=Slider.clientWidth-800
        var _left=parseInt((_s.currentStyle || window.getComputedStyle(_s,null))["left"].replace(/px/g,""));
		
        //运动的过程中控制的是Slider,所以要知道Slider的当前left值
        _left=(_left<=-m_l?0:_left);//检查_left是否到达最后一张图。
        _step=Math.abs(_left)%_container.clientWidth;//计算出当前图片所在位置相对Container容器的left值。
        _left=Math.ceil(_left/_container.clientWidth)*_container.clientWidth;//计算出当前图片相对于Container的初始位置 向上取整
        (function exec(){
            window.clearTimeout(_timer);
            _step+=step;//步长
            _s.style.left=_left-_step+"px";//_left-_step:(_left:表示当前图片相对于Container的初始状态)+(-_step:当前图片相对Container实际移动的距离);表示当前实际位置。
            if(_step<_container.clientWidth) {
                _timer = window.setTimeout(exec, _t);
            }else{
                _left=parseInt((_s.currentStyle || window.getComputedStyle(_s,null))["left"].replace(/px/g,""));
                _index=Math.abs(_left/_container.clientWidth);
                _index=_index==_c.children.length?0:_index;
                pointControl();
            }
        })();
    }
    this.rightRun=function(){// right run
        window.clearTimeout(_timer);
        var _step=0;
        var m_l=_container.clientWidth*(_s.children.length-1);
        var _left=parseInt((_s.currentStyle || window.getComputedStyle(_s,null))["left"].replace(/px/g,""));
        _left=(_left>=0?-m_l:_left);
        _step=_container.clientWidth-Math.abs(_left)%_container.clientWidth;//计算当前图片相对于Container的可见的图片的宽度
        _step=_step==_container.clientWidth?0:_step;//检测当前图片是否移动结束,若果已经结束,进行下一张图片移动。
        _left=Math.floor(_left/_container.clientWidth)*_container.clientWidth;//计算当前图片假设已经移动完成,相对Container的left值。
        (function exec(){
            window.clearTimeout(_timer);
            _step+=step;
            _s.style.left=_left+_step+"px";
            if(_step<_container.clientWidth) {
                _timer = window.setTimeout(exec, _t);
            }else{
                _left=parseInt((_s.currentStyle || window.getComputedStyle(_s,null))["left"].replace(/px/g,""));
                _index=Math.abs(_left/_container.clientWidth);
                _index=_index==_c.children.length?0:_index;
                pointControl();
            }
        })();
    }
    this.autoRun=function(){//不点击也动
        var m_l=_container.clientWidth*(_s.children.length-1);
        var _left=0;
        (function exec(){
            window.clearTimeout(_timer);
            _left=parseInt((_s.currentStyle || window.getComputedStyle(_s,null))["left"].replace(/px/g,""));
            _left=(_left<=-m_l?0:_left);
            _s.style.left=_left-step+"px";//左边移动
            _left=parseInt((_s.currentStyle || window.getComputedStyle(_s,null))["left"].replace(/px/g,""));
            if(_left%_container.clientWidth==0) {
                _index=Math.abs(_left)/_container.clientWidth;
                _index=_index==_c.children.length?0:_index;
                pointControl();
                _timer = window.setTimeout(exec, 2000);
            }else{
                _timer = window.setTimeout(exec, _t);
            }
        })();
    }
    this.circleClick=function(n){//点击小圆圈图片滚动
        var m_l=_container.clientWidth*(_s.children.length-1);
        var _left=0;
        (function exec(){
            window.clearTimeout(_timer);
            _left=parseInt((_s.currentStyle || window.getComputedStyle(_s,null))["left"].replace(/px/g,""));
            _left=(_left<=-m_l?0:_left);
            _s.style.left=_left-step+"px";
            _left=parseInt((_s.currentStyle || window.getComputedStyle(_s,null))["left"].replace(/px/g,""));
            console.log(_left+","+_container.clientWidth*n);
            if(_left<=-m_l){
                _left=0;
            }
            if(_left==-_container.clientWidth*n) {
                _index=Math.abs(_left)/_container.clientWidth;
                _index=_index==_c.children.length?0:_index;
                pointControl();
                _timer = window.setTimeout(exec, 2000);
            }else{
                _timer = window.setTimeout(exec, _t);
            }
        })();
    }
}

//第二个轮播图的函数
function slider(){
	var _div=document.getElementById("main").children[0];
	var _timer=0;
	var _left=0;
	function startMove(){
		window.clearTimeout(_timer);
		_left-=20;
		_div.style.left=_left+"px";
		if(_left<=-1000){//移动到最后一张图 返回第一张
			_left=0;
		}
		_timer=window.setTimeout(startMove,300);
	}
	startMove();
}
//详情页放大效果下的轮播
function slder(){
	var _div=document.getElementById("main").children[0];
	var _timer=0;
	var _left=0;
	function startMove(){
		window.clearTimeout(_timer);
		_left-=20;
		_div.style.left=_left+"px";
		if(_left<=-300){
			_left=0;
		}
		_timer=window.setTimeout(startMove,300);
	}
	startMove();
}
window.onload=function(){
	//获取一屏幕
	var _main=document.getElementById("main");
	_main.style.height=_main.children[0].clientHeight+"px";
    var _slider=new Slider({"img11":"img/img11.bmp","img12":"img/img12.bmp","img13":"img/img13.bmp","img14":"img/img14.bmp","img15":"img/img15.bmp"},100,300);
    _slider.createDom();
    _slider.initCss();
    var _timer=window.setTimeout(function(){_slider.autoRun();},2000);
    document.getElementById("a_l").onclick=function(){
        window.clearTimeout(_timer);
        _slider.leftRun();
        _timer=window.setTimeout(function(){_slider.autoRun();},2000);
    }
    document.getElementById("a_r").onclick=function(){
        window.clearTimeout(_timer);
        _slider.rightRun();
        //_timer=window.setTimeout(function(){_slider.autoRun();},2000);
    }
    var _points=document.getElementById("circle").getElementsByTagName("span");
    for(var i=0;i<_points.length;i++) {
        (function (n) {
            _points[i].onclick = function () {
                window.clearTimeout(_timer);
                //alert(n);
                _slider.circleClick(n);
                _timer=window.setTimeout(function(){_slider.autoRun();},2000);
            }
        })(i);
    }
	
	//执行首页的第二个轮播图
	slider();
	
	//详情页 放大效果下的轮播
	var _main1=document.getElementById("main");
	_main1.style.height=_main1.children[0].clientHeight+"px";	
	slder();
}

		
			






