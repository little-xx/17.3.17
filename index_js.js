function Showlogin(){
	var sHeight=document.documentElement.clientHeight;
	var sWidth=document.documentElement.clientWidth;
	var maskstyle=document.getElementById("mask");
	var iMask=document.createElement("div"); 
	    iMask.style.height=sHeight+"px";
	    iMask.style.width=sWidth+"px";
        iMask.id="mask";
        document.body.appendChild(iMask);
    var iLogin=document.createElement("div");
	    iLogin.id="login";
	    iLogin.innerHTML="<p class=\'login_title\'>	Log in</p><form><input type=\'text\' placeholder=\'Username\' ><input type=\'password\' placeholder=\'Password\' ></form><div class=\'login_bottom\'><a href=\'#\'>Forgot your passord?</a><br><span class=\'forgot\'>Don\'t have a account?</span>&nbsp;<a href=\'#\'>Sign up</a></div><button class=\'Log_button\'><span class=\'state\'>Log in</span></button>";
	    document.body.appendChild(iLogin);
    iMask.onclick=function() {
		document.body.removeChild(iLogin);
		document.body.removeChild(iMask);
    }  
}


