const nav = document.getElementById("topNav");
const main = document.getElementById("main");
const menu = document.getElementsByClassName("menuitems");
const close = document.getElementById("closebtn");

//default to measure if/else from
nav.style.height = "50px";
main.style.marginTop = "0px";
for (i = 0; i < menu.length; i++)
{menu[i].style.marginTop="100px";};

close.addEventListener("click", function(){
  const menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++){
  menuIcon[i].classList.toggle("active");
  }   
});

function navToggle() {	
	//to close
	if (nav.style.height <= "235px") {
	nav.style.height = "50px";
	main.style.marginTop = "0px";
	
    	const i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="0.0";
	menu[i].style.marginTop="100px";
	};
    	document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
	
	} 
	//to open
	else if (nav.style.height <= "50px") {
	nav.style.height = "235px";
	
    	const i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="1.0";
	menu[i].style.marginTop="0px";
	};
    	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	
	}

};
