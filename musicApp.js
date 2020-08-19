let ham = document.querySelector(".ham");
let bottom = document.querySelector(".bottom");
let navClick = 0

ham.addEventListener ("click",openNavigation)

function openNavigation(){
bottom.style.height ="115px"	
bottom.style.width ="auto"
navClick++;

if (navClick%2 == 0)	{
bottom.style.height ="0px"	
bottom.style.width ="auto"		
		}	
	}
