   
   
    var li_f1=document.getElementsByClassName("li_f1")[0];
    var ol_f1=li_f1.getElementsByClassName("ol")[0];
    li_f1.onmouseover=function(){
    	li_f1.style.background="white";
    	ol_f1.style.display="block"
    }
    li_f1.onmouseout=function(){
    	li_f1.style.background="#f1f1f1";
    	ol_f1.style.display="none"
    }
    
    var li_f2=document.getElementsByClassName("li_f2")[0];
    var ol_f2=li_f2.getElementsByClassName("ol")[0];
    li_f2.onmouseover=function(){
    	li_f2.style.background="white";
    	ol_f2.style.display="block"
    }
    li_f2.onmouseout=function(){
    	li_f2.style.background="#f1f1f1";
    	ol_f2.style.display="none"
    }
    var li_four=document.getElementsByClassName("four")[0];
    var ol_four=li_four.getElementsByTagName("ol")[0];
    li_four.onmouseover=function(){
    	li_four.style.background="white"
    	ol_four.style.display="block"
    	ol_four.style.background="white"
    }
    li_four.onmouseout=function(){
    	li_four.style.background="#f1f1f1"
    	ol_four.style.display="none"
    	
    }
