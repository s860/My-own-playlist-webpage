let togglenav=false;
let toggle=function(){
	let getsidebar=document.querySelector(".nav-sidebar");
	let getsidebardiv=document.querySelector(".nav-sidebar div");
	let getsidebara=document.querySelectorAll(".nav-sidebar div a");
    let button=document.querySelector(".button-toggle-nav");

if(togglenav===false){
	getsidebardiv.style.visibility="visible";
	getsidebar.style.width= "180px";


	
	for (var i = 0; i < getsidebara.length; i++) {
		getsidebara[i].style.opacity="1";
	}
	togglenav=true;
}
else if(togglenav===true)
{
	getsidebardiv.style.visibility="hidden";
	getsidebar.style.width= "0";
	
	for (var i = 0; i < getsidebara.length; i++) {
		getsidebara[i].style.opacity="0";
	}
	togglenav=false;

}
}




let search1 = function()
{
	var a =document.querySelector("#value1").value;
	let getsidebtn=document.querySelector(".button2");
	getsidebtn.style.visibility = "visible";
	let getsidebar=document.querySelector(".nav-sidebar");
	getsidebar.style.height="calc(100vh - 157px)";



	var Englishslow=["Opmium","opmium","Somebody's me","Words","Perfect","To forgive","I hate you","New birds","Closer","Bathroom","Let her go","Woolworm","I am coming","Bread","All of me","Lioness","Photograph","Pure","somebody's me","words","perfect","to forgive","i hate you","new birds","closer","bathroom","let her go","woolworm","i am coming","bread","all of me","lioness","photograph","pure"];
	var i=0;
	var j=null;
	for(i=0;i<Englishslow.length;i++)
	{
		if(a==Englishslow[i])
		{
			j=Englishslow[i];
			var r="I have that song check in the English slow songs playlist ";
		document.querySelector(" #add ").innerHTML=r;
		


		}

	}	
}
