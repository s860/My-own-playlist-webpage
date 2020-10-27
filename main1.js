

function search1()
{
	let a =document.querySelector("#value1").value;
	let getsidebaa=document.querySelectorAll(".table");

	let Englishslow=["Opmium","opmium","Somebody's me","Words","Perfect","To forgive","I hate you","New birds","Closer","Bathroom","Let her go","Woolworm","I am coming","Bread","All of me","Lioness","Photograph","Pure","somebody's me","words","perfect","to forgive","i hate you","new birds","closer","bathroom","let her go","woolworm","i am coming","bread","all of me","lioness","photograph","pure"];
	let i =0;
	let j=null;
	for(i=0;i<getsidebaa.length;i+=1)
	{
		if(a===getsidebaa[i])
		{
			j=getsidebaa[i];
			var r="I have that song check in the English slow songs playlist ";
		document.querySelector("#add").innerHTML=r; 
		


		}
		else{
			var k =" no such songs";
			document.querySelector("#add").innerHTML=k;
		}

	}	
}